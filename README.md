# angular-elastic-grid

[![Build Status](https://travis-ci.org/lbenie/angular-elastic-grid.svg?branch=master)](https://travis-ci.org/lbenie/angular-elastic-grid) [![devDependency Status](https://david-dm.org/lbenie/angular-elastic-grid/dev-status.svg)](https://david-dm.org/lbenie/angular-elastic-grid#info=devDependencies) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![npm version](https://badge.fury.io/js/angular-elastic-grid.svg)](https://badge.fury.io/js/angular-elastic-grid) [![Bower version](https://badge.fury.io/bo/angular-elastic-grid.svg)](https://badge.fury.io/bo/angular-elastic-grid)

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

```html
...
...
<elastic-grid items="[{
          "title": "Title 1",
          "description": "This is a description.",
          "thumbnail": ["https://pixabay.com/en/boy-child-fun-beach-sea-colors-958457/"],
          "large": ["https://pixabay.com/en/christmas-santa-claus-fig-993304/"],
          "button_list": [{"title": "Demo", "url": "http://#"}, {"title": "Download", "url": "http://#"}],
          "tags": ["Test"]
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
