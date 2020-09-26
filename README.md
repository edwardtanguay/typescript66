# typescript66

Develop minimal HTML/JavaScript websites in Visual Studio with TypeScript, no Webpack, no npm.

**Technologies:**

- HTML
- CSS
- TypeScript

**Characteristics:**
- extremely small footprint
- single-page application
- TypeScript *(all in one file)*
- no npm
- no Webpack
- no JavaScript framework like Vue or React
- no templating (send HTML as output)

## One-time setup
- `npm install -g live-server`
- `npm i -g typescript`
- `npm i -g node-sass`

## Start developing
- open in Visual Studio Code
- `npm run ts` *(watches and transpiles TypeScript to JavaScript)*
- `npm run sass` *(watches and transpiles SASS to CSS)*
- right-click **index.html**, choose **Open with Live Server** *(changes will now immediately appear in browser)*
- in `index.html`, delete parameter from this line: `var site = siteLoader("deleteThisToDevelopSite");`
- start developing in `ts/main.ts` and `scss/main.scss` 

## Upcoming features
- add Vue.js so it's templated
- add SASS
- add Bootstrap 4 (via CDN)
- reponsive base site to develop in

## Current Developers

* Edward Tanguay - https://github.com/edwardtanguay

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project uses the [MIT License](https://choosealicense.com/licenses/mit). Feel free to use, change, share, and distribute freely.