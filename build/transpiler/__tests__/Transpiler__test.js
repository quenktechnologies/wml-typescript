'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Transpiler = require('../Transpiler');

var _Transpiler2 = _interopRequireDefault(_Transpiler);

var t;
var input;

beforeEach(function () {

    t = new _Transpiler2['default']();
});

describe('Transpiler', function () {

    describe('transpile()', function () {

        it('should transpile a single tag', function () {

            input = 'import lib from \'path/to/libs\';<tag/>';

            expect(t.transpile(input)).toBe('import lib from \'path/to/libs\';export default function(){return [\'tag\',{},[]];}');
        });

        it('should transpile nested tags', function () {

            input = '<panel type="default" size="40" css:align="left"><a>Click</a>Here<Input/></panel>';
            expect(t.transpile(input)).toBe("export default function(){return ['panel',{'size':'40'," + "'type':'default','css': {'align':'left'}},[['a',{},[`Click`]]," + "`Here`,[Input,{},[]]]];}");
        });

        it('should transpile all together now', function () {

            var text = 'span-text';

            input = '<modal name="mymodal" x="1", y="2">' + '<modal-header>My Modal</modal-header>' + '<modal-body>' + 'Creativity is inhibited by greed and corruption.' + '<vote-button/>' + '<vote-count source="@this"/> Votes' + '<textarea size="32" onchange={this.setText}>' + 'Various text <span>${text}</span>' + '</textarea>' + '</modal-body>' + '</modal>';

            expect(t.transpile(input)).toBe("export default function(){return ['modal',{'y':'2','x':'1','name':'mymodal'}" + ",[['modal-header',{},[`My Modal`]],['modal-body',{}," + "[`Creativity is inhibited by greed and corruption.`," + "['vote-button',{},[]],['vote-count',{'source':'@this'},[]],`Votes`," + "['textarea',{'onchange':this.setText,'size':'32'}," + "[\`Various text\`,['span',{},[\`${text}`]]]]]]]];}");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc3BpbGVyL19fdGVzdHNfXy9UcmFuc3BpbGVyX190ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7MEJBQXVCLGVBQWU7Ozs7QUFFdEMsSUFBSSxDQUFDLENBQUM7QUFDTixJQUFJLEtBQUssQ0FBQzs7QUFFVixVQUFVLENBQUMsWUFBVzs7QUFFbEIsS0FBQyxHQUFHLDZCQUFnQixDQUFDO0NBRXhCLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVc7O0FBRTlCLFlBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBVzs7QUFFL0IsVUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7O0FBRTNDLGlCQUFLLDRDQUEwQyxDQUFDOztBQUVoRCxrQkFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUIsSUFBSSx1RkFDa0YsQ0FBQztTQUUxRixDQUFDLENBQUM7O0FBRUgsVUFBRSxDQUFDLDhCQUE4QixFQUFFLFlBQVc7O0FBRTFDLGlCQUFLLEdBQUcsbUZBQW1GLENBQUM7QUFDNUYsa0JBQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFCLElBQUksQ0FDQSx5REFBeUQsR0FDekQsZ0VBQWdFLEdBQ2hFLDBCQUEwQixDQUM3QixDQUFDO1NBQ0wsQ0FBQyxDQUFDOztBQUVILFVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxZQUFXOztBQUUvQyxnQkFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDOztBQUV2QixpQkFBSyxHQUFHLHFDQUFxQyxHQUN6Qyx1Q0FBdUMsR0FDdkMsY0FBYyxHQUNkLGtEQUFrRCxHQUNsRCxnQkFBZ0IsR0FDaEIsb0NBQW9DLEdBQ3BDLDhDQUE4QyxHQUM5QyxtQ0FBbUMsR0FDbkMsYUFBYSxHQUNiLGVBQWUsR0FDZixVQUFVLENBQUM7O0FBRWYsa0JBQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUUzQiw4RUFBOEUsR0FDOUUsc0RBQXNELEdBQ3RELHNEQUFzRCxHQUN0RCxxRUFBcUUsR0FDckUsb0RBQW9ELEdBQ3BELG9EQUFvRCxDQUFDLENBQUM7U0FDN0QsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6IlRyYW5zcGlsZXJfX3Rlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNwaWxlciBmcm9tICcuLi9UcmFuc3BpbGVyJztcblxudmFyIHQ7XG52YXIgaW5wdXQ7XG5cbmJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICB0ID0gbmV3IFRyYW5zcGlsZXIoKTtcblxufSk7XG5cbmRlc2NyaWJlKCdUcmFuc3BpbGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgndHJhbnNwaWxlKCknLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdCgnc2hvdWxkIHRyYW5zcGlsZSBhIHNpbmdsZSB0YWcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgaW5wdXQgPSBgaW1wb3J0IGxpYiBmcm9tICdwYXRoL3RvL2xpYnMnOzx0YWcvPmA7XG5cbiAgICAgICAgICAgIGV4cGVjdCh0LnRyYW5zcGlsZShpbnB1dCkpLlxuICAgICAgICAgICAgdG9CZShcbiAgICAgICAgICAgICAgICBgaW1wb3J0IGxpYiBmcm9tICdwYXRoL3RvL2xpYnMnO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7cmV0dXJuIFsndGFnJyx7fSxbXV07fWApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzaG91bGQgdHJhbnNwaWxlIG5lc3RlZCB0YWdzJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlucHV0ID0gJzxwYW5lbCB0eXBlPVwiZGVmYXVsdFwiIHNpemU9XCI0MFwiIGNzczphbGlnbj1cImxlZnRcIj48YT5DbGljazwvYT5IZXJlPElucHV0Lz48L3BhbmVsPic7XG4gICAgICAgICAgICBleHBlY3QodC50cmFuc3BpbGUoaW5wdXQpKS5cbiAgICAgICAgICAgIHRvQmUoXG4gICAgICAgICAgICAgICAgXCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe3JldHVybiBbJ3BhbmVsJyx7J3NpemUnOic0MCcsXCIgK1xuICAgICAgICAgICAgICAgIFwiJ3R5cGUnOidkZWZhdWx0JywnY3NzJzogeydhbGlnbic6J2xlZnQnfX0sW1snYScse30sW2BDbGlja2BdXSxcIiArXG4gICAgICAgICAgICAgICAgXCJgSGVyZWAsW0lucHV0LHt9LFtdXV1dO31cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCB0cmFuc3BpbGUgYWxsIHRvZ2V0aGVyIG5vdycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICdzcGFuLXRleHQnO1xuXG4gICAgICAgICAgICBpbnB1dCA9ICc8bW9kYWwgbmFtZT1cIm15bW9kYWxcIiB4PVwiMVwiLCB5PVwiMlwiPicgK1xuICAgICAgICAgICAgICAgICc8bW9kYWwtaGVhZGVyPk15IE1vZGFsPC9tb2RhbC1oZWFkZXI+JyArXG4gICAgICAgICAgICAgICAgJzxtb2RhbC1ib2R5PicgK1xuICAgICAgICAgICAgICAgICdDcmVhdGl2aXR5IGlzIGluaGliaXRlZCBieSBncmVlZCBhbmQgY29ycnVwdGlvbi4nICtcbiAgICAgICAgICAgICAgICAnPHZvdGUtYnV0dG9uLz4nICtcbiAgICAgICAgICAgICAgICAnPHZvdGUtY291bnQgc291cmNlPVwiQHRoaXNcIi8+IFZvdGVzJyArXG4gICAgICAgICAgICAgICAgJzx0ZXh0YXJlYSBzaXplPVwiMzJcIiBvbmNoYW5nZT17dGhpcy5zZXRUZXh0fT4nICtcbiAgICAgICAgICAgICAgICAnVmFyaW91cyB0ZXh0IDxzcGFuPiR7dGV4dH08L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzwvdGV4dGFyZWE+JyArXG4gICAgICAgICAgICAgICAgJzwvbW9kYWwtYm9keT4nICtcbiAgICAgICAgICAgICAgICAnPC9tb2RhbD4nO1xuXG4gICAgICAgICAgICBleHBlY3QodC50cmFuc3BpbGUoaW5wdXQpKS50b0JlKFxuXG4gICAgICAgICAgICAgICAgXCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe3JldHVybiBbJ21vZGFsJyx7J3knOicyJywneCc6JzEnLCduYW1lJzonbXltb2RhbCd9XCIgK1xuICAgICAgICAgICAgICAgIFwiLFtbJ21vZGFsLWhlYWRlcicse30sW2BNeSBNb2RhbGBdXSxbJ21vZGFsLWJvZHknLHt9LFwiICtcbiAgICAgICAgICAgICAgICBcIltgQ3JlYXRpdml0eSBpcyBpbmhpYml0ZWQgYnkgZ3JlZWQgYW5kIGNvcnJ1cHRpb24uYCxcIiArXG4gICAgICAgICAgICAgICAgXCJbJ3ZvdGUtYnV0dG9uJyx7fSxbXV0sWyd2b3RlLWNvdW50Jyx7J3NvdXJjZSc6J0B0aGlzJ30sW11dLGBWb3Rlc2AsXCIgK1xuICAgICAgICAgICAgICAgIFwiWyd0ZXh0YXJlYScseydvbmNoYW5nZSc6dGhpcy5zZXRUZXh0LCdzaXplJzonMzInfSxcIiArXG4gICAgICAgICAgICAgICAgXCJbXFxgVmFyaW91cyB0ZXh0XFxgLFsnc3Bhbicse30sW1xcYCR7dGV4dH1gXV1dXV1dXV07fVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==