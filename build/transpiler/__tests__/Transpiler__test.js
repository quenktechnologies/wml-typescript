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

            input = '<panel type="default" size="40" align="left"><a>Click</a>Here<Input/></panel>';
            expect(t.transpile(input)).toBe('export default function(){return [\'panel\',{\'align\':\'left\',\'size\':\'40\',\'type\':\'default\'},[[\'a\',{},[\'Click\']],\'Here\',[Input,{},[]]]];}');
        });

        it('should transpile all together now', function () {

            input = '<modal name="mymodal" x="1", y="2">\n                        <modal-header>My Modal</modal-header>\n                        <modal-body>\n                         Creativity is inhibited by greed and corruption.\n                         <vote-button/>\n                         <vote-count source="@this"/> Votes\n                         <textarea size="32" onchange={this.setText}>\n                           Various text <span>{this.text}</span>\n                         </textarea>\n                        </modal-body>\n                    </modal>';

            expect(t.transpile(input)).toBe('export default function(){return [\'modal\',{\'y\':\'2\',\'x\':\'1\',\'name\':\'mymodal\'},[\'\n                        \',[\'modal-header\',{},[\'My Modal\']],\'\n                        \',[\'modal-body\',{},[\'\n                         Creativity is inhibited by greed and corruption.\n                         \',[\'vote-button\',{},[]],\'\n                         \',[\'vote-count\',{\'source\':\'@this\'},[]],\' Votes\n                         \',[\'textarea\',{\'onchange\':this.setText,\'size\':\'32\'},[\'\n                           Various text \',[\'span\',{},[\'{this.text}\']],\'\n                         \']],\'\n                        \']],\'\n                    \']];}');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc3BpbGVyL19fdGVzdHNfXy9UcmFuc3BpbGVyX190ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7MEJBQXVCLGVBQWU7Ozs7QUFFdEMsSUFBSSxDQUFDLENBQUM7QUFDTixJQUFJLEtBQUssQ0FBQzs7QUFFVixVQUFVLENBQUMsWUFBVzs7QUFFbEIsS0FBQyxHQUFHLDZCQUFnQixDQUFDO0NBRXhCLENBQUMsQ0FBQzs7QUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVc7O0FBRTlCLFlBQVEsQ0FBQyxhQUFhLEVBQUUsWUFBVzs7QUFFL0IsVUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7O0FBRTNDLGlCQUFLLDRDQUEwQyxDQUFDOztBQUVoRCxrQkFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDMUIsSUFBSSx1RkFDa0YsQ0FBQztTQUUxRixDQUFDLENBQUM7O0FBRUgsVUFBRSxDQUFDLDhCQUE4QixFQUFFLFlBQVc7O0FBRTFDLGlCQUFLLEdBQUcsK0VBQStFLENBQUM7QUFDeEYsa0JBQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzFCLElBQUksNEpBQ3VJLENBQUM7U0FFL0ksQ0FBQyxDQUFDOztBQUVILFVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxZQUFXOztBQUUvQyxpQkFBSyxrakJBVVksQ0FBQzs7QUFFdEIsa0JBQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxzckJBWVosQ0FBQztTQUNuQixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7Q0FDTixDQUFDLENBQUMiLCJmaWxlIjoiVHJhbnNwaWxlcl9fdGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc3BpbGVyIGZyb20gJy4uL1RyYW5zcGlsZXInO1xuXG52YXIgdDtcbnZhciBpbnB1dDtcblxuYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcblxuICAgIHQgPSBuZXcgVHJhbnNwaWxlcigpO1xuXG59KTtcblxuZGVzY3JpYmUoJ1RyYW5zcGlsZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCd0cmFuc3BpbGUoKScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KCdzaG91bGQgdHJhbnNwaWxlIGEgc2luZ2xlIHRhZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBpbnB1dCA9IGBpbXBvcnQgbGliIGZyb20gJ3BhdGgvdG8vbGlicyc7PHRhZy8+YDtcblxuICAgICAgICAgICAgZXhwZWN0KHQudHJhbnNwaWxlKGlucHV0KSkuXG4gICAgICAgICAgICB0b0JlKFxuICAgICAgICAgICAgICAgIGBpbXBvcnQgbGliIGZyb20gJ3BhdGgvdG8vbGlicyc7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtyZXR1cm4gWyd0YWcnLHt9LFtdXTt9YCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ3Nob3VsZCB0cmFuc3BpbGUgbmVzdGVkIHRhZ3MnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgaW5wdXQgPSAnPHBhbmVsIHR5cGU9XCJkZWZhdWx0XCIgc2l6ZT1cIjQwXCIgYWxpZ249XCJsZWZ0XCI+PGE+Q2xpY2s8L2E+SGVyZTxJbnB1dC8+PC9wYW5lbD4nO1xuICAgICAgICAgICAgZXhwZWN0KHQudHJhbnNwaWxlKGlucHV0KSkuXG4gICAgICAgICAgICB0b0JlKFxuICAgICAgICAgICAgICAgIGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe3JldHVybiBbJ3BhbmVsJyx7J2FsaWduJzonbGVmdCcsJ3NpemUnOic0MCcsJ3R5cGUnOidkZWZhdWx0J30sW1snYScse30sWydDbGljayddXSwnSGVyZScsW0lucHV0LHt9LFtdXV1dO31gKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIHRyYW5zcGlsZSBhbGwgdG9nZXRoZXIgbm93JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlucHV0ID0gYDxtb2RhbCBuYW1lPVwibXltb2RhbFwiIHg9XCIxXCIsIHk9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW9kYWwtaGVhZGVyPk15IE1vZGFsPC9tb2RhbC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW9kYWwtYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGl2aXR5IGlzIGluaGliaXRlZCBieSBncmVlZCBhbmQgY29ycnVwdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8dm90ZS1idXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDx2b3RlLWNvdW50IHNvdXJjZT1cIkB0aGlzXCIvPiBWb3Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzaXplPVwiMzJcIiBvbmNoYW5nZT17dGhpcy5zZXRUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlvdXMgdGV4dCA8c3Bhbj57dGhpcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb2RhbC1ib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L21vZGFsPmA7XG5cbiAgICAgICAgZXhwZWN0KHQudHJhbnNwaWxlKGlucHV0KSkudG9CZShcblxuICAgICAgICAgIGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe3JldHVybiBbJ21vZGFsJyx7J3knOicyJywneCc6JzEnLCduYW1lJzonbXltb2RhbCd9LFsnXG4gICAgICAgICAgICAgICAgICAgICAgICAnLFsnbW9kYWwtaGVhZGVyJyx7fSxbJ015IE1vZGFsJ11dLCdcbiAgICAgICAgICAgICAgICAgICAgICAgICcsWydtb2RhbC1ib2R5Jyx7fSxbJ1xuICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aXZpdHkgaXMgaW5oaWJpdGVkIGJ5IGdyZWVkIGFuZCBjb3JydXB0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICcsWyd2b3RlLWJ1dHRvbicse30sW11dLCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAnLFsndm90ZS1jb3VudCcseydzb3VyY2UnOidAdGhpcyd9LFtdXSwnIFZvdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgJyxbJ3RleHRhcmVhJyx7J29uY2hhbmdlJzp0aGlzLnNldFRleHQsJ3NpemUnOiczMid9LFsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBWYXJpb3VzIHRleHQgJyxbJ3NwYW4nLHt9LFsne3RoaXMudGV4dH0nXV0sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICddXSwnXG4gICAgICAgICAgICAgICAgICAgICAgICAnXV0sJ1xuICAgICAgICAgICAgICAgICAgICAnXV07fWApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19