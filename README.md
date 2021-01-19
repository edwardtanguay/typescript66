# typescript66

Minimal single-page app to learn TypeScript and SASS, but no complicated Webpack, etc.

## Technologies:

- HTML
- TypeScript
- SASS

## Characteristics:
- extremely small footprint
- single-page application
- TypeScript (bundled to one file)
- SASS
- **no web server required, can run as file in browser**
- no npm
- no Webpack
- no JavaScript framework like Vue or React
- no templating (send HTML as output)

## Uses:
- learn, teach and practice TypeScript and SASS
- fast-loading, display-only, JSON-based data sites
- no HTTP server needed, just open index.html or use live-server

## Setup
- `npm install -g live-server`
- `npm i -g typescript`
- `npm i -g node-sass`

## Start developing
- open in Visual Studio Code
- `npm run ts` *(watches and transpiles TypeScript to JavaScript)*
- `npm run sass` *(watches and transpiles SASS to CSS)*
- right-click **index.html**, choose **Open with Live Server** *(changes will now immediately appear in browser)*
- in `index.html`, delete parameter from this line: `var site = siteLoader("deleteThisToDevelopSite");`
- start developing in `ts/site.ts` and `scss/main.scss` 

## Add features
- add Bootstrap 4 (via CDN)
- add Vue.js for interaction
- make site responsive by default
- add JSON reading/writing

## Current Developers

- Edward Tanguay - https://github.com/edwardtanguay

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project uses the [MIT License](https://choosealicense.com/licenses/mit). Feel free to use, change, share, and distribute freely.

## See more mini-framworks like this

Browser around at: http://onespace.netlify.app/miniframeworks