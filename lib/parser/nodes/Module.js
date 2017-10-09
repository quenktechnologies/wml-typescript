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
 * @param {ExportStatement[]} exports
 * @param {TypeClass[]} generics
 * @param {Type} context
 * @param {Tag} root
 * @param {Location} location
 */

var Module = function (_Node) {
    _inherits(Module, _Node);

    function Module(imports, exports, generics, context, root, location) {
        _classCallCheck(this, Module);

        var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this));

        _this.type = 'module';
        _this.imports = imports;
        _this.exports = exports;
        _this.generics = generics;
        _this.context = context;
        _this.root = root;
        _this.location = location;

        return _this;
    }

    _createClass(Module, [{
        key: 'transpile',
        value: function transpile(o) {

            var pipeline = [];
            var runtime = (0, _Templates.runtime)(o.module);
            var imports = this.imports.map(function (i) {
                return i.transpile(o);
            }).join('');
            var exports = this.exports.map(function (e) {
                return e.transpile(o);
            }).join('');

            var classes = this.generics.length.length > 0 ? '<' + this.generics.map(function (g) {
                return g.transpile(o);
            }).join(',') + '>' : '';

            var context = this.context.transpile(o);
            var root = this.root ? this.root.transpile(o) : '';
            var view = root ? (0, _Templates.main)('Main', classes, context, root, o) : root;
            var output = function output(code) {
                return pipeline.reduce(function (p, c) {
                    return c(p);
                }, code);
            };

            if (o.es5) pipeline.push(_typeof(o.es5) === 'object' ? function (s) {
                return es5(s, o.es5);
            } : es5);

            if (o.pretty) pipeline.push(pretty);

            return output(runtime + ' \n ' + imports + ' \n ' + exports + ' ' + view);
        }
    }]);

    return Module;
}(_Node3.default);

exports.default = Module;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTW9kdWxlLmpzIl0sIm5hbWVzIjpbImJhYmVsIiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJNb2R1bGUiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImdlbmVyaWNzIiwiY29udGV4dCIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGlwZWxpbmUiLCJydW50aW1lIiwibW9kdWxlIiwibWFwIiwiaSIsInRyYW5zcGlsZSIsImpvaW4iLCJlIiwiY2xhc3NlcyIsImxlbmd0aCIsImciLCJ2aWV3Iiwib3V0cHV0IiwicmVkdWNlIiwicCIsImMiLCJwdXNoIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBSUE7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRDtBQUFBLFFBQUtDLElBQUwsdUVBQVksRUFBWjtBQUFBLFdBQ1JILE1BQU1JLFNBQU4sQ0FBZ0JGLEVBQWhCLEVBQW9CRyxPQUFPQyxNQUFQLENBQWM7QUFDOUJDLG9CQUFZLElBRGtCO0FBRTlCQyxpQkFBUyx5QkFGcUI7QUFHOUJDLGlCQUFTLGdEQUhxQjtBQUk5QkMsdUJBQWU7QUFKZSxLQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5GO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7OztJQVNNQyxNOzs7QUFFRixvQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDQyxPQUF4QyxFQUFpREMsSUFBakQsRUFBdURDLFFBQXZELEVBQWlFO0FBQUE7O0FBQUE7O0FBSTdELGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS04sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFWNkQ7QUFZaEU7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxnQkFBSUMsV0FBVyxFQUFmO0FBQ0EsZ0JBQUlDLFVBQVUsd0JBQVVGLEVBQUVHLE1BQVosQ0FBZDtBQUNBLGdCQUFJVixVQUFVLEtBQUtBLE9BQUwsQ0FBYVcsR0FBYixDQUFpQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlOLENBQVosQ0FBTDtBQUFBLGFBQWpCLEVBQXNDTyxJQUF0QyxDQUEyQyxFQUEzQyxDQUFkO0FBQ0EsZ0JBQUliLFVBQVUsS0FBS0EsT0FBTCxDQUFhVSxHQUFiLENBQWlCO0FBQUEsdUJBQUtJLEVBQUVGLFNBQUYsQ0FBWU4sQ0FBWixDQUFMO0FBQUEsYUFBakIsRUFBc0NPLElBQXRDLENBQTJDLEVBQTNDLENBQWQ7O0FBRUEsZ0JBQUlFLFVBQVUsS0FBS2QsUUFBTCxDQUFjZSxNQUFkLENBQXFCQSxNQUFyQixHQUE4QixDQUE5QixTQUNOLEtBQUtmLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQjtBQUFBLHVCQUFHTyxFQUFFTCxTQUFGLENBQVlOLENBQVosQ0FBSDtBQUFBLGFBQWxCLEVBQXFDTyxJQUFyQyxDQUEwQyxHQUExQyxDQURNLFNBRVYsRUFGSjs7QUFJQSxnQkFBSVgsVUFBVSxLQUFLQSxPQUFMLENBQWFVLFNBQWIsQ0FBdUJOLENBQXZCLENBQWQ7QUFDQSxnQkFBSUgsT0FBTyxLQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVUyxTQUFWLENBQW9CTixDQUFwQixDQUFaLEdBQXFDLEVBQWhEO0FBQ0EsZ0JBQUlZLE9BQU9mLE9BQU8scUJBQU8sTUFBUCxFQUFlWSxPQUFmLEVBQXdCYixPQUF4QixFQUFrQ0MsSUFBbEMsRUFBd0NHLENBQXhDLENBQVAsR0FBb0RILElBQS9EO0FBQ0EsZ0JBQUlnQixTQUFTLFNBQVRBLE1BQVM7QUFBQSx1QkFBUVosU0FBU2EsTUFBVCxDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwyQkFBVUEsRUFBRUQsQ0FBRixDQUFWO0FBQUEsaUJBQWhCLEVBQWdDekIsSUFBaEMsQ0FBUjtBQUFBLGFBQWI7O0FBRUEsZ0JBQUlVLEVBQUVwQixHQUFOLEVBQ0lxQixTQUFTZ0IsSUFBVCxDQUFlLFFBQU9qQixFQUFFcEIsR0FBVCxNQUFpQixRQUFsQixHQUE4QjtBQUFBLHVCQUFLQSxJQUFJc0MsQ0FBSixFQUFPbEIsRUFBRXBCLEdBQVQsQ0FBTDtBQUFBLGFBQTlCLEdBQW1EQSxHQUFqRTs7QUFFSixnQkFBSW9CLEVBQUVULE1BQU4sRUFDSVUsU0FBU2dCLElBQVQsQ0FBYzFCLE1BQWQ7O0FBRUosbUJBQU9zQixPQUFVWCxPQUFWLFlBQXdCVCxPQUF4QixZQUFzQ0MsT0FBdEMsU0FBaURrQixJQUFqRCxDQUFQO0FBRUg7Ozs7OztrQkFJVXBCLE0iLCJmaWxlIjoiTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7XG4gICAgbWFpbiBhcyB2aWV3Rm4sXG4gICAgcnVudGltZSBhcyBydW50aW1lRm5cbn0gZnJvbSAnLi4vVGVtcGxhdGVzJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtcbiAgICBqc19iZWF1dGlmeVxufSBmcm9tICdqcy1iZWF1dGlmeSc7XG5cbmNvbnN0IGVzNSA9IChqcywgb3B0cyA9IHt9KSA9PlxuICAgIGJhYmVsLnRyYW5zZm9ybShqcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHNvdXJjZU1hcHM6IHRydWUsXG4gICAgICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgICAgICBwbHVnaW5zOiBbZXhwb3J0c10sXG4gICAgICAgIGhpZ2hsaWdodENvZGU6IGZhbHNlXG4gICAgfSwgb3B0cykpLmNvZGU7XG5cbmNvbnN0IHByZXR0eSA9IGpzX2JlYXV0aWZ5O1xuXG4vKipcbiAqIE1vZHVsZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzXG4gKiBAcGFyYW0ge0V4cG9ydFN0YXRlbWVudFtdfSBleHBvcnRzXG4gKiBAcGFyYW0ge1R5cGVDbGFzc1tdfSBnZW5lcmljc1xuICogQHBhcmFtIHtUeXBlfSBjb250ZXh0XG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgTW9kdWxlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCBleHBvcnRzLCBnZW5lcmljcywgY29udGV4dCwgcm9vdCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgICB0aGlzLmltcG9ydHMgPSBpbXBvcnRzO1xuICAgICAgICB0aGlzLmV4cG9ydHMgPSBleHBvcnRzO1xuICAgICAgICB0aGlzLmdlbmVyaWNzID0gZ2VuZXJpY3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgbGV0IHBpcGVsaW5lID0gW107XG4gICAgICAgIGxldCBydW50aW1lID0gcnVudGltZUZuKG8ubW9kdWxlKTtcbiAgICAgICAgbGV0IGltcG9ydHMgPSB0aGlzLmltcG9ydHMubWFwKGkgPT4gaS50cmFuc3BpbGUobykpLmpvaW4oJycpO1xuICAgICAgICBsZXQgZXhwb3J0cyA9IHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLnRyYW5zcGlsZShvKSkuam9pbignJyk7XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmdlbmVyaWNzLmxlbmd0aC5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIGA8JHt0aGlzLmdlbmVyaWNzLm1hcChnPT5nLnRyYW5zcGlsZShvKSkuam9pbignLCcpfT5gIDpcbiAgICAgICAgICAgICcnO1xuXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jb250ZXh0LnRyYW5zcGlsZShvKTtcbiAgICAgICAgbGV0IHJvb3QgPSB0aGlzLnJvb3QgPyB0aGlzLnJvb3QudHJhbnNwaWxlKG8pIDogJyc7XG4gICAgICAgIGxldCB2aWV3ID0gcm9vdCA/IHZpZXdGbignTWFpbicsIGNsYXNzZXMsIGNvbnRleHQsICByb290LCBvKSA6IHJvb3Q7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb2RlID0+IHBpcGVsaW5lLnJlZHVjZSgocCwgYykgPT4gYyhwKSwgY29kZSk7XG5cbiAgICAgICAgaWYgKG8uZXM1KVxuICAgICAgICAgICAgcGlwZWxpbmUucHVzaCgodHlwZW9mIG8uZXM1ID09PSAnb2JqZWN0JykgPyBzID0+IGVzNShzLCBvLmVzNSkgOiBlczUpO1xuXG4gICAgICAgIGlmIChvLnByZXR0eSlcbiAgICAgICAgICAgIHBpcGVsaW5lLnB1c2gocHJldHR5KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0KGAke3J1bnRpbWV9IFxcbiAke2ltcG9ydHN9IFxcbiAke2V4cG9ydHN9ICR7dmlld31gKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVcbiJdfQ==