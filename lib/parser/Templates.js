'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _rootElement = function _rootElement(root, o) {
    return root ? root.transpile(o) : o.typescript ? '<HTMLElement><Node>document.createDocumentFragment()' : 'document.createDocumentFragment()';
};

var runtime = exports.runtime = function runtime(path) {
    return '\nimport {\n    empty as $$empty,\n    box as $$box,\n    resolve as $$resolve,\n    text as $$text,\n    node as $$node,\n    widget as $$widget,\n    ifE as $$if,\n    forE as $$for,\n    switchE as $$switch,\n    domify as $$domify,\n    AppView} from "' + path + '";\n';
};

var _hint = exports._hint = function _hint(name, o) {
    return name.hint ? name.hint.transpile(o) : 'C';
};

var view = exports.view = function view(id, classes, context, tag, o) {
    return '\nexport class ' + id + classes + ' extends AppView<' + context + '> {\n\n    constructor(context: ' + context + ') {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function($$ctx:' + context + ') {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n\n';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbIl9yb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwidHlwZXNjcmlwdCIsInJ1bnRpbWUiLCJwYXRoIiwiX2hpbnQiLCJuYW1lIiwiaGludCIsInZpZXciLCJpZCIsImNsYXNzZXMiLCJjb250ZXh0IiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNqQkQsT0FBT0EsS0FBS0UsU0FBTCxDQUFlRCxDQUFmLENBQVAsR0FBNEJBLEVBQUVFLFVBQUgsR0FDM0Isc0RBRDJCLEdBRTNCLG1DQUhpQjtBQUFBLENBQXJCOztBQUtPLElBQU1DLDRCQUFVLFNBQVZBLE9BQVU7QUFBQSxnUkFZRkMsSUFaRTtBQUFBLENBQWhCOztBQWVBLElBQU1DLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFPTixDQUFQO0FBQUEsV0FDakJNLEtBQUtDLElBQUwsR0FBWUQsS0FBS0MsSUFBTCxDQUFVTixTQUFWLENBQW9CRCxDQUFwQixDQUFaLEdBQXFDLEdBRHBCO0FBQUEsQ0FBZDs7QUFHQSxJQUFNUSxzQkFBTyxTQUFQQSxJQUFPLENBQUNDLEVBQUQsRUFBSUMsT0FBSixFQUFZQyxPQUFaLEVBQW9CQyxHQUFwQixFQUF3QlosQ0FBeEI7QUFBQSwrQkFDTFMsRUFESyxHQUNBQyxPQURBLHlCQUMyQkMsT0FEM0Isd0NBR09BLE9BSFAsNkdBU3FCQSxPQVRyQixnQ0FVQ2IsYUFBYWMsR0FBYixFQUFrQlosQ0FBbEIsQ0FWRDtBQUFBLENBQWIiLCJmaWxlIjoiVGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX3Jvb3RFbGVtZW50ID0gKHJvb3QsIG8pID0+XG4gICAgcm9vdCA/IHJvb3QudHJhbnNwaWxlKG8pIDogKG8udHlwZXNjcmlwdCkgP1xuICAgICc8SFRNTEVsZW1lbnQ+PE5vZGU+ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpJyA6XG4gICAgJ2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSc7XG5cbmV4cG9ydCBjb25zdCBydW50aW1lID0gcGF0aCA9PiBgXG5pbXBvcnQge1xuICAgIGVtcHR5IGFzICQkZW1wdHksXG4gICAgYm94IGFzICQkYm94LFxuICAgIHJlc29sdmUgYXMgJCRyZXNvbHZlLFxuICAgIHRleHQgYXMgJCR0ZXh0LFxuICAgIG5vZGUgYXMgJCRub2RlLFxuICAgIHdpZGdldCBhcyAkJHdpZGdldCxcbiAgICBpZkUgYXMgJCRpZixcbiAgICBmb3JFIGFzICQkZm9yLFxuICAgIHN3aXRjaEUgYXMgJCRzd2l0Y2gsXG4gICAgZG9taWZ5IGFzICQkZG9taWZ5LFxuICAgIEFwcFZpZXd9IGZyb20gXCIke3BhdGh9XCI7XG5gO1xuXG5leHBvcnQgY29uc3QgX2hpbnQgPSAobmFtZSwgbykgPT5cbiAgICBuYW1lLmhpbnQgPyBuYW1lLmhpbnQudHJhbnNwaWxlKG8pIDogJ0MnO1xuXG5leHBvcnQgY29uc3QgdmlldyA9IChpZCxjbGFzc2VzLGNvbnRleHQsdGFnLG8pID0+IGBcbmV4cG9ydCBjbGFzcyAke2lkfSR7Y2xhc3Nlc30gZXh0ZW5kcyBBcHBWaWV3PCR7Y29udGV4dH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6ICR7Y29udGV4dH0pIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCQkY3R4OiR7Y29udGV4dH0pIHtcbiAgICAgICAgICAgIHJldHVybiAke19yb290RWxlbWVudCh0YWcsIG8pfVxuICAgICAgICB9XG5cbiAgICAgICB9XG5cbiAgICAgfVxuXG5gO1xuIl19