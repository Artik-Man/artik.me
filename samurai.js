import {readFileSync, writeFile} from 'fs';
import {extname, resolve, basename} from 'path';
import {Samurai} from "samuraijs";
import imagemin from 'imagemin';
import pngToJpeg from 'png-to-jpeg';
import imageminWebp from 'imagemin-webp';

const minifyImage = (path, destination, plugin, options) => {
  return imagemin([path], {
    destination: destination,
    plugins: [
      plugin(options)
    ],
  });
}

new Samurai({
  paths: {
    source: 'src',
    destination: 'dist',
    assets: ['src/assets'],
    exclude: ['src/templates', 'src/styles', 'src/scripts']
  },
  logLevel: 'debug',
  nunjucks: {
    autoescape: true,
    trimBlocks: true,
    noCache: true,
    globals: {
      loadJS: (path) => {
        const code = readFileSync(resolve(path), "utf8");
        return eval(code);
      }
    }
  },
  esbuild: {
    minify: true,
    bundle: true,
    write: false
  },
  sass: {
    outputStyle: "compressed"
  },
  server: {
    port: 3000,
    open: false
  },
  fileProcessor: (path) => {
    const ext = extname(path);
    const sourcePath = 'assets/images/projects/';
    if (path.includes(resolve(`./src/${sourcePath}`)) && ['.png'].includes(ext)) {
      const dest = resolve(`./dist/${sourcePath}`);
      minifyImage(path, dest, imageminWebp, {quality: 90});
      minifyImage(path, undefined, pngToJpeg, {quality: 90}).then(files => {
        files.forEach(file => {
          writeFile(resolve(dest, basename(path).replace('.png', '.jpg')), file.data, () => {
          })
        })
      });

      return true;
    }
    return false;
  }
});
