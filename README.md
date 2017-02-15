# angular-elastic-grid

[![Greenkeeper badge](https://badges.greenkeeper.io/lbenie/angular-elastic-grid.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/lbenie/angular-elastic-grid.svg?branch=master&maxAge=2592000)](https://travis-ci.org/lbenie/angular-elastic-grid) [![devDependency Status](https://david-dm.org/lbenie/angular-elastic-grid/dev-status.svg?maxAge=2592000)](https://david-dm.org/lbenie/angular-elastic-grid#info=devDependencies) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/) [![version](https://img.shields.io/npm/v/angular-elastic-grid.svg?maxAge=2592000)](https://www.npmjs.org/package/angular-elastic-grid) [![npm](https://img.shields.io/npm/dt/angular-elastic-grid.svg?maxAge=2592000)](https://www.npmjs.org/package/angular-elastic-grid)
[![GitHub release](https://img.shields.io/github/release/lbenie/angular-elastic-grid.svg?maxAge=2592000)](https://github.com/lbenie/angular-elastic-grid/releases/)
![node](https://img.shields.io/node/v/angular-elastic-grid.svg) [![license](https://img.shields.io/github/license/lbenie/angular-elastic-grid.svg?maxAge=2592000)](https://github.com/lbenie/angular-elastic-grid/blob/master/LICENSE)

## Installation

install `angular-elastic-grid` by bower or npm running the following command

```sh
bower install angular-elastic-grid --save
or
npm install angular-elastic-grid --save
```

or download
[here](https://raw.githubusercontent.com/lbenie/angular-elastic-grid/master/dist/angular-elastic-grid.min.js) then
append `angular-elastic-grid.min.js` in to end of body, before your project, after the `angular` and the other
libs.

```html
<!--using bower-->
...
...
<script src="../bower_components/angular-elastic-grid/dist/angular-elastic-grid.min.js"></script>
...
...
</body>
</html>
```

```html
<!--using npm-->
...
...
<script src="../node_modules/angular-elastic-grid/dist/angular-elastic-grid.min.js"></script>
...
...
</body>
</html>
```

add `angular-elastic-grid` as a module dependency for your app

```js
angular.module('my.app', [
    'angular-elastic-grid'
])
```

### Usage

There are eight filter options for `elastic_grid.js`

-   `popup`
-   `none`
-   `moveup`
-   `scaleup`
-   `fallperspective`
-   `helix`
-   `fly`
-   `flip`

items must be an array.
filter uses the 'none' filter if no filter is defined.

Optionals: direction, speed, height, delay and inverse.

```html
<div elastic-grid>
</div>
...
or
...
<elastic-grid></elastic-grid>
...
or
...
<elastic-grid items="[{
  title: 'Title 1',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test']
}, {
  title: 'Title 2',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test, Title2']
}, {
  title: 'Title 3',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test, Title1']
}]" filter="popup"></elastic-grid>
...
or
...
<elastic-grid items="[{
  title: 'Title 1',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test']
}, {
  title: 'Title 2',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test, Title2']
}, {
  title: 'Title 3',
  description: 'This is a description.',
  thumbnail: ['http://placehold.it/350x150'],
  large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
  button_list: [
    { title: 'Demo', url: 'http://placehold.it/450x350'},
    { title: 'Download', url: 'http://placehold.it/450x350'}
  ],
  tags: ['Test, Title1']
}]" filter="popup" direction=true speed=500 height=500 delay=0 inverse=false> </elastic-grid>
...
...
```

### Development

-   install node and bower on your environment

cd to your desired folder and clone `angular-elastic-grid` repository

```sh
git clone https://github.com/lbenie/angular-elastic-grid
cd angular-elastic-grid
```

install all project dependencies

```sh
npm install
bower install
```

serve automated test once

```sh
#unit test without live reload
gulp test-src
```

serve automated tests and builds

```sh
#unit test with live reload + build
gulp
```

build all to distribution

```sh
#this generates minified src at `dist/angular-elastic-grid.min.js`
gulp build
```

---

**Notes:**

-   To contribute with this awesome project, just open an issue, then fork the project and make a new branch to do your
work.

-   Run `gulp build` before making your PR.

-   [Changelog](https://github.com/lbenie/angular-elastic-grid/releases)

Feel free to open issues if you run into a problem or if you just have suggestions. PR´s are always welcome.

---

#### License

`angular-elastic-grid` is open-sourced software licensed under [MIT](http://opensource.org/licenses/MIT).
