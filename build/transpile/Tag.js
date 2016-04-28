/**
 * Tag 
 * @param {string} name 
 * @param {array<Attribute>} attributes 
 * @param {array<Tag|Text|ForLoop|IfCondition>} children 
 * @param {Location} location 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tag = (function () {
    function Tag(name, attributes, children, location) {
        _classCallCheck(this, Tag);

        this.name = name;
        this.attributes = attributes;
        this.children = children;
        this.location = location;
    }

    _createClass(Tag, [{
        key: 'toString',
        value: function toString() {

            var tag = this.name[0] === this.name[0].toUpperCase() ? 'make.element(' + this.name : 'make.node(\'' + this.name + '\'';

            var ns = {};
            var html = [];
            var children;

            this.attributes.forEach(function (a) {

                var val = '\'' + a.name + '\':' + a.toString();

                if (a.namespace) {

                    ns[a.namespace] = ns[a.namespace] || [];
                    ns[a.namespace].push(val);
                } else {

                    html.push(val);
                }
            });

            children = '[' + this.children.map(function (c) {
                return c.toString();
            }).join(',') + ']';
            ns = '{' + Object.keys(ns).map(function (key) {
                return key + ':{' + ns[key].join(',') + '}';
            }).join(',') + '}';
            html = '{' + html.join(',') + '}';

            ns = ns ? ns : '{}';
            html = html ? html : '{}';

            return tag + ',' + ('{ns:' + ns + ', html:' + html + '}, ' + children + ')');
        }
    }]);

    return Tag;
})();

exports['default'] = Tag;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvVGFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT00sR0FBRztBQUVNLGFBRlQsR0FBRyxDQUVPLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs4QkFGaEQsR0FBRzs7QUFJRCxZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUU1Qjs7aUJBVEMsR0FBRzs7ZUFXRyxvQkFBRzs7QUFFUCxnQkFBSSxHQUFHLEdBQUcsQUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLHFCQUNsQyxJQUFJLENBQUMsSUFBSSxvQkFBbUIsSUFBSSxDQUFDLElBQUksT0FBRyxDQUFDOztBQUU3RCxnQkFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1osZ0JBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdCQUFJLFFBQVEsQ0FBQzs7QUFFYixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUk7O0FBRXpCLG9CQUFJLEdBQUcsVUFBTyxDQUFDLENBQUMsSUFBSSxXQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQUFBRSxDQUFDOztBQUV4QyxvQkFBSSxDQUFDLENBQUMsU0FBUyxFQUFFOztBQUViLHNCQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hDLHNCQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFN0IsTUFBTTs7QUFFSCx3QkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFFbEI7YUFFSixDQUFDLENBQUM7O0FBRUgsb0JBQVEsU0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTthQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsQ0FBQztBQUNqRSxjQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRzt1QkFBTyxHQUFHLFVBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN2RixnQkFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7QUFFbEMsY0FBRSxHQUFHLEFBQUMsRUFBRSxHQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDdEIsZ0JBQUksR0FBRyxBQUFDLElBQUksR0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUU1QixtQkFBTyxBQUFHLEdBQUcsbUJBQ0YsRUFBRSxlQUFVLElBQUksV0FBTSxRQUFRLE9BQUcsQ0FBQztTQUVoRDs7O1dBL0NDLEdBQUc7OztxQkFtRE0sR0FBRyIsImZpbGUiOiJUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRhZyBcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICogQHBhcmFtIHthcnJheTxBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzIFxuICogQHBhcmFtIHthcnJheTxUYWd8VGV4dHxGb3JMb29wfElmQ29uZGl0aW9uPn0gY2hpbGRyZW4gXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVGFnIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkcmVuLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgdmFyIHRhZyA9ICh0aGlzLm5hbWVbMF0gPT09IHRoaXMubmFtZVswXS50b1VwcGVyQ2FzZSgpKSA/XG4gICAgICAgICAgICBgbWFrZS5lbGVtZW50KCR7dGhpcy5uYW1lfWAgOiBgbWFrZS5ub2RlKCcke3RoaXMubmFtZX0nYDtcblxuICAgICAgICB2YXIgbnMgPSB7fTtcbiAgICAgICAgdmFyIGh0bWwgPSBbXTtcbiAgICAgICAgdmFyIGNoaWxkcmVuO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGEgPT4ge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gYCcke2EubmFtZX0nOiR7YS50b1N0cmluZygpfWA7XG5cbiAgICAgICAgICAgIGlmIChhLm5hbWVzcGFjZSkge1xuXG4gICAgICAgICAgICAgICAgbnNbYS5uYW1lc3BhY2VdID0gbnNbYS5uYW1lc3BhY2VdIHx8IFtdO1xuICAgICAgICAgICAgICAgIG5zW2EubmFtZXNwYWNlXS5wdXNoKHZhbCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBodG1sLnB1c2godmFsKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoaWxkcmVuID0gYFske3RoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy50b1N0cmluZygpKS5qb2luKCcsJyl9XWA7XG4gICAgICAgIG5zID0gJ3snICsgT2JqZWN0LmtleXMobnMpLm1hcChrZXkgPT4gYCR7a2V5fTp7JHtuc1trZXldLmpvaW4oJywnKX19YCkuam9pbignLCcpICsgJ30nO1xuICAgICAgICBodG1sID0gJ3snICsgaHRtbC5qb2luKCcsJykgKyAnfSc7XG5cbiAgICAgICAgbnMgPSAobnMpID8gbnMgOiAne30nO1xuICAgICAgICBodG1sID0gKGh0bWwpID8gaHRtbCA6ICd7fSc7XG5cbiAgICAgICAgcmV0dXJuIGAke3RhZ30sYCArXG4gICAgICAgICAgICBge25zOiR7bnN9LCBodG1sOiR7aHRtbH19LCAke2NoaWxkcmVufSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIl19