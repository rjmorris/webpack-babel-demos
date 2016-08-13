This demo contains a minimal webpack/Babel setup. The goals of this demo are:

- Use Babel to transpile ES2015 code containing JavaScript modules.
- Use webpack to bundle the resulting code.

Lots of webpack functionality is excluded from this demo. Notably:

- No bundling of HTML and CSS. Instead, these files are considered static and are stored directly in the `dist` directory.
- No development server. Instead, you should start a server manually in the `dist` directory.
- No hot module replacement. Instead, you should run `npm run build` and reload the page in your browser whenever you make a change.

Install and run with:

1. `npm install`
1. `npm run build`
1. `cd dist`
1. Start a webserver from the `dist` directory (for example, with `http-server`) and visit the URL in your browser.
