(function () {
  var ageBlock = document.getElementById('age'),
    expBlock = document.getElementById('exp'),
    born = new Date('1994-08-01'),
    work = new Date('2015-05-01'),
    now = new Date(),
    age = new Date(now - born),
    exp = new Date(now - work);

  ageBlock.innerText = (age.getYear() - 70) + ' years';
  expBlock.innerText = Math.round((exp.getYear() - 70 + exp.getMonth() / 12) / 0.5) * 0.5 + ' years';
})();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('Service worker registered! 😎', reg);
      })
      .catch(err => {
        console.log('😥 Service worker registration failed: ', err);
      });
  });
};

// Yandex.Metrika counter
(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter35320200 = new Ya.Metrika({
        id: 35320200,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    } catch (e) { }
  });

  var n = d.getElementsByTagName('script')[0],
    s = d.createElement('script'),
    f = function () {
      n.parentNode.insertBefore(s, n);
    };
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://mc.yandex.ru/metrika/watch.js';

  if (w.opera == '[object Opera]') {
    d.addEventListener('DOMContentLoaded', f, false);
  } else {
    f();
  }
})(document, window, 'yandex_metrika_callbacks');