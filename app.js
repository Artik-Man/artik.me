(function() {
  var ageBlock = document.getElementById("age"),
    expBlock = document.getElementById("exp"),
    born = new Date("1994-08-01"),
    work = new Date("2015-05-01"),
    now = new Date(),
    age = new Date(now.getTime() - born.getTime()),
    exp = new Date(now.getTime() - work.getTime()),
    start = new Date(0);

  ageBlock.innerText = age.getFullYear() - start.getFullYear() + " years";
  expBlock.innerText =
    Math.round((exp.getFullYear() - start.getFullYear() + exp.getMonth() / 12) / 0.5) * 0.5 + " years";

  var html = document.getElementById("html");
  var themeSwitcher = document.getElementById("theme-switcher");
  themeSwitcher.classList.remove("hidden");
  themeSwitcher.addEventListener("change", function(event) {
    var checked = event.target.checked;
    if (checked) {
      html.classList.add("light");
      localStorage.setItem("light-theme", event.target.checked);
    } else {
      html.classList.remove("light");
      localStorage.removeItem("light-theme");
    }
  });

  if (localStorage.getItem("light-theme")) {
    html.classList.add("light");
    themeSwitcher.checked = true;
  }

  window.matchMedia("(prefers-color-scheme: light)").addListener(
    e =>
      e.matches &&
      (() => {
        html.classList.add("light");
        themeSwitcher.checked = true;
      })()
  );

  window.matchMedia("(prefers-color-scheme: dark)").addListener(
    e =>
      e.matches &&
      (() => {
        html.classList.remove("light");
        themeSwitcher.checked = false;
      })()
  );
})();

if ("serviceWorker" in navigator) {
  var swMessages = function(reg) {
    navigator.serviceWorker.addEventListener("message", function(event) {
      const message = JSON.parse(event.data);
      console.log("[APP]: new message from ServiceWorker:", message);
      if (message.code === 1) {
        reg.unregister();
      }
    });
  };

  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.getRegistration().then(reg => {
      swMessages(reg);
    });
  } else {
    navigator.serviceWorker
      .register("sw.js", {
        scope: "./"
      })
      .then(function(reg) {
        swMessages(reg);
      });
  }
}

// Yandex.Metrika counter
(function(m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function() {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(35320200, "init", {
  id: 35320200,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});
