import { types } from "sass";
import String = types.String;

{
  // Theming
  const html = document.querySelector('html'),
    themes = { auto: 'auto', dark: 'dark', light: 'light' },
    states = Object.keys(themes),
    switcher = document.getElementById('theme-switcher'),
    rotator = document.getElementById('theme-rotator');

  html.classList.remove('no-js');
  switcher.classList.remove('off');

  const storage = {
    get: () => localStorage.getItem('theme') || states[0],
    set: theme => localStorage.setItem('theme', theme)
  };

  let angle = states.indexOf(storage.get());

  const setTheme = theme => {
    rotator.style.transform = `rotate(-${ angle++ * 120 }deg)`;
    switch (theme) {
      case themes.auto:
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          html.classList.add('light');
        } else {
          html.classList.remove('light');
        }
        break;
      case themes.dark:
        html.classList.remove('light');
        break;
      case themes.light:
        html.classList.add('light');
        break;
    }
  };

  setTheme(storage.get());

  switcher.addEventListener('click', () => {
    const theme = states[angle % 3];
    setTheme(theme);
    storage.set(theme);
  });
}

{
  const value = decodeURI(location.hash).slice(1);
  if (value.length) {
    document.querySelector('blockquote').innerText = value;
  }
}

{
  // ServiceWorker
  if (location.hostname !== 'localhost') {
    if ('serviceWorker' in navigator) {
      const swMessages = reg => {
        navigator.serviceWorker.addEventListener('message', event => {
          const message = event.data;
          console.log('[APP]: new message from ServiceWorker:', message);
          if (event.data && event.data.type === 'VERSION_OUTDATED') {
            reg.unregister().then();
            location.reload();
          }
        });
      };

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.getRegistration().then(reg => {
          swMessages(reg);
        });

        navigator.serviceWorker.controller.postMessage({ type: 'CHECK_VERSION' });
      } else {
        navigator.serviceWorker
          .register('sw.js', {
            scope: './'
          })
          .then(reg => {
            swMessages(reg);
          });
      }
    }
  }
}

{
  // Yandex.Metrika counter
  if (location.hash === '#do-not-track' || location.hostname === 'localhost') {
    console.log('I will not track you');
  } else {
    (function (m, e, t, r, i, k, a) {
      try {
        m[i] = m[i] || function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
        // @ts-ignore
        m[i].l = 1 * new Date();
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      } catch (e) {
        console.warn('Yandex.Metrika is blocked');
      }
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
    // @ts-ignore
    ym(35320200, 'init', {
      id: 35320200,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }
}

{
  document.addEventListener('mousedown', () => {
    const hue = Number(getComputedStyle(document.documentElement).getPropertyValue('--hue')) + 30;
    document.documentElement.style.setProperty('--hue', hue+'');
  })
}
