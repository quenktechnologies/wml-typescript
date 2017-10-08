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
            var view = this.root ? (0, _Templates.main)(this.root, o) : '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvTW9kdWxlLmpzIl0sIm5hbWVzIjpbImJhYmVsIiwiZXM1IiwianMiLCJvcHRzIiwidHJhbnNmb3JtIiwiT2JqZWN0IiwiYXNzaWduIiwic291cmNlTWFwcyIsInByZXNldHMiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0Q29kZSIsImNvZGUiLCJwcmV0dHkiLCJNb2R1bGUiLCJpbXBvcnRzIiwiZXhwb3J0cyIsInJvb3QiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwicGlwZWxpbmUiLCJydW50aW1lIiwibW9kdWxlIiwibWFwIiwiaSIsInRyYW5zcGlsZSIsImpvaW4iLCJlIiwidmlldyIsIm91dHB1dCIsInJlZHVjZSIsInAiLCJjIiwicHVzaCIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUlBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNLENBQUNDLEVBQUQ7QUFBQSxRQUFLQyxJQUFMLHVFQUFZLEVBQVo7QUFBQSxXQUNSSCxNQUFNSSxTQUFOLENBQWdCRixFQUFoQixFQUFvQkcsT0FBT0MsTUFBUCxDQUFjO0FBQzlCQyxvQkFBWSxJQURrQjtBQUU5QkMsaUJBQVMseUJBRnFCO0FBRzlCQyxpQkFBUyxnREFIcUI7QUFJOUJDLHVCQUFlO0FBSmUsS0FBZCxFQUtqQlAsSUFMaUIsQ0FBcEIsRUFLVVEsSUFORjtBQUFBLENBQVo7O0FBUUEsSUFBTUMsZ0NBQU47O0FBRUE7Ozs7Ozs7O0lBT01DLE07OztBQUVGLG9CQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QkMsSUFBOUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBSTFDLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS0osT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUjBDO0FBVTdDOzs7O2tDQUVTRSxDLEVBQUc7O0FBRVQsZ0JBQUlDLFdBQVcsRUFBZjtBQUNBLGdCQUFJQyxVQUFVLHdCQUFVRixFQUFFRyxNQUFaLENBQWQ7QUFDQSxnQkFBSVIsVUFBVSxLQUFLQSxPQUFMLENBQWFTLEdBQWIsQ0FBaUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixDQUFZTixDQUFaLENBQUw7QUFBQSxhQUFqQixFQUFzQ08sSUFBdEMsQ0FBMkMsRUFBM0MsQ0FBZDtBQUNBLGdCQUFJWCxVQUFVLEtBQUtBLE9BQUwsQ0FBYVEsR0FBYixDQUFpQjtBQUFBLHVCQUFLSSxFQUFFRixTQUFGLENBQVlOLENBQVosQ0FBTDtBQUFBLGFBQWpCLEVBQXNDTyxJQUF0QyxDQUEyQyxFQUEzQyxDQUFkO0FBQ0EsZ0JBQUlFLE9BQU8sS0FBS1osSUFBTCxHQUFZLHFCQUFPLEtBQUtBLElBQVosRUFBaUJHLENBQWpCLENBQVosR0FBa0MsRUFBN0M7QUFDQSxnQkFBSVUsU0FBUyxTQUFUQSxNQUFTO0FBQUEsdUJBQVFULFNBQVNVLE1BQVQsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsMkJBQVVBLEVBQUVELENBQUYsQ0FBVjtBQUFBLGlCQUFoQixFQUFnQ3BCLElBQWhDLENBQVI7QUFBQSxhQUFiOztBQUVBLGdCQUFJUSxFQUFFbEIsR0FBTixFQUNJbUIsU0FBU2EsSUFBVCxDQUFlLFFBQU9kLEVBQUVsQixHQUFULE1BQWlCLFFBQWxCLEdBQThCO0FBQUEsdUJBQUtBLElBQUlpQyxDQUFKLEVBQU9mLEVBQUVsQixHQUFULENBQUw7QUFBQSxhQUE5QixHQUFtREEsR0FBakU7O0FBRUosZ0JBQUlrQixFQUFFUCxNQUFOLEVBQ0lRLFNBQVNhLElBQVQsQ0FBY3JCLE1BQWQ7O0FBRUosbUJBQU9pQixPQUFVUixPQUFWLFlBQXdCUCxPQUF4QixZQUFzQ0MsT0FBdEMsU0FBaURhLElBQWpELENBQVA7QUFFSDs7Ozs7O2tCQUlVZixNIiwiZmlsZSI6Ik1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQge1xuICAgIG1haW4gYXMgdmlld0ZuLFxuICAgIHJ1bnRpbWUgYXMgcnVudGltZUZuXG59IGZyb20gJy4uL1RlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBiYWJlbCBmcm9tICdiYWJlbC1jb3JlJztcbmltcG9ydCBlczIwMTUgZnJvbSAnYmFiZWwtcHJlc2V0LWVzMjAxNSc7XG5pbXBvcnQgZXhwb3J0cyBmcm9tICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLWV4cG9ydC1leHRlbnNpb25zJztcbmltcG9ydCB7XG4gICAganNfYmVhdXRpZnlcbn0gZnJvbSAnanMtYmVhdXRpZnknO1xuXG5jb25zdCBlczUgPSAoanMsIG9wdHMgPSB7fSkgPT5cbiAgICBiYWJlbC50cmFuc2Zvcm0oanMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBzb3VyY2VNYXBzOiB0cnVlLFxuICAgICAgICBwcmVzZXRzOiBbZXMyMDE1XSxcbiAgICAgICAgcGx1Z2luczogW2V4cG9ydHNdLFxuICAgICAgICBoaWdobGlnaHRDb2RlOiBmYWxzZVxuICAgIH0sIG9wdHMpKS5jb2RlO1xuXG5jb25zdCBwcmV0dHkgPSBqc19iZWF1dGlmeTtcblxuLyoqXG4gKiBNb2R1bGVcbiAqIEBwYXJhbSB7YXJyYXk8SW1wb3J0Pn0gaW1wb3J0c1xuICogQHBhcmFtIHthcnJheTxzdHJpbmc+fSB1c2VzXG4gKiBAcGFyYW0ge1RhZ30gcm9vdFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgTW9kdWxlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbXBvcnRzLCBleHBvcnRzLCByb290LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gJ21vZHVsZSc7XG4gICAgICAgIHRoaXMuaW1wb3J0cyA9IGltcG9ydHM7XG4gICAgICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgbGV0IHBpcGVsaW5lID0gW107XG4gICAgICAgIGxldCBydW50aW1lID0gcnVudGltZUZuKG8ubW9kdWxlKTtcbiAgICAgICAgbGV0IGltcG9ydHMgPSB0aGlzLmltcG9ydHMubWFwKGkgPT4gaS50cmFuc3BpbGUobykpLmpvaW4oJycpO1xuICAgICAgICBsZXQgZXhwb3J0cyA9IHRoaXMuZXhwb3J0cy5tYXAoZSA9PiBlLnRyYW5zcGlsZShvKSkuam9pbignJyk7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5yb290ID8gdmlld0ZuKHRoaXMucm9vdCxvKSA6ICcnO1xuICAgICAgICBsZXQgb3V0cHV0ID0gY29kZSA9PiBwaXBlbGluZS5yZWR1Y2UoKHAsIGMpID0+IGMocCksIGNvZGUpO1xuXG4gICAgICAgIGlmIChvLmVzNSlcbiAgICAgICAgICAgIHBpcGVsaW5lLnB1c2goKHR5cGVvZiBvLmVzNSA9PT0gJ29iamVjdCcpID8gcyA9PiBlczUocywgby5lczUpIDogZXM1KTtcblxuICAgICAgICBpZiAoby5wcmV0dHkpXG4gICAgICAgICAgICBwaXBlbGluZS5wdXNoKHByZXR0eSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dChgJHtydW50aW1lfSBcXG4gJHtpbXBvcnRzfSBcXG4gJHtleHBvcnRzfSAke3ZpZXd9YCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kdWxlXG4iXX0=