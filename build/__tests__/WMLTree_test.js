'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _WMLTree = require('../WMLTree');

var _WMLTree2 = _interopRequireDefault(_WMLTree);

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
                'class': 'panel-heading'
            }, ['Heading']];

            var body = ['div', {
                'class': 'panel-body'
            }, [['span', {}, ['Body']], 'After']];

            view = ['div', {
                'class': 'panel panel-default'
            }, [heading, body]];

            new _WMLTree2['default'](view).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' + '<div class="panel-heading">Heading</div>' + '<div class="panel-body"><span>Body</span>After</div></div>');
        });

        it('should render views from widgets', function () {

            var heading = [make, {
                type: 'div',
                'class': 'panel-heading'
            }, ['Heading']];

            var body = [make, {
                type: 'div',
                'class': 'panel-body'
            }, ['Body']];

            view = ['div', {
                'class': 'panel panel-default'
            }, [heading, body]];

            node = document.createElement('div');
            new _WMLTree2['default'](view).render(node);

            expect(node.innerHTML).toBe('<div class="panel panel-default">' + '<div type="div" class="panel-heading">HeaderHeading</div>' + '<div type="div" class="panel-body">HeaderBody</div></div>');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RzX18vV01MVHJlZV90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7dUJBRW9CLFlBQVk7Ozs7QUFGaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztBQUluQixJQUFJLElBQUksQ0FBQztBQUNULElBQUksSUFBSSxDQUFDOztBQUVULFNBQVMsSUFBSSxHQUFHOztBQUVaLFdBQU87O0FBRUgsYUFBSyxFQUFBLGVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTs7QUFFbkIsZ0JBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXhDLGVBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGtCQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7dUJBQ3hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQzs7QUFFbkMsb0JBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3VCQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQUEsQ0FBQyxDQUFDOztBQUV0RCxtQkFBTyxHQUFHLENBQUM7U0FFZDs7S0FFSixDQUFDO0NBRUw7O0FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFTLEtBQUssRUFBRTtBQUMxQixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDM0IsQ0FBQTs7QUFFRCxVQUFVLENBQUMsWUFBVztBQUNsQixRQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2YsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBVzs7QUFFM0IsWUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFXOztBQUUxQixVQUFFLENBQUMsZ0NBQWdDLEVBQUUsWUFBVzs7QUFFNUMsZ0JBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVyQyxnQkFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDZCx5QkFBTyxlQUFlO2FBQ3pCLEVBQ0QsQ0FBQyxTQUFTLENBQUMsQ0FDZCxDQUFDOztBQUVGLGdCQUFJLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNYLHlCQUFPLFlBQVk7YUFDdEIsRUFDRCxDQUNJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFDUCxDQUFDLE1BQU0sQ0FBQyxDQUNYLEVBQUUsT0FBTyxDQUNiLENBQ0osQ0FBQzs7QUFFRixnQkFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ1AseUJBQU8scUJBQXFCO2FBQy9CLEVBQ0QsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQ2xCLENBQUM7O0FBRUYsQUFBQyxxQ0FBWSxJQUFJLENBQUMsQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWpDLGtCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsR0FDM0QsMENBQTBDLEdBQzFDLDREQUE0RCxDQUFDLENBQUM7U0FFckUsQ0FBQyxDQUFDOztBQUVILFVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxZQUFXOztBQUU5QyxnQkFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDYixvQkFBSSxFQUFFLEtBQUs7QUFDWCx5QkFBTyxlQUFlO2FBQ3pCLEVBQ0QsQ0FBQyxTQUFTLENBQUMsQ0FDZCxDQUFDOztBQUVGLGdCQUFJLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtBQUNWLG9CQUFJLEVBQUUsS0FBSztBQUNYLHlCQUFPLFlBQVk7YUFDdEIsRUFDRCxDQUFDLE1BQU0sQ0FBQyxDQUNYLENBQUM7O0FBRUYsZ0JBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtBQUNQLHlCQUFPLHFCQUFxQjthQUMvQixFQUNELENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUNsQixDQUFDOztBQUVGLGdCQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxBQUFDLHFDQUFZLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsa0JBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxHQUMzRCwyREFBMkQsR0FDM0QsMkRBQTJELENBQUMsQ0FBQztTQUdyRSxDQUFDLENBQUM7S0FHTixDQUFDLENBQUM7Q0FFTixDQUFDLENBQUMiLCJmaWxlIjoiV01MVHJlZV90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiamVzdC5hdXRvTW9ja09mZigpO1xuXG5pbXBvcnQgV01MVHJlZSBmcm9tICcuLi9XTUxUcmVlJztcblxudmFyIHZpZXc7XG52YXIgbm9kZTtcblxuZnVuY3Rpb24gbWFrZSgpIHtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgb25ET00oYXR0cnMsIGNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIZWFkZXInKSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrID0+XG4gICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSkpO1xuXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGMgPT4gZGl2LmFwcGVuZENoaWxkKGMudG9ET01Ob2RlKCkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRpdjtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG59XG5cbm1ha2UuY3JlYXRlID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICByZXR1cm4gbWFrZShhdHRycy50eXBlKTtcbn1cblxuYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICB2aWV3ID0gbnVsbDtcbn0pO1xuXG5kZXNjcmliZSgnV01MVHJlZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3JlbmRlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmVuZGVyIGEgcHVyZSBodG1sIHZpZXcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICB2YXIgaGVhZGluZyA9IFsnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BhbmVsLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbJ0hlYWRpbmcnXVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSBbJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbC1ib2R5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBbJ3NwYW4nLCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnQm9keSddXG4gICAgICAgICAgICAgICAgICAgIF0sICdBZnRlcidcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2aWV3ID0gWydkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncGFuZWwgcGFuZWwtZGVmYXVsdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtoZWFkaW5nLCBib2R5XVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgKG5ldyBXTUxUcmVlKHZpZXcpKS5yZW5kZXIobm9kZSk7XG5cbiAgICAgICAgICAgIGV4cGVjdChub2RlLmlubmVySFRNTCkudG9CZSgnPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5IZWFkaW5nPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+PHNwYW4+Qm9keTwvc3Bhbj5BZnRlcjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgcmVuZGVyIHZpZXdzIGZyb20gd2lkZ2V0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgaGVhZGluZyA9IFttYWtlLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3BhbmVsLWhlYWRpbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbJ0hlYWRpbmcnXVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIGJvZHkgPSBbbWFrZSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbC1ib2R5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgWydCb2R5J11cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZpZXcgPSBbJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwYW5lbCBwYW5lbC1kZWZhdWx0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW2hlYWRpbmcsIGJvZHldXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAobmV3IFdNTFRyZWUodmlldykpLnJlbmRlcihub2RlKTtcblxuICAgICAgICAgICAgIGV4cGVjdChub2RlLmlubmVySFRNTCkudG9CZSgnPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj4nK1xuICAgICAgICAgICAgICAgICAnPGRpdiB0eXBlPVwiZGl2XCIgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+SGVhZGVySGVhZGluZzwvZGl2PicrXG4gICAgICAgICAgICAgICAgICc8ZGl2IHR5cGU9XCJkaXZcIiBjbGFzcz1cInBhbmVsLWJvZHlcIj5IZWFkZXJCb2R5PC9kaXY+PC9kaXY+Jyk7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgfSk7XG5cbn0pO1xuIl19