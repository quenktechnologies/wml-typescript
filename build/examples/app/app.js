(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _TextNode = require("./TextNode");

var _TextNode2 = _interopRequireDefault(_TextNode);

/**
 * CompositeNode represents a node that can have children.
 * @param {string|function} cons 
 * @param {object} attrs 
 * @param {array} children 
 * @param {WMLTree} tree 
 * @implements {Node}
 */

var CompositeNode = (function () {
    function CompositeNode(cons, attrs, children, tree) {
        _classCallCheck(this, CompositeNode);

        console.log("childre ", cons, attrs, children);
        this._cons = cons;
        this._attrs = attrs;
        this._children = children;
        this.tree = tree;
    }

    _createClass(CompositeNode, [{
        key: "toDOMNode",
        value: function toDOMNode() {
            var _this = this;

            var children;
            var el;

            children = this._children.map(function (c) {
                return Array.isArray(c) ? new CompositeNode(c[0], c[1], c[2], _this._tree) : new _TextNode2["default"](c);
            });

            if (typeof this._cons === "string") {

                el = document.createElement(this._cons);

                Object.keys(this._attrs).forEach(function (k) {
                    return typeof _this._attrs[k] === "function" ? el[k] = _this._attrs[k] : el.setAttribute(k, _this._attrs[k]);
                });

                children.forEach(function (c) {
                    return el.appendChild(c.toDOMNode());
                });

                return el;
            } else if (typeof this._cons === "function") {

                el = this._cons.create(this._attrs);

                if (this._attrs["data-wml-id"]) this._tree.register(this._attrs["data-wml-id"], el);

                return el.onDOM(this._attrs, children);
            }

            throw new Error("Widgets must be string or function not '" + typeof this._cons + "'");
        }
    }]);

    return CompositeNode;
})();

exports["default"] = CompositeNode;
module.exports = exports["default"];

},{"./TextNode":2}],2:[function(require,module,exports){
/**
 * TextNode for cdata?
 * @param {string} data 
 * @implements {Node}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var TextNode = (function () {
    function TextNode(data) {
        _classCallCheck(this, TextNode);

        this.data = data;
    }

    _createClass(TextNode, [{
        key: "toDOMNode",
        value: function toDOMNode() {

            return document.createTextNode(this.data);
        }
    }]);

    return TextNode;
})();

exports["default"] = TextNode;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _CompositeNode = require("./CompositeNode");

var _CompositeNode2 = _interopRequireDefault(_CompositeNode);

/**
 * WMLTree is our version of the DOM.
 * It's pretty low tech but the idea is to use this
 * so we can pretend the DOM supports custom elements.
 *
 * The API of interest to the end user is the findById()
 * method that allows registered widgets to be retrieved much
 * like you would DOM nodes.
 *
 * @param {array} tree 
 *
 */

var WMLTree = (function () {
    function WMLTree(tree) {
        _classCallCheck(this, WMLTree);

        this.root = new _CompositeNode2["default"](tree[0], tree[1], tree[2], this);
        this._ids = Object.create(null);
    }

    /**
     * findById retrives a widget based on an id, works only if the
     * widget had an 'data-wml-id' attribute attached to it.
     * NOTE: The root widget is not accesible this way
     * @param {string} id 
     * @returns {object|null}
     */

    _createClass(WMLTree, [{
        key: "findById",
        value: function findById(id) {

            return this._ids[ids] ? this._ids[id] : null;
        }

        /**
         * register a widget so that is can be retrived later
         * @param {string} id 
         * @param {object} widget 
         */
    }, {
        key: "register",
        value: function register(id, widget) {

            if (this._ids[id]) throw new Error("Duplicate id " + id + " detected!");

            this._ids[id] = widget;
        }

        /**
         * render this tree into the DOM
         * @param {HTMLElement} target 
         */
    }, {
        key: "render",
        value: function render(target) {

            target.appendChild(this.root.toDOMNode());
        }
    }]);

    return WMLTree;
})();

exports["default"] = WMLTree;
module.exports = exports["default"];

},{"./CompositeNode":1}],4:[function(require,module,exports){
/**
 * Input 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Input = (function () {
    function Input() {
        _classCallCheck(this, Input);
    }

    _createClass(Input, [{
        key: "onDOM",
        value: function onDOM(attrs, childs) {

            var input = document.createElement("input");
            input.addEventListener("change", {
                handleEvent: function handleEvent(e) {
                    console.log("we had an event ", e);
                }
            });
            return input;
        }
    }]);

    return Input;
})();

Input.create = function () {

    return new Input();
};
exports["default"] = Input;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

var _widgetWml = require("./widget.wml");

var _widgetWml2 = _interopRequireDefault(_widgetWml);

var _coreWMLTree = require("../../core/WMLTree");

var _coreWMLTree2 = _interopRequireDefault(_coreWMLTree);

new _coreWMLTree2["default"]((0, _widgetWml2["default"])()).render(document.getElementById("main"));

},{"../../core/WMLTree":3,"./widget.wml":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

exports['default'] = function () {
  return ['div', { 'class': 'container' }, ['', ['div', { 'class': 'col-md-8' }, ['', [_Input2['default'], {}, []], '']], '']];
};

module.exports = exports['default'];

},{"./Input":4}]},{},[5]);
