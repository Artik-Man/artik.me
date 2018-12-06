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
            .then(function (reg) { })
            .catch(function (err) { });
    });
};

// Yandex.Metrika counter
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")

ym(35320200, "init", {
    id: 35320200,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});
