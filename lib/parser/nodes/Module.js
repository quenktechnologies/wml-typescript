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
            var runtime = (0, _Templates.runtime)(o.module);
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

            return output(runtime + ' \n ' + imports + ' \n ' + exports + ' ' + view);
        }
    }]);

    return Module;
}(_Node3.default);

exports.default = Module;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTW9kdWxlLmpzIl0sIm5hbWVzIjpbImJhYmVsIiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJNb2R1bGUiLCJpbXBvcnRzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGlwZWxpbmUiLCJydW50aW1lIiwibW9kdWxlIiwibWFwIiwiaSIsInRyYW5zcGlsZSIsImpvaW4iLCJlIiwidmlldyIsIm91dHB1dCIsInJlZHVjZSIsInAiLCJjIiwicHVzaCIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUlBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQ7QUFBQSxRQUFLQyxJQUFMLHVFQUFZLEVBQVo7QUFBQSxXQUNSSCxNQUFNSSxTQUFOLENBQWdCRixFQUFoQixFQUFvQkcsT0FBT0MsTUFBUCxDQUFjO0FBQzlCQyxvQkFBWSxJQURrQjtBQUU5QkMsaUJBQVMseUJBRnFCO0FBRzlCQyxpQkFBUyxnREFIcUI7QUFJOUJDLHVCQUFlO0FBSmUsS0FBZCxFQUtqQlAsSUFMaUIsQ0FBcEIsRUFLVVEsSUFORjtBQUFBLENBQVo7O0FBUUEsSUFBTUMsZ0NBQU47O0FBRUE7Ozs7Ozs7O0lBT01DLE07OztBQUVGLG9CQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QkMsSUFBOUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBSTFDLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUjBDO0FBVTdDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsZ0JBQUlDLFdBQVcsRUFBZjtBQUNBLGdCQUFJQyxVQUFVLHdCQUFVRixFQUFFRyxNQUFaLENBQWQ7QUFDQSxnQkFBSVIsVUFBVSxLQUFLQSxPQUFMLENBQWFTLEdBQWIsQ0FBaUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZTixDQUFaLENBQUw7QUFBQSxhQUFqQixFQUFzQ08sSUFBdEMsQ0FBMkMsRUFBM0MsQ0FBZDtBQUNBLGdCQUFJWCxVQUFVLEtBQUtBLE9BQUwsQ0FBYVEsR0FBYixDQUFpQjtBQUFBLHVCQUFLSSxFQUFFRixTQUFGLENBQVlOLENBQVosQ0FBTDtBQUFBLGFBQWpCLEVBQXNDTyxJQUF0QyxDQUEyQyxFQUEzQyxDQUFkO0FBQ0EsZ0JBQUlFLE9BQU8sS0FBS1osSUFBTCxHQUFZLHFCQUFPLE1BQVAsRUFBZSxLQUFLQSxJQUFwQixFQUEwQkcsQ0FBMUIsQ0FBWixHQUEyQyxFQUF0RDtBQUNBLGdCQUFJVSxTQUFTLFNBQVRBLE1BQVM7QUFBQSx1QkFBUVQsU0FBU1UsTUFBVCxDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSwyQkFBVUEsRUFBRUQsQ0FBRixDQUFWO0FBQUEsaUJBQWhCLEVBQWdDcEIsSUFBaEMsQ0FBUjtBQUFBLGFBQWI7O0FBRUEsZ0JBQUlRLEVBQUVsQixHQUFOLEVBQ0ltQixTQUFTYSxJQUFULENBQWUsUUFBT2QsRUFBRWxCLEdBQVQsTUFBaUIsUUFBbEIsR0FBOEI7QUFBQSx1QkFBS0EsSUFBSWlDLENBQUosRUFBT2YsRUFBRWxCLEdBQVQsQ0FBTDtBQUFBLGFBQTlCLEdBQW1EQSxHQUFqRTs7QUFFSixnQkFBSWtCLEVBQUVQLE1BQU4sRUFDSVEsU0FBU2EsSUFBVCxDQUFjckIsTUFBZDs7QUFFSixtQkFBT2lCLE9BQVVSLE9BQVYsWUFBd0JQLE9BQXhCLFlBQXNDQyxPQUF0QyxTQUFpRGEsSUFBakQsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVmLE0iLCJmaWxlIjoiTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCB7XG4gICAgdmlldyBhcyB2aWV3Rm4sXG4gICAgcnVudGltZSBhcyBydW50aW1lRm5cbn0gZnJvbSAnLi4vVGVtcGxhdGVzJztcbmltcG9ydCAqIGFzIGJhYmVsIGZyb20gJ2JhYmVsLWNvcmUnO1xuaW1wb3J0IGVzMjAxNSBmcm9tICdiYWJlbC1wcmVzZXQtZXMyMDE1JztcbmltcG9ydCBleHBvcnRzIGZyb20gJ2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tZXhwb3J0LWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtcbiAgICBqc19iZWF1dGlmeVxufSBmcm9tICdqcy1iZWF1dGlmeSc7XG5cbmNvbnN0IGVzNSA9IChqcywgb3B0cyA9IHt9KSA9PlxuICAgIGJhYmVsLnRyYW5zZm9ybShqcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHNvdXJjZU1hcHM6IHRydWUsXG4gICAgICAgIHByZXNldHM6IFtlczIwMTVdLFxuICAgICAgICBwbHVnaW5zOiBbZXhwb3J0c10sXG4gICAgICAgIGhpZ2hsaWdodENvZGU6IGZhbHNlXG4gICAgfSwgb3B0cykpLmNvZGU7XG5cbmNvbnN0IHByZXR0eSA9IGpzX2JlYXV0aWZ5O1xuXG4vKipcbiAqIE1vZHVsZVxuICogQHBhcmFtIHthcnJheTxJbXBvcnQ+fSBpbXBvcnRzXG4gKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IHVzZXNcbiAqIEBwYXJhbSB7VGFnfSByb290XG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBNb2R1bGUgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGltcG9ydHMsIGV4cG9ydHMsIHJvb3QsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnR5cGUgPSAnbW9kdWxlJztcbiAgICAgICAgdGhpcy5pbXBvcnRzID0gaW1wb3J0cztcbiAgICAgICAgdGhpcy5leHBvcnRzID0gZXhwb3J0cztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKG8pIHtcblxuICAgICAgICBsZXQgcGlwZWxpbmUgPSBbXTtcbiAgICAgICAgbGV0IHJ1bnRpbWUgPSBydW50aW1lRm4oby5tb2R1bGUpO1xuICAgICAgICBsZXQgaW1wb3J0cyA9IHRoaXMuaW1wb3J0cy5tYXAoaSA9PiBpLnRyYW5zcGlsZShvKSkuam9pbignJyk7XG4gICAgICAgIGxldCBleHBvcnRzID0gdGhpcy5leHBvcnRzLm1hcChlID0+IGUudHJhbnNwaWxlKG8pKS5qb2luKCcnKTtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnJvb3QgPyB2aWV3Rm4oJ01haW4nLCB0aGlzLnJvb3QsIG8pIDogJyc7XG4gICAgICAgIGxldCBvdXRwdXQgPSBjb2RlID0+IHBpcGVsaW5lLnJlZHVjZSgocCwgYykgPT4gYyhwKSwgY29kZSk7XG5cbiAgICAgICAgaWYgKG8uZXM1KVxuICAgICAgICAgICAgcGlwZWxpbmUucHVzaCgodHlwZW9mIG8uZXM1ID09PSAnb2JqZWN0JykgPyBzID0+IGVzNShzLCBvLmVzNSkgOiBlczUpO1xuXG4gICAgICAgIGlmIChvLnByZXR0eSlcbiAgICAgICAgICAgIHBpcGVsaW5lLnB1c2gocHJldHR5KTtcblxuICAgICAgICByZXR1cm4gb3V0cHV0KGAke3J1bnRpbWV9IFxcbiAke2ltcG9ydHN9IFxcbiAke2V4cG9ydHN9ICR7dmlld31gKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2R1bGVcbiJdfQ==