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
 * ArgumentList 
 * @param {array} members 
 * @param {Location} location 
 */

var ArgumentList = (function (_Node) {
    _inherits(ArgumentList, _Node);

    function ArgumentList(members, location) {
        _classCallCheck(this, ArgumentList);

        _get(Object.getPrototypeOf(ArgumentList.prototype), 'constructor', this).call(this, location);
        this.members = members;
    }

    _createClass(ArgumentList, [{
        key: 'transpile',
        value: function transpile() {

            return this.members.map(function (m) {
                return m.transpile();
            }).join(',');
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '');

            this.members.forEach(function (m, i, all) {

                node.add(k.value.compile(o));

                if (i < all.length - 1) node.add(',');
            });

            return node;
        }
    }]);

    return ArgumentList;
})(_Node3['default']);

exports['default'] = ArgumentList;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvQXJndW1lbnRMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWlCLFFBQVE7Ozs7Ozs7Ozs7SUFPbkIsWUFBWTtjQUFaLFlBQVk7O0FBRUgsYUFGVCxZQUFZLENBRUYsT0FBTyxFQUFFLFFBQVEsRUFBRTs4QkFGN0IsWUFBWTs7QUFHWixtQ0FIQSxZQUFZLDZDQUdOLFFBQVEsRUFBRTtBQUNkLFlBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQzFCOztpQkFMQyxZQUFZOztlQU9MLHFCQUFHOztBQUVSLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO2FBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUV6RDs7O2VBRU0saUJBQUMsQ0FBQyxFQUFFOztBQUVQLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTNDLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFLOztBQUVoQyxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUU3QixvQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFckIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLElBQUksQ0FBQztTQUVmOzs7V0E1QkMsWUFBWTs7O3FCQStCSCxZQUFZIiwiZmlsZSI6IkFyZ3VtZW50TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQXJndW1lbnRMaXN0IFxuICogQHBhcmFtIHthcnJheX0gbWVtYmVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBBcmd1bWVudExpc3QgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICBzdXBlcihsb2NhdGlvbik7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpO1xuXG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKChtLCBpLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoay52YWx1ZS5jb21waWxlKG8pKTtcblxuICAgICAgICAgICAgaWYgKGkgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcmd1bWVudExpc3RcbiJdfQ==