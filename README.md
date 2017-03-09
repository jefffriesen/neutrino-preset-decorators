# neutrino-preset-class-properties
[![NPM version](https://img.shields.io/npm/v/neutrino-preset-class-properties.svg)](https://www.npmjs.com/package/neutrino-preset-class-properties)

This project provides a [Neutrino](https://neutrino.js.org) preset for transforming class properties. Uses the [Babel Class properties transform](https://babeljs.io/docs/plugins/transform-class-properties/) which includes:

```js
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
      return this.instanceProperty;
    }

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    }
  }
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
         "neutrino-preset-class-properties"
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
      "neutrino-preset-class-properties": "0.1.1"
   }
}
```

Now you are ready to put your React components into `src/` and start coding. Be aware that Neutrino creates the HTML template for you automatically. For more information see the web sites for [Neutrino](https://neutrino.js.org), [React](https://facebook.github.io/react) and [MobX](https://mobx.js.org).

### Peer dependencies
[![peerDependency status](https://img.shields.io/david/peer/jefffriesen/neutrino-preset-class-properties/master.svg)](https://david-dm.org/joakimkemeny/nneutrino-preset-class-properties/master#info=peerDependencies)

- [neutrino](https://www.npmjs.com/package/neutrino): Used to run this project
