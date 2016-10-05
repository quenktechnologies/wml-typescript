'use strict';

var _WMLTree = require('../WMLTree');

var _WMLTree2 = _interopRequireDefault(_WMLTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.autoMockOff();

var view;
var node;

function make() {

    return {
        onDOM: function onDOM(attrs, children) {

            var div = document.createElement('div');

            div.appendChild(document.createTextNode('Header'));
            Object.keys(attrs).forEach(function (k) {
                return div.setAttribute(k, attrs[k]);
            });

            children.forEach(function (c) {
                return div.appendChild(c.toDOMNode());
            });

            return div;
        }
    };
}

make.create = function (attrs) {
    return make(attrs.type);
};

beforeEach(function () {
    view = null;
});

describe('WMLTree', function () {

    describe('render', function () {

        it('should render a pure html view', function () {

            node = document.createElement('div');

            var heading = ['div', {
                class: 'panel-heading'
            }, ['Heading']];

            var body = ['div', {
                class: 'panel-body'
            }, [['span', {}, ['Body']], 'After']];

            view = function view() {
                return ['div', {
                    class: 'panel panel-default'
                }, [heading, body]];
            };

            new _WMLTree2.default(view).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' + '<div class="panel-heading">Heading</div>' + '<div class="panel-body"><span>Body</span>After</div></div>');
        });

        it('should render views from widgets', function () {

            var heading = [make, {
                type: 'div',
                class: 'panel-heading'
            }, ['Heading']];

            var body = [make, {
                type: 'div',
                class: 'panel-body'
            }, ['Body']];

            view = function view() {
                return ['div', {
                    class: 'panel panel-default'
                }, [heading, body]];
            };

            node = document.createElement('div');
            new _WMLTree2.default(view).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' + '<div type="div" class="panel-heading">HeaderHeading</div>' + '<div type="div" class="panel-body">HeaderBody</div></div>');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydW50aW1lL19fdGVzdHNfXy9XTUxUcmVlX3Rlc3QuanMiXSwibmFtZXMiOlsiamVzdCIsImF1dG9Nb2NrT2ZmIiwidmlldyIsIm5vZGUiLCJtYWtlIiwib25ET00iLCJhdHRycyIsImNoaWxkcmVuIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwiayIsImMiLCJ0b0RPTU5vZGUiLCJjcmVhdGUiLCJ0eXBlIiwiYmVmb3JlRWFjaCIsImRlc2NyaWJlIiwiaXQiLCJoZWFkaW5nIiwiY2xhc3MiLCJib2R5IiwicmVuZGVyIiwiZXhwZWN0IiwiaW5uZXJIVE1MIiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7O0FBRkFBLEtBQUtDLFdBQUw7O0FBSUEsSUFBSUMsSUFBSjtBQUNBLElBQUlDLElBQUo7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjs7QUFFWixXQUFPO0FBRUhDLGFBRkcsaUJBRUdDLEtBRkgsRUFFVUMsUUFGVixFQUVvQjs7QUFFbkIsZ0JBQUlDLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjs7QUFFQUYsZ0JBQUlHLFdBQUosQ0FBZ0JGLFNBQVNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQUMsbUJBQU9DLElBQVAsQ0FBWVIsS0FBWixFQUFtQlMsT0FBbkIsQ0FBMkI7QUFBQSx1QkFDdkJQLElBQUlRLFlBQUosQ0FBaUJDLENBQWpCLEVBQW9CWCxNQUFNVyxDQUFOLENBQXBCLENBRHVCO0FBQUEsYUFBM0I7O0FBR0FWLHFCQUFTUSxPQUFULENBQWlCO0FBQUEsdUJBQUtQLElBQUlHLFdBQUosQ0FBZ0JPLEVBQUVDLFNBQUYsRUFBaEIsQ0FBTDtBQUFBLGFBQWpCOztBQUVBLG1CQUFPWCxHQUFQO0FBRUg7QUFkRSxLQUFQO0FBa0JIOztBQUVESixLQUFLZ0IsTUFBTCxHQUFjLFVBQVNkLEtBQVQsRUFBZ0I7QUFDMUIsV0FBT0YsS0FBS0UsTUFBTWUsSUFBWCxDQUFQO0FBQ0gsQ0FGRDs7QUFJQUMsV0FBVyxZQUFXO0FBQ2xCcEIsV0FBTyxJQUFQO0FBQ0gsQ0FGRDs7QUFJQXFCLFNBQVMsU0FBVCxFQUFvQixZQUFXOztBQUUzQkEsYUFBUyxRQUFULEVBQW1CLFlBQVc7O0FBRTFCQyxXQUFHLGdDQUFILEVBQXFDLFlBQVc7O0FBRTVDckIsbUJBQU9NLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUDs7QUFFQSxnQkFBSWUsVUFBVSxDQUFDLEtBQUQsRUFBUTtBQUNkQyx1QkFBTztBQURPLGFBQVIsRUFHVixDQUFDLFNBQUQsQ0FIVSxDQUFkOztBQU1BLGdCQUFJQyxPQUFPLENBQUMsS0FBRCxFQUFRO0FBQ1hELHVCQUFPO0FBREksYUFBUixFQUdQLENBQ0ksQ0FBQyxNQUFELEVBQVMsRUFBVCxFQUNJLENBQUMsTUFBRCxDQURKLENBREosRUFHTyxPQUhQLENBSE8sQ0FBWDs7QUFVQXhCLG1CQUFPO0FBQUEsdUJBQU0sQ0FBQyxLQUFELEVBQVE7QUFDYndCLDJCQUFPO0FBRE0saUJBQVIsRUFHVCxDQUFDRCxPQUFELEVBQVVFLElBQVYsQ0FIUyxDQUFOO0FBQUEsYUFBUDs7QUFNQyxrQ0FBWXpCLElBQVosQ0FBRCxDQUFvQjBCLE1BQXBCLENBQTJCekIsSUFBM0I7O0FBRUEwQixtQkFBTzFCLEtBQUsyQixTQUFaLEVBQXVCQyxJQUF2QixDQUE0QixzQ0FDeEIsMENBRHdCLEdBRXhCLDREQUZKO0FBSUgsU0FoQ0Q7O0FBa0NBUCxXQUFHLGtDQUFILEVBQXVDLFlBQVc7O0FBRTlDLGdCQUFJQyxVQUFVLENBQUNyQixJQUFELEVBQU87QUFDYmlCLHNCQUFNLEtBRE87QUFFYkssdUJBQU87QUFGTSxhQUFQLEVBSVYsQ0FBQyxTQUFELENBSlUsQ0FBZDs7QUFPQSxnQkFBSUMsT0FBTyxDQUFDdkIsSUFBRCxFQUFPO0FBQ1ZpQixzQkFBTSxLQURJO0FBRVZLLHVCQUFPO0FBRkcsYUFBUCxFQUlQLENBQUMsTUFBRCxDQUpPLENBQVg7O0FBT0F4QixtQkFBTztBQUFBLHVCQUFNLENBQUMsS0FBRCxFQUFRO0FBQ2J3QiwyQkFBTztBQURNLGlCQUFSLEVBR1QsQ0FBQ0QsT0FBRCxFQUFVRSxJQUFWLENBSFMsQ0FBTjtBQUFBLGFBQVA7O0FBTUF4QixtQkFBT00sU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFQO0FBQ0Msa0NBQVlSLElBQVosQ0FBRCxDQUFvQjBCLE1BQXBCLENBQTJCekIsSUFBM0I7O0FBRUEwQixtQkFBTzFCLEtBQUsyQixTQUFaLEVBQXVCQyxJQUF2QixDQUE0QixzQ0FDeEIsMkRBRHdCLEdBRXhCLDJEQUZKO0FBSUgsU0E3QkQ7QUErQkgsS0FuRUQ7QUFxRUgsQ0F2RUQiLCJmaWxlIjoiV01MVHJlZV90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiamVzdC5hdXRvTW9ja09mZigpO1xuXG5pbXBvcnQgV01MVHJlZSBmcm9tICcuLi9XTUxUcmVlJztcblxudmFyIHZpZXc7XG52YXIgbm9kZTtcblxuZnVuY3Rpb24gbWFrZSgpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgb25ET00oYXR0cnMsIGNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIZWFkZXInKSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrID0+XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSkpO1xuXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGMgPT4gZGl2LmFwcGVuZENoaWxkKGMudG9ET01Ob2RlKCkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRpdjtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG59XG5cbm1ha2UuY3JlYXRlID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICByZXR1cm4gbWFrZShhdHRycy50eXBlKTtcbn1cblxuYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICB2aWV3ID0gbnVsbDtcbn0pO1xuXG5kZXNjcmliZSgnV01MVHJlZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmVuZGVyIGEgcHVyZSBodG1sIHZpZXcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB2YXIgaGVhZGluZyA9IFsnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BhbmVsLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbJ0hlYWRpbmcnXVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSBbJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbC1ib2R5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbJ3NwYW4nLCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnQm9keSddXG4gICAgICAgICAgICAgICAgICAgIF0sICdBZnRlcidcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2aWV3ID0gKCkgPT4gWydkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncGFuZWwgcGFuZWwtZGVmYXVsdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtoZWFkaW5nLCBib2R5XVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgKG5ldyBXTUxUcmVlKHZpZXcpKS5yZW5kZXIobm9kZSk7XG5cbiAgICAgICAgICAgIGV4cGVjdChub2RlLmlubmVySFRNTCkudG9CZSgnPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5IZWFkaW5nPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+PHNwYW4+Qm9keTwvc3Bhbj5BZnRlcjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmVuZGVyIHZpZXdzIGZyb20gd2lkZ2V0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgaGVhZGluZyA9IFttYWtlLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BhbmVsLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbJ0hlYWRpbmcnXVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSBbbWFrZSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbC1ib2R5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgWydCb2R5J11cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZpZXcgPSAoKSA9PiBbJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbCBwYW5lbC1kZWZhdWx0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW2hlYWRpbmcsIGJvZHldXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAobmV3IFdNTFRyZWUodmlldykpLnJlbmRlcihub2RlKTtcblxuICAgICAgICAgICAgZXhwZWN0KG5vZGUuaW5uZXJIVE1MKS50b0JlKCc8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IHR5cGU9XCJkaXZcIiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5IZWFkZXJIZWFkaW5nPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgdHlwZT1cImRpdlwiIGNsYXNzPVwicGFuZWwtYm9keVwiPkhlYWRlckJvZHk8L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==