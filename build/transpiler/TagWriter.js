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

                if (a.type === 'attribute') {
                    if (a.namespace) {
                        attr.writeSubObject(a.namespace, a.name, '\'' + a.value + '\'');
                    } else {
                        attr.writeValue(a.name, '\'' + a.value + '\'');
                    }
                }

                if (a.type === 'attribute-expression') attr.writeValue(a.name, a.value);
            });

            tag.children.forEach(function (c, k) {

                if (c.type === 'text') childs.write('`' + c.value.trim() + '`');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGVyL1RhZ1dyaXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7MkJBQXdCLGVBQWU7Ozs7NEJBQ2QsZ0JBQWdCOzs7Ozs7Ozs7SUFNbkMsU0FBUztBQUVBLGFBRlQsU0FBUyxDQUVDLEdBQUcsRUFBRTs4QkFGZixTQUFTOztBQUdQLFlBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQ25COzs7Ozs7aUJBSkMsU0FBUzs7ZUFTTixpQkFBRzs7QUFFSixnQkFBSSxJQUFJLEdBQUcsK0JBQWtCLENBQUM7QUFDOUIsZ0JBQUksTUFBTSxHQUFHLDhCQUFpQixDQUFDO0FBQy9CLGdCQUFJLE1BQU0sR0FBRyw4QkFBaUIsQ0FBQztBQUMvQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFcEIsZUFBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLOztBQUU3QixvQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtBQUN4Qix3QkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2IsNEJBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxTQUFNLENBQUMsQ0FBQyxLQUFLLFFBQUksQ0FBQztxQkFDNUQsTUFBTTtBQUNILDRCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQU0sQ0FBQyxDQUFDLEtBQUssUUFBSSxDQUFDO3FCQUMzQztpQkFDSjs7QUFFRCxvQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLHNCQUFzQixFQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRXhDLENBQUMsQ0FBQzs7QUFFSCxlQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7O0FBRTNCLG9CQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUNqQixNQUFNLENBQUMsS0FBSyxPQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQUssQ0FBQzs7QUFFMUMsb0JBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQUFBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztBQUU3QyxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRXpCLENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLEtBQUssQ0FBQyxBQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FDbkQsR0FBRyxDQUFDLElBQUksVUFBTyxHQUFHLENBQUMsSUFBSSxPQUFHLENBQUMsQ0FBQzs7QUFFaEMsa0JBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsa0JBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDNUIsa0JBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEIsa0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O0FBRTlCLG1CQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUUxQjs7O1dBdERDLFNBQVM7OztxQkF5REEsU0FBUyIsImZpbGUiOiJUYWdXcml0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXJyYXlXcml0ZXIgZnJvbSAnLi9BcnJheVdyaXRlcic7XG5pbXBvcnQgT2JqZWN0V3JpdGVyIGZyb20gJy4vT2JqZWN0V3JpdGVyJztcblxuLyoqXG4gKiBUYWdXcml0ZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YWcgXG4gKi9cbmNsYXNzIFRhZ1dyaXRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdyaXRlIFxuICAgICAqL1xuICAgIHdyaXRlKCkge1xuXG4gICAgICAgIHZhciBhdHRyID0gbmV3IE9iamVjdFdyaXRlcigpO1xuICAgICAgICB2YXIgcGFyZW50ID0gbmV3IEFycmF5V3JpdGVyKCk7XG4gICAgICAgIHZhciBjaGlsZHMgPSBuZXcgQXJyYXlXcml0ZXIoKTtcbiAgICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZztcblxuICAgICAgICB0YWcuYXR0cmlidXRlcy5mb3JFYWNoKChhLCBrKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT09ICdhdHRyaWJ1dGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIud3JpdGVTdWJPYmplY3QoYS5uYW1lc3BhY2UsIGEubmFtZSwgYCcke2EudmFsdWV9J2ApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIud3JpdGVWYWx1ZShhLm5hbWUsIGAnJHthLnZhbHVlfSdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT09ICdhdHRyaWJ1dGUtZXhwcmVzc2lvbicpXG4gICAgICAgICAgICAgICAgYXR0ci53cml0ZVZhbHVlKGEubmFtZSwgYS52YWx1ZSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFnLmNoaWxkcmVuLmZvckVhY2goKGMsIGspID0+IHtcblxuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ3RleHQnKVxuICAgICAgICAgICAgICAgIGNoaWxkcy53cml0ZShgXFxgJHtjLnZhbHVlLnRyaW0oKX1cXGBgKTtcblxuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ3RhZycpXG4gICAgICAgICAgICAgICAgY2hpbGRzLndyaXRlKChuZXcgVGFnV3JpdGVyKGMpKS53cml0ZSgpKTtcblxuICAgICAgICAgICAgaWYgKGsgKyAxICE9PSB0YWcuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGNoaWxkcy53cml0ZSgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhcmVudC53cml0ZSgodGFnLm5hbWVbMF0gPT09IHRhZy5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpID9cbiAgICAgICAgICAgIHRhZy5uYW1lIDogYCcke3RhZy5uYW1lfSdgKTtcblxuICAgICAgICBwYXJlbnQud3JpdGUoJywnKTtcbiAgICAgICAgcGFyZW50LndyaXRlKGF0dHIuZmluaXNoKCkpO1xuICAgICAgICBwYXJlbnQud3JpdGUoJywnKTtcbiAgICAgICAgcGFyZW50LndyaXRlKGNoaWxkcy5maW5pc2goKSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudC5maW5pc2goKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVGFnV3JpdGVyXG4iXX0=