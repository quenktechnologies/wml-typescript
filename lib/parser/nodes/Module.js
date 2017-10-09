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

            var context = this.context ? this.context.transpile(o) : 'void';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTW9kdWxlLmpzIl0sIm5hbWVzIjpbImJhYmVsIiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJNb2R1bGUiLCJpbXBvcnRzIiwiZXhwb3J0cyIsImdlbmVyaWNzIiwiY29udGV4dCIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGlwZWxpbmUiLCJydW50aW1lIiwibW9kdWxlIiwibWFwIiwiaSIsInRyYW5zcGlsZSIsImpvaW4iLCJlIiwiY2xhc3NlcyIsImxlbmd0aCIsImciLCJ2aWV3Iiwib3V0cHV0IiwicmVkdWNlIiwicCIsImMiLCJwdXNoIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBSUE7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRDtBQUFBLFFBQUtDLElBQUwsdUVBQVksRUFBWjtBQUFBLFdBQ1JILE1BQU1JLFNBQU4sQ0FBZ0JGLEVBQWhCLEVBQW9CRyxPQUFPQyxNQUFQLENBQWM7QUFDOUJDLG9CQUFZLElBRGtCO0FBRTlCQyxpQkFBUyx5QkFGcUI7QUFHOUJDLGlCQUFTLGdEQUhxQjtBQUk5QkMsdUJBQWU7QUFKZSxLQUFkLEVBS2pCUCxJQUxpQixDQUFwQixFQUtVUSxJQU5GO0FBQUEsQ0FBWjs7QUFRQSxJQUFNQyxnQ0FBTjs7QUFFQTs7Ozs7Ozs7OztJQVNNQyxNOzs7QUFFRixvQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDQyxPQUF4QyxFQUFpREMsSUFBakQsRUFBdURDLFFBQXZELEVBQWlFO0FBQUE7O0FBQUE7O0FBSTdELGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS04sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFWNkQ7QUFZaEU7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxnQkFBSUMsV0FBVyxFQUFmO0FBQ0EsZ0JBQUlDLFVBQVUsd0JBQVVGLEVBQUVHLE1BQVosQ0FBZDtBQUNBLGdCQUFJVixVQUFVLEtBQUtBLE9BQUwsQ0FBYVcsR0FBYixDQUFpQjtBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLENBQVlOLENBQVosQ0FBTDtBQUFBLGFBQWpCLEVBQXNDTyxJQUF0QyxDQUEyQyxFQUEzQyxDQUFkO0FBQ0EsZ0JBQUliLFVBQVUsS0FBS0EsT0FBTCxDQUFhVSxHQUFiLENBQWlCO0FBQUEsdUJBQUtJLEVBQUVGLFNBQUYsQ0FBWU4sQ0FBWixDQUFMO0FBQUEsYUFBakIsRUFBc0NPLElBQXRDLENBQTJDLEVBQTNDLENBQWQ7O0FBRUEsZ0JBQUlFLFVBQVUsS0FBS2QsUUFBTCxDQUFjZSxNQUFkLENBQXFCQSxNQUFyQixHQUE4QixDQUE5QixTQUNOLEtBQUtmLFFBQUwsQ0FBY1MsR0FBZCxDQUFrQjtBQUFBLHVCQUFHTyxFQUFFTCxTQUFGLENBQVlOLENBQVosQ0FBSDtBQUFBLGFBQWxCLEVBQXFDTyxJQUFyQyxDQUEwQyxHQUExQyxDQURNLFNBRVYsRUFGSjs7QUFJQSxnQkFBSVgsVUFBVSxLQUFLQSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhVSxTQUFiLENBQXVCTixDQUF2QixDQUFmLEdBQTJDLE1BQXpEO0FBQ0EsZ0JBQUlILE9BQU8sS0FBS0EsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVVMsU0FBVixDQUFvQk4sQ0FBcEIsQ0FBWixHQUFxQyxFQUFoRDtBQUNBLGdCQUFJWSxPQUFPZixPQUFPLHFCQUFPLE1BQVAsRUFBZVksT0FBZixFQUF3QmIsT0FBeEIsRUFBa0NDLElBQWxDLEVBQXdDRyxDQUF4QyxDQUFQLEdBQW9ESCxJQUEvRDtBQUNBLGdCQUFJZ0IsU0FBUyxTQUFUQSxNQUFTO0FBQUEsdUJBQVFaLFNBQVNhLE1BQVQsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMkJBQVVBLEVBQUVELENBQUYsQ0FBVjtBQUFBLGlCQUFoQixFQUFnQ3pCLElBQWhDLENBQVI7QUFBQSxhQUFiOztBQUVBLGdCQUFJVSxFQUFFcEIsR0FBTixFQUNJcUIsU0FBU2dCLElBQVQsQ0FBZSxRQUFPakIsRUFBRXBCLEdBQVQsTUFBaUIsUUFBbEIsR0FBOEI7QUFBQSx1QkFBS0EsSUFBSXNDLENBQUosRUFBT2xCLEVBQUVwQixHQUFULENBQUw7QUFBQSxhQUE5QixHQUFtREEsR0FBakU7O0FBRUosZ0JBQUlvQixFQUFFVCxNQUFOLEVBQ0lVLFNBQVNnQixJQUFULENBQWMxQixNQUFkOztBQUVKLG1CQUFPc0IsT0FBVVgsT0FBVixZQUF3QlQsT0FBeEIsWUFBc0NDLE9BQXRDLFNBQWlEa0IsSUFBakQsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVwQixNIiwiZmlsZSI6Ik1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQge1xuICAgIG1haW4gYXMgdmlld0ZuLFxuICAgIHJ1bnRpbWUgYXMgcnVudGltZUZuXG59IGZyb20gJy4uL1RlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcbmltcG9ydCBlczIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSc7XG5pbXBvcnQgZXhwb3J0cyBmcm9tICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWV4cG9ydC1leHRlbnNpb25zJztcbmltcG9ydCB7XG4gICAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCBlczUgPSAoanMsIG9wdHMgPSB7fSkgPT5cbiAgICBiYWJlbC50cmFuc2Zvcm0oanMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgICAgICBwcmVzZXRzOiBbZXMyMDE1XSxcbiAgICAgICAgcGx1Z2luczogW2V4cG9ydHNdLFxuICAgICAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICAgIH0sIG9wdHMpKS5jb2RlO1xuXG5jb25zdCBwcmV0dHkgPSBqc19iZWF1dGlmeTtcblxuLyoqXG4gKiBNb2R1bGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHtFeHBvcnRTdGF0ZW1lbnRbXX0gZXhwb3J0c1xuICogQHBhcmFtIHtUeXBlQ2xhc3NbXX0gZ2VuZXJpY3NcbiAqIEBwYXJhbSB7VHlwZX0gY29udGV4dFxuICogQHBhcmFtIHtUYWd9IHJvb3RcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIE1vZHVsZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoaW1wb3J0cywgZXhwb3J0cywgZ2VuZXJpY3MsIGNvbnRleHQsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnbW9kdWxlJztcbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy5leHBvcnRzID0gZXhwb3J0cztcbiAgICAgICAgdGhpcy5nZW5lcmljcyA9IGdlbmVyaWNzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUobykge1xuXG4gICAgICAgIGxldCBwaXBlbGluZSA9IFtdO1xuICAgICAgICBsZXQgcnVudGltZSA9IHJ1bnRpbWVGbihvLm1vZHVsZSk7XG4gICAgICAgIGxldCBpbXBvcnRzID0gdGhpcy5pbXBvcnRzLm1hcChpID0+IGkudHJhbnNwaWxlKG8pKS5qb2luKCcnKTtcbiAgICAgICAgbGV0IGV4cG9ydHMgPSB0aGlzLmV4cG9ydHMubWFwKGUgPT4gZS50cmFuc3BpbGUobykpLmpvaW4oJycpO1xuXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5nZW5lcmljcy5sZW5ndGgubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBgPCR7dGhpcy5nZW5lcmljcy5tYXAoZz0+Zy50cmFuc3BpbGUobykpLmpvaW4oJywnKX0+YCA6XG4gICAgICAgICAgICAnJztcblxuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC50cmFuc3BpbGUobykgOiAndm9pZCc7XG4gICAgICAgIGxldCByb290ID0gdGhpcy5yb290ID8gdGhpcy5yb290LnRyYW5zcGlsZShvKSA6ICcnO1xuICAgICAgICBsZXQgdmlldyA9IHJvb3QgPyB2aWV3Rm4oJ01haW4nLCBjbGFzc2VzLCBjb250ZXh0LCAgcm9vdCwgbykgOiByb290O1xuICAgICAgICBsZXQgb3V0cHV0ID0gY29kZSA9PiBwaXBlbGluZS5yZWR1Y2UoKHAsIGMpID0+IGMocCksIGNvZGUpO1xuXG4gICAgICAgIGlmIChvLmVzNSlcbiAgICAgICAgICAgIHBpcGVsaW5lLnB1c2goKHR5cGVvZiBvLmVzNSA9PT0gJ29iamVjdCcpID8gcyA9PiBlczUocywgby5lczUpIDogZXM1KTtcblxuICAgICAgICBpZiAoby5wcmV0dHkpXG4gICAgICAgICAgICBwaXBlbGluZS5wdXNoKHByZXR0eSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dChgJHtydW50aW1lfSBcXG4gJHtpbXBvcnRzfSBcXG4gJHtleHBvcnRzfSAke3ZpZXd9YCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlXG4iXX0=