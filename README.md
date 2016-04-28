Widget Markup Language
======================
[![Build Status](https://img.shields.io/travis/quenktechnologies/wml/master.svg)](https://travis-ci.org/quenktechnologies/wml)

## About

The Widget Markup Language (WML) is a set of tools created to make User Interface (UI)
development of Single Page Applications (SPA) easier. It provides a xml like templating
syntax that can be turned into javascript (ES 2015).

## Example

The markup below:

```xml

import Panel from 'panels';

<div class="container">

 <Panel onclick={{this.panelClicked.bind(this)}}/>

</div>

```

is turned into:

```javascript

export default function (make) {

 return make.element('div', {class:'container'},
         make.widget(Panel, {onclick:this.panelClicked.bind(this)}, null));

}


```

## Usage

Utilizing wml depends on you having a bundling step in your development process.
Typically, [browserify](https://browserify.org). Everything else needed is included in this package, some assembly required.

1. You can start with a main file in your sources, let's call it `main.js`.

```javascript

//main.js

import template from './template';


```

## License

Apache-2.0

