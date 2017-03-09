# neutrino-preset-decorators
[![NPM version](https://img.shields.io/npm/v/neutrino-preset-decorators.svg)](https://www.npmjs.com/package/neutrino-preset-decorators)

This project provides a [Neutrino](https://neutrino.js.org) preset for transforming decorators to be usable in most browsers. Uses the [Babel Decorators transform](https://babeljs.io/docs/plugins/transform-decorators/) which includes:

```js

```

If you're using Mobx with React, you'll need decorators, class properties and the React neutrino presets. Here's a single preset that will take care of that: [jke-neutrino-preset-react-mobx](https://github.com/joakimkemeny/jke-neutrino-preset-react-mobx)


## Usage

Create a project with a `package.json` like this.

```javascript
{
   "name": "myapp",
   "version": "1.0.0",
   "config": {
      "presets": [
         "neutrino-preset-decorators"
      ]
   },
   "scripts": {
      "build": "neutrino build",
      "start": "neutrino start"
   },
   "dependencies": {
   },
   "devDependencies": {
      "neutrino": "^4.3.1",
      "neutrino-preset-decorators": "0.1.1"
   }
}
```

### Peer dependencies

- [neutrino](https://www.npmjs.com/package/neutrino): Used to run this project
