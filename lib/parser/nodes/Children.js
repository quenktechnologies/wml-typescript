'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Children
 */
var Children = function (_Node) {
    _inherits(Children, _Node);

    function Children(list, location) {
        _classCallCheck(this, Children);

        var _this = _possibleConstructorReturn(this, (Children.__proto__ || Object.getPrototypeOf(Children)).call(this));

        _this.type = 'children';
        _this.list = list;
        _this.location = location;

        return _this;
    }

    _createClass(Children, [{
        key: 'transpile',
        value: function transpile(o) {

            return '{' + this.keys.map(function (k) {
                return k.key + ':' + k.value.transpile(o);
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.file, '{');

            this.keys.forEach(function (p, i, all) {
                node.add(['\'' + p.key + '\':', p.value.compile(o)]);
                if (i < all.length - 1) node.add(',');
            });

            return node.add('}');
        }
    }]);

    return Children;
}(_Node3.default);

exports.default = Children;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZXIvbm9kZXMvQ2hpbGRyZW4uanMiXSwibmFtZXMiOlsiQ2hpbGRyZW4iLCJsaXN0IiwibG9jYXRpb24iLCJ0eXBlIiwibyIsImtleXMiLCJtYXAiLCJrIiwia2V5IiwidmFsdWUiLCJ0cmFuc3BpbGUiLCJqb2luIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlIiwiZm9yRWFjaCIsInAiLCJpIiwiYWxsIiwiYWRkIiwiY29tcGlsZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxROzs7QUFFRixzQkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEI7QUFBQTs7QUFBQTs7QUFHeEIsY0FBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxjQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMd0I7QUFPM0I7Ozs7a0NBRVNFLEMsRUFBRzs7QUFFVCxtQkFBTyxNQUFNLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjO0FBQUEsdUJBQVFDLEVBQUVDLEdBQVYsU0FBaUJELEVBQUVFLEtBQUYsQ0FBUUMsU0FBUixDQUFrQk4sQ0FBbEIsQ0FBakI7QUFBQSxhQUFkLEVBQXVETyxJQUF2RCxDQUE0RCxHQUE1RCxDQUFOLEdBQXlFLEdBQWhGO0FBRUg7OztnQ0FFT1AsQyxFQUFHOztBQUVQLGdCQUFJUSxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0JULEVBQUVVLElBQWxCLEVBQXdCLEdBQXhCLENBQVg7O0FBRUEsaUJBQUtULElBQUwsQ0FBVVUsT0FBVixDQUFrQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsR0FBUCxFQUFlO0FBQzdCTixxQkFBS08sR0FBTCxDQUFTLFFBQUtILEVBQUVSLEdBQVAsVUFBZ0JRLEVBQUVQLEtBQUYsQ0FBUVcsT0FBUixDQUFnQmhCLENBQWhCLENBQWhCLENBQVQ7QUFDQSxvQkFBR2EsSUFBS0MsSUFBSUcsTUFBSixHQUFhLENBQXJCLEVBQ0ZULEtBQUtPLEdBQUwsQ0FBUyxHQUFUO0FBQ0QsYUFKRDs7QUFNQSxtQkFBT1AsS0FBS08sR0FBTCxDQUFTLEdBQVQsQ0FBUDtBQUEwQjs7Ozs7O2tCQUluQm5CLFEiLCJmaWxlIjoiQ2hpbGRyZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENoaWxkcmVuXG4gKi9cbmNsYXNzIENoaWxkcmVuIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXN0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjaGlsZHJlbic7XG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuICd7JyArIHRoaXMua2V5cy5tYXAoayA9PiBgJHtrLmtleX06JHtrLnZhbHVlLnRyYW5zcGlsZShvKX1gKS5qb2luKCcsJykgKyAnfSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGUsICd7Jyk7XG5cbiAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goKHAsIGksIGFsbCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5hZGQoW2AnJHtwLmtleX0nOmAsIHAudmFsdWUuY29tcGlsZShvKV0pO1xuICAgICAgICAgICAgaWYoaSA8IChhbGwubGVuZ3RoIC0gMSkpXG4gICAgICAgICAgbm9kZS5hZGQoJywnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUuYWRkKCd9Jyk7ICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGlsZHJlblxuIl19