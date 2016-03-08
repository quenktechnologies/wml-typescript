'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ArrayWriter = require('./ArrayWriter');

var _ArrayWriter2 = _interopRequireDefault(_ArrayWriter);

var _ObjectWriter = require('./ObjectWriter');

var _ObjectWriter2 = _interopRequireDefault(_ObjectWriter);

/**
 * TagWriter
 * @param {object} tag 
 */

var TagWriter = (function () {
    function TagWriter(tag) {
        _classCallCheck(this, TagWriter);

        this._tag = tag;
    }

    /**
     * write 
     */

    _createClass(TagWriter, [{
        key: 'write',
        value: function write() {

            var attr = new _ObjectWriter2['default']();
            var parent = new _ArrayWriter2['default']();
            var childs = new _ArrayWriter2['default']();
            var tag = this._tag;

            tag.attributes.forEach(function (a, k) {

                if (a.type === 'attribute') attr.writeValue(a.name, '\'' + a.value + '\'');

                if (a.type === 'attribute-expression') attr.writeValue(a.name, a.value);

                if (k + 1 !== tag.attributes.length) attr.write(',');
            });

            tag.children.forEach(function (c, k) {

                if (c.type === 'text') childs.write('\'' + c.value.trim() + '\'');

                if (c.type === 'tag') childs.write(new TagWriter(c).write());

                if (k + 1 !== tag.children.length) childs.write(',');
            });

            parent.write(tag.name[0] === tag.name[0].toUpperCase() ? tag.name : '\'' + tag.name + '\'');

            parent.write(',');
            parent.write(attr.finish());
            parent.write(',');
            parent.write(childs.finish());

            return parent.finish();
        }
    }]);

    return TagWriter;
})();

exports['default'] = TagWriter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL1RhZ1dyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MkJBQXdCLGVBQWU7Ozs7NEJBQ2QsZ0JBQWdCOzs7Ozs7Ozs7SUFNbkMsU0FBUztBQUVBLGFBRlQsU0FBUyxDQUVDLEdBQUcsRUFBRTs4QkFGZixTQUFTOztBQUdQLFlBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQ25COzs7Ozs7aUJBSkMsU0FBUzs7ZUFTTixpQkFBRzs7QUFFSixnQkFBSSxJQUFJLEdBQUcsK0JBQWtCLENBQUM7QUFDOUIsZ0JBQUksTUFBTSxHQUFHLDhCQUFpQixDQUFDO0FBQy9CLGdCQUFJLE1BQU0sR0FBRyw4QkFBaUIsQ0FBQztBQUMvQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFcEIsZUFBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLOztBQUU3QixvQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFNLENBQUMsQ0FBQyxLQUFLLFFBQUksQ0FBQzs7QUFFNUMsb0JBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxzQkFBc0IsRUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFckMsb0JBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUV2QixDQUFDLENBQUM7O0FBRUgsZUFBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLOztBQUUzQixvQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDakIsTUFBTSxDQUFDLEtBQUssUUFBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFJLENBQUM7O0FBRXhDLG9CQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDLEFBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs7QUFFN0Msb0JBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUV6QixDQUFDLENBQUM7O0FBRUgsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQ25ELEdBQUcsQ0FBQyxJQUFJLFVBQU8sR0FBRyxDQUFDLElBQUksT0FBRyxDQUFDLENBQUM7O0FBRWhDLGtCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGtCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLGtCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGtCQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztBQUU5QixtQkFBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FFMUI7OztXQXBEQyxTQUFTOzs7cUJBdURBLFNBQVMiLCJmaWxlIjoiVGFnV3JpdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFycmF5V3JpdGVyIGZyb20gJy4vQXJyYXlXcml0ZXInO1xuaW1wb3J0IE9iamVjdFdyaXRlciBmcm9tICcuL09iamVjdFdyaXRlcic7XG5cbi8qKlxuICogVGFnV3JpdGVyXG4gKiBAcGFyYW0ge29iamVjdH0gdGFnIFxuICovXG5jbGFzcyBUYWdXcml0ZXIge1xuXG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICAgIHRoaXMuX3RhZyA9IHRhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3cml0ZSBcbiAgICAgKi9cbiAgICB3cml0ZSgpIHtcblxuICAgICAgICB2YXIgYXR0ciA9IG5ldyBPYmplY3RXcml0ZXIoKTtcbiAgICAgICAgdmFyIHBhcmVudCA9IG5ldyBBcnJheVdyaXRlcigpO1xuICAgICAgICB2YXIgY2hpbGRzID0gbmV3IEFycmF5V3JpdGVyKCk7XG4gICAgICAgIHZhciB0YWcgPSB0aGlzLl90YWc7XG5cbiAgICAgICAgdGFnLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYSwgaykgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYS50eXBlID09PSAnYXR0cmlidXRlJylcbiAgICAgICAgICAgICAgICBhdHRyLndyaXRlVmFsdWUoYS5uYW1lLCBgJyR7YS52YWx1ZX0nYCk7XG5cbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT09ICdhdHRyaWJ1dGUtZXhwcmVzc2lvbicpXG4gICAgICAgICAgICAgICAgYXR0ci53cml0ZVZhbHVlKGEubmFtZSwgYS52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChrICsgMSAhPT0gdGFnLmF0dHJpYnV0ZXMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGF0dHIud3JpdGUoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0YWcuY2hpbGRyZW4uZm9yRWFjaCgoYywgaykgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSAndGV4dCcpXG4gICAgICAgICAgICAgICAgY2hpbGRzLndyaXRlKGAnJHtjLnZhbHVlLnRyaW0oKX0nYCk7XG5cbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICd0YWcnKVxuICAgICAgICAgICAgICAgIGNoaWxkcy53cml0ZSgobmV3IFRhZ1dyaXRlcihjKSkud3JpdGUoKSk7XG5cbiAgICAgICAgICAgIGlmIChrICsgMSAhPT0gdGFnLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgICAgICAgICAgICBjaGlsZHMud3JpdGUoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBwYXJlbnQud3JpdGUoKHRhZy5uYW1lWzBdID09PSB0YWcubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICB0YWcubmFtZSA6IGAnJHt0YWcubmFtZX0nYCk7XG5cbiAgICAgICAgcGFyZW50LndyaXRlKCcsJyk7XG4gICAgICAgIHBhcmVudC53cml0ZShhdHRyLmZpbmlzaCgpKTtcbiAgICAgICAgcGFyZW50LndyaXRlKCcsJyk7XG4gICAgICAgIHBhcmVudC53cml0ZShjaGlsZHMuZmluaXNoKCkpO1xuXG4gICAgICAgIHJldHVybiBwYXJlbnQuZmluaXNoKCk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRhZ1dyaXRlclxuIl19