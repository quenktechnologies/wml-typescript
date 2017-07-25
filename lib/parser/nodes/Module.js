'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Templates = require('../Templates');

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPluginTransformExportExtensions = require('babel-plugin-transform-export-extensions');

var _babelPluginTransformExportExtensions2 = _interopRequireDefault(_babelPluginTransformExportExtensions);

var _jsBeautify = require('js-beautify');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var es5 = function es5(js) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return babel.transform(js, Object.assign({
        sourceMaps: true,
        presets: [_babelPresetEs2.default],
        plugins: [_babelPluginTransformExportExtensions2.default],
        highlightCode: false
    }, opts)).code;
};

var pretty = _jsBeautify.js_beautify;

/**
 * Module
 * @param {array<Import>} imports
 * @param {array<string>} uses
 * @param {Tag} root
 * @param {Location} location
 */

var Module = function (_Node) {
    _inherits(Module, _Node);

    function Module(imports, exports, root, location) {
        _classCallCheck(this, Module);

        var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this));

        _this.type = 'module';
        _this.imports = imports;
        _this.exports = exports;
        _this.root = root;
        _this.location = location;

        return _this;
    }

    _createClass(Module, [{
        key: 'transpile',
        value: function transpile(o) {

            var pipeline = [];
            var imports = this.imports.map(function (i) {
                return i.transpile(o);
            }).join('');
            var exports = this.exports.map(function (e) {
                return e.transpile(o);
            }).join('');
            var view = this.root ? (0, _Templates.view)('Main', this.root, o) : '';
            var output = function output(code) {
                return pipeline.reduce(function (p, c) {
                    return c(p);
                }, code);
            };

            if (o.es5) pipeline.push(_typeof(o.es5) === 'object' ? function (s) {
                return es5(s, o.es5);
            } : es5);

            if (o.pretty) pipeline.push(pretty);

            return output(imports + ' \n ' + (0, _Templates.preamble)(o) + ' \n ' + exports + ' ' + view);
        }
    }]);

    return Module;
}(_Node3.default);

exports.default = Module;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTW9kdWxlLmpzIl0sIm5hbWVzIjpbImJhYmVsIiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJNb2R1bGUiLCJpbXBvcnRzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGlwZWxpbmUiLCJtYXAiLCJpIiwidHJhbnNwaWxlIiwiam9pbiIsImUiLCJ2aWV3Iiwib3V0cHV0IiwicmVkdWNlIiwicCIsImMiLCJwdXNoIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBSUE7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRDtBQUFBLFFBQUtDLElBQUwsdUVBQVksRUFBWjtBQUFBLFdBQ1JILE1BQU1JLFNBQU4sQ0FBZ0JGLEVBQWhCLEVBQW9CRyxPQUFPQyxNQUFQLENBQWM7QUFDOUJDLG9CQUFZLElBRGtCO0FBRTlCQyxpQkFBUyx5QkFGcUI7QUFHOUJDLGlCQUFTLGdEQUhxQjtBQUk5QkMsdUJBQWU7QUFKZSxLQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5GO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7SUFPTUMsTTs7O0FBRUYsb0JBQVlDLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCQyxJQUE5QixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBQTs7QUFBQTs7QUFJMUMsY0FBS0MsSUFBTCxHQUFZLFFBQVo7QUFDQSxjQUFLSixPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFSMEM7QUFVN0M7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxnQkFBSUMsV0FBVyxFQUFmO0FBQ0EsZ0JBQUlOLFVBQVUsS0FBS0EsT0FBTCxDQUFhTyxHQUFiLENBQWlCO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsQ0FBWUosQ0FBWixDQUFMO0FBQUEsYUFBakIsRUFBc0NLLElBQXRDLENBQTJDLEVBQTNDLENBQWQ7QUFDQSxnQkFBSVQsVUFBVSxLQUFLQSxPQUFMLENBQWFNLEdBQWIsQ0FBaUI7QUFBQSx1QkFBS0ksRUFBRUYsU0FBRixDQUFZSixDQUFaLENBQUw7QUFBQSxhQUFqQixFQUFzQ0ssSUFBdEMsQ0FBMkMsRUFBM0MsQ0FBZDtBQUNBLGdCQUFJRSxPQUFPLEtBQUtWLElBQUwsR0FBWSxxQkFBTyxNQUFQLEVBQWUsS0FBS0EsSUFBcEIsRUFBMEJHLENBQTFCLENBQVosR0FBMkMsRUFBdEQ7QUFDQSxnQkFBSVEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsdUJBQVFQLFNBQVNRLE1BQVQsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMkJBQVVBLEVBQUVELENBQUYsQ0FBVjtBQUFBLGlCQUFoQixFQUFnQ2xCLElBQWhDLENBQVI7QUFBQSxhQUFiOztBQUVBLGdCQUFJUSxFQUFFbEIsR0FBTixFQUNJbUIsU0FBU1csSUFBVCxDQUFlLFFBQU9aLEVBQUVsQixHQUFULE1BQWlCLFFBQWxCLEdBQThCO0FBQUEsdUJBQUtBLElBQUkrQixDQUFKLEVBQU9iLEVBQUVsQixHQUFULENBQUw7QUFBQSxhQUE5QixHQUFtREEsR0FBakU7O0FBRUosZ0JBQUlrQixFQUFFUCxNQUFOLEVBQ0lRLFNBQVNXLElBQVQsQ0FBY25CLE1BQWQ7O0FBRUosbUJBQU9lLE9BQVViLE9BQVYsWUFBd0IseUJBQVNLLENBQVQsQ0FBeEIsWUFBMENKLE9BQTFDLFNBQXFEVyxJQUFyRCxDQUFQO0FBRUg7Ozs7OztrQkFJVWIsTSIsImZpbGUiOiJNb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IHtcbiAgICBwcmVhbWJsZSxcbiAgICB2aWV3IGFzIHZpZXdGblxufSBmcm9tICcuLi9UZW1wbGF0ZXMnO1xuaW1wb3J0ICogYXMgYmFiZWwgZnJvbSAnYmFiZWwtY29yZSc7XG5pbXBvcnQgZXMyMDE1IGZyb20gJ2JhYmVsLXByZXNldC1lczIwMTUnO1xuaW1wb3J0IGV4cG9ydHMgZnJvbSAnYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1leHBvcnQtZXh0ZW5zaW9ucyc7XG5pbXBvcnQge1xuICAgIGpzX2JlYXV0aWZ5XG59IGZyb20gJ2pzLWJlYXV0aWZ5JztcblxuY29uc3QgZXM1ID0gKGpzLCBvcHRzID0ge30pID0+XG4gICAgYmFiZWwudHJhbnNmb3JtKGpzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgc291cmNlTWFwczogdHJ1ZSxcbiAgICAgICAgcHJlc2V0czogW2VzMjAxNV0sXG4gICAgICAgIHBsdWdpbnM6IFtleHBvcnRzXSxcbiAgICAgICAgaGlnaGxpZ2h0Q29kZTogZmFsc2VcbiAgICB9LCBvcHRzKSkuY29kZTtcblxuY29uc3QgcHJldHR5ID0ganNfYmVhdXRpZnk7XG5cbi8qKlxuICogTW9kdWxlXG4gKiBAcGFyYW0ge2FycmF5PEltcG9ydD59IGltcG9ydHNcbiAqIEBwYXJhbSB7YXJyYXk8c3RyaW5nPn0gdXNlc1xuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIE1vZHVsZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgZXhwb3J0cywgcm9vdCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgICAgICB0aGlzLmV4cG9ydHMgPSBleHBvcnRzO1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBwaXBlbGluZSA9IFtdO1xuICAgICAgICBsZXQgaW1wb3J0cyA9IHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLnRyYW5zcGlsZShvKSkuam9pbignJyk7XG4gICAgICAgIGxldCBleHBvcnRzID0gdGhpcy5leHBvcnRzLm1hcChlID0+IGUudHJhbnNwaWxlKG8pKS5qb2luKCcnKTtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnJvb3QgPyB2aWV3Rm4oJ01haW4nLCB0aGlzLnJvb3QsIG8pIDogJyc7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb2RlID0+IHBpcGVsaW5lLnJlZHVjZSgocCwgYykgPT4gYyhwKSwgY29kZSk7XG5cbiAgICAgICAgaWYgKG8uZXM1KVxuICAgICAgICAgICAgcGlwZWxpbmUucHVzaCgodHlwZW9mIG8uZXM1ID09PSAnb2JqZWN0JykgPyBzID0+IGVzNShzLCBvLmVzNSkgOiBlczUpO1xuXG4gICAgICAgIGlmIChvLnByZXR0eSlcbiAgICAgICAgICAgIHBpcGVsaW5lLnB1c2gocHJldHR5KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0KGAke2ltcG9ydHN9IFxcbiAke3ByZWFtYmxlKG8pfSBcXG4gJHtleHBvcnRzfSAke3ZpZXd9YCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlXG4iXX0=