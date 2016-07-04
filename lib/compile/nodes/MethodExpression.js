'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * MethodExpression 
 * @param {string} path 
 * @param {array} args 
 */

var MethodExpression = (function (_Node) {
    _inherits(MethodExpression, _Node);

    function MethodExpression(path, args, location) {
        _classCallCheck(this, MethodExpression);

        _get(Object.getPrototypeOf(MethodExpression.prototype), 'constructor', this).call(this, location);
        this.path = path;
        this.arguments = args;
    }

    _createClass(MethodExpression, [{
        key: 'transpile',
        value: function transpile() {

            var args = this.transpileList(this.arguments);
            return this.path + '(' + this.args + ')';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, this.path);

            node.add('(');

            return this.compileList(this.arguments, node, o).add(')');
        }
    }]);

    return MethodExpression;
})(_Node3['default']);

exports['default'] = MethodExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL25vZGVzL01ldGhvZEV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFBaUIsUUFBUTs7Ozs7Ozs7OztJQU9uQixnQkFBZ0I7Y0FBaEIsZ0JBQWdCOztBQUVQLGFBRlQsZ0JBQWdCLENBRU4sSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OEJBRmhDLGdCQUFnQjs7QUFJZCxtQ0FKRixnQkFBZ0IsNkNBSVIsUUFBUSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBRXpCOztpQkFSQyxnQkFBZ0I7O2VBVVQscUJBQUc7O0FBRVIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLG1CQUFVLElBQUksQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQUksT0FBSTtTQUV2Qzs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFZCxtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FHWjs7O1dBM0JDLGdCQUFnQjs7O3FCQThCUCxnQkFBZ0IiLCJmaWxlIjoiTWV0aG9kRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTWV0aG9kRXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHthcnJheX0gYXJncyBcbiAqL1xuY2xhc3MgTWV0aG9kRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgYXJncywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuYXJndW1lbnRzID0gYXJncztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICB2YXIgYXJncyA9IHRoaXMudHJhbnNwaWxlTGlzdCh0aGlzLmFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9KCR7dGhpcy5hcmdzfSlgO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy5wYXRoKTtcblxuICAgICAgICBub2RlLmFkZCgnKCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVMaXN0KHRoaXMuYXJndW1lbnRzLCBub2RlLCBvKS5cbiAgICAgICAgYWRkKCcpJyk7XG5cblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTWV0aG9kRXhwcmVzc2lvblxuIl19