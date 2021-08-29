const gulp = require('gulp');
const less = require('gulp-less');
const rename = require("gulp-rename");
const cssmin = require('gulp-cssmin');
const plumber = require('gulp-plumber');
const htmlmin = require("gulp-htmlmin");
const nunjucks = require('gulp-nunjucks');
const sync = require("browser-sync").create();

const careerStartDate = new Date('2015-05-01');
const currentDate = new Date();
const experience = Math.round(currentDate.getFullYear() - careerStartDate.getFullYear());
const now = {
  year: currentDate.getFullYear(),
  month: 12
}
const iconsSizes = [16, 48, 72, 76, 96, 120, 128, 144, 152, 180, 192, 256, 384, 512];
const contacts = [
  {
    url: 'tel:+79062824201',
    label: 'Phone',
    iconClass: 'phone.svg',
    text: '+7 906 282 42 01'
  },
  {
    url: 'mailto:mail@artik.me',
    label: 'Email',
    iconClass: 'email.svg',
    text: 'mail@artik.me'
  },
  {
    url: 'https://github.com/Artik-Man',
    label: 'GitHub',
    iconClass: 'github.svg',
    text: 'GitHub',
    fullText: 'github.com/Artik-Man'
  },
];
const projects = [
  {
    title: 'HTML Practice',
    url: 'https://artik-man.github.io/HTML-Practice/',
    picture: 'html-practice',
    contribution: '[Personal project] This is book is for my students. Front end development, print/book layout.',
    techList: ['WebPack', 'TypeScript', 'LESS', 'Pug']
  },
  {
    title: 'Material Theme Creator',
    url: 'https://artik-man.github.io/material-theme-creator/',
    picture: 'material-theme-creator',
    contribution: '[Personal project] This library is designed to converting Angular Material themes to CSS Custom Properties (CSS Variables). In addition, you can create a Material-like theme from one color.',
    techList: ['SCSS', 'CSS Custom Properties', 'Angular Material']
  },
  {
    title: 'Kaspersky Lab: Tailored Intelligence Reporting System',
    picture: 'kaspersky',
    contribution: 'Front end development of internal data collection/analysis portal for the analytical department.',
    techList: ['Angular', 'TypeScript', 'WebSocket']
  },
  {
    title: 'WebSocket Post Server',
    url: 'https://github.com/Artik-Man/ws-post-server',
    picture: 'wsps',
    contribution: '[Personal project] Back end development of simple WebSocket Server',
    techList: ['Node.js', 'WebSocket', 'Express.js']
  },
  {
    title: 'Hiddens',
    url: 'https://github.com/Artik-Man/hiddens',
    picture: 'hiddens',
    contribution: '[Personal project] Front end development of simple chat, based on WebSocket Post Server',
    techList: ['Angular', 'WebSocket', 'Hammer.js']
  },
  {
    title: 'Kaspersky Lab: Managed Protection',
    picture: 'kmp',
    contribution: 'Front end development of threat-hunting sequrity service.',
    techList: ['Angular', 'TypeScript', 'Webpack']
  },
  {
    title: 'Hashboard cabinet',
    url: 'https://new.hashboard.ru/cabinet/',
    picture: 'hashboard-cabinet',
    contribution: 'Front end development of #hashboard service. This web application uses client-side localization, HTML5 Audio/Video, the combination of AngularJS + RequireJS + REST API.',
    techList: ['AngularJS', 'RequireJS', 'REST']
  },
  {
    title: 'Hashboard player',
    url: 'https://new.hashboard.ru/play/?login=artik@hb.ru',
    picture: 'hashboard-player',
    contribution: 'Front end development of #hashboard service. This web application uses HTML5 Video and Audio, handles internet-connection troubles. Web site has a fluid layout.',
    techList: ['jQuery', 'RequireJS', 'REST']
  },
  {
    title: 'Hashboard',
    url: 'https://hashboard.ru',
    picture: 'hashboard',
    contribution: 'Front end development of #hashboard service. Cross-browser code, responsive layout, Website localization.',
    techList: ['jQuery', 'Bootstrap', 'LESS']
  },
  {
    title: 'Pricereporter',
    url: 'http://primepix.ru/portfolio/mgrabber/',
    picture: 'pr',
    contribution: 'Front end web development and technical support of a commercial site',
    techList: ['jQuery', 'Bootstrap', 'Bitrix']
  },
  {
    title: 'Artik.me',
    url: 'https://github.com/Artik-Man/artik.me',
    picture: 'artik',
    contribution: '[Personal project] Full cycle of development of web page: from design to caching with ServiceWorker',
    techList: ['ServiceWorker', 'CSS Custom Properties', 'Nunjucks']
  }
];
const lifeline = [
  {
    title: 'Northern (Arctic) Federal University',
    url: 'https://narfu.ru',
    text: `
    <p>Institute of Mathematics, Information and Space Technologies</p>
    <p><b>Bachelor's degree</b></p>
    `,
    from: {year: 2012, month: 9},
    to: {year: 2016, month: 6}
  },
  {
    title: 'Northern (Arctic) Federal University',
    url: 'https://narfu.ru',
    text: `
    <p>Higher School of Information Technologies and Automated Systems</p>
    <p><b>Master's degree</b></p>
    `,
    from: {year: 2016, month: 9},
    to: {year: 2018, month: 6}
  },
  {
    title: 'Webmaster Courses',
    from: {year: 2014, month: 2},
    to: {year: 2014, month: 7},
    classes: 'no-print'
  },
  {
    title: 'PrimePix',
    url: 'http://primepix.ru',
    text: '<p>Junior Frontend Developer</p>',
    from: {year: 2015, month: 5},
    to: {year: 2016, month: 5}
  },
  {
    title: 'Hashboard',
    url: 'https://hashboard.ru',
    text: '<p>Frontend Developer</p>',
    from: {year: 2016, month: 6},
    to: {year: 2017, month: 4}
  },
  {
    title: 'Luxoft',
    url: 'https://luxoft.com',
    text: '<p>Senior Frontend Developer</p>',
    from: {year: 2017, month: 5},
    to: {year: 2018, month: 5}
  },
  {
    title: 'Kaspersky Lab.',
    url: 'https://kaspersky.com',
    text: '<p>Developer</p>',
    from: {year: 2018, month: 6},
    to: now
  },
  {
    title: 'HTML Academy',
    url: 'https://htmlacademy.ru',
    text: `
    <p><b>Mentor</b></p>
    <p>I taught HTML, CSS, and Javascript</p>
    `,
    from: {year: 2020, month: 3},
    to: {year: 2021, month: 5}
  },
  {
    title: 'Diasoft',
    url: 'https://www.diasoft.ru/',
    text: '<p>Lead Software Engineer</p>',
    from: {year: 2021, month: 6},
    to: now,
    classes: 'fix-start'
  }
].sort((a, b) => a.from.year - b.from.year)
const yMin = Math.min(...lifeline.map(p => p.from.year));
const yMax = Math.max(...lifeline.map(p => p.to.year));
const years = new Array(yMax - yMin + 1).fill(0).map((x, i) => yMax - i);
const months = `January,February,March,April,May,June,July,August,September,October,November,December`.split(',');
const meta = {
  title: 'Artik Man — frontend-developer',
  full_name: 'Artik Man',
  name: 'Artik',
  description: `Frontend developer with over ${experience} years of experience. Current stack: TypeScript + Angular`,
  url: 'https://artik.me',
  card: 'styles/images/icons/card.png',
  color: '#10272f'
};

const data = {
  meta,
  iconsSizes,
  contacts,
  projects,
  experience,
  lifeline,
  years,
  months,
  now
}

const html = () => (
  gulp.src('./templates/index.njk')
    .pipe(nunjucks.compile(data))
    .pipe(htmlmin({collapseWhitespace: true, conservativeCollapse: true}))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('./'))
    .pipe(sync.stream())
);


const css = () => (
  gulp.src("./styles/styles.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest("./styles"))
    .pipe(sync.stream())
);

const server = (done) => {
  sync.init({
    open: false,
    server: {
      baseDir: './'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const watcher = () => {
  gulp.watch("./styles/**/*.less", gulp.series(css));
  gulp.watch("./*.js", gulp.series(sync.reload));
  gulp.watch("./templates/*.njk", gulp.series(html)).on("change", sync.reload);
}


exports.default = gulp.series(html, css);

exports.serve = gulp.series(server, watcher);
