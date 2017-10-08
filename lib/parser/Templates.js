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

var _typeClasses = exports._typeClasses = function _typeClasses(classes, o) {
    return classes ? '<' + classes.map(function (c) {
        return c.transpile(o);
    }) + '>' : '<C>';
};

var _hint = exports._hint = function _hint(name, o) {
    return name.hint ? name.hint.transpile(o) : 'C';
};

var view = exports.view = function view(id, hint, classes, tag, o) {
    return '\nexport class ' + id + _typeClasses(classes, o) + ' extends AppView<' + hint + '> {\n\n    constructor(context: ' + hint + ') {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function() {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n\n';
};

var main = exports.main = function main(tag, o) {
    return '\nexport class Main<C> extends AppView<C> {\n\n    constructor(context:C) {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function() {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbIl9yb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwidHlwZXNjcmlwdCIsInJ1bnRpbWUiLCJwYXRoIiwiX3R5cGVDbGFzc2VzIiwiY2xhc3NlcyIsIm1hcCIsImMiLCJfaGludCIsIm5hbWUiLCJoaW50IiwidmlldyIsImlkIiwidGFnIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDakJELE9BQU9BLEtBQUtFLFNBQUwsQ0FBZUQsQ0FBZixDQUFQLEdBQTRCQSxFQUFFRSxVQUFILEdBQzNCLHNEQUQyQixHQUUzQixtQ0FIaUI7QUFBQSxDQUFyQjs7QUFLTyxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVO0FBQUEsZ1JBWUZDLElBWkU7QUFBQSxDQUFoQjs7QUFlQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLE9BQUQsRUFBVU4sQ0FBVjtBQUFBLFdBQzVCTSxVQUFVLE1BQU1BLFFBQVFDLEdBQVIsQ0FBWTtBQUFBLGVBQUdDLEVBQUVQLFNBQUYsQ0FBWUQsQ0FBWixDQUFIO0FBQUEsS0FBWixDQUFOLEdBQXVDLEdBQWpELEdBQXVELEtBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTVMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxJQUFELEVBQU9WLENBQVA7QUFBQSxXQUNqQlUsS0FBS0MsSUFBTCxHQUFZRCxLQUFLQyxJQUFMLENBQVVWLFNBQVYsQ0FBb0JELENBQXBCLENBQVosR0FBcUMsR0FEcEI7QUFBQSxDQUFkOztBQUdBLElBQU1ZLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ0MsRUFBRCxFQUFJRixJQUFKLEVBQVNMLE9BQVQsRUFBaUJRLEdBQWpCLEVBQXFCZCxDQUFyQjtBQUFBLCtCQUNMYSxFQURLLEdBQ0FSLGFBQWFDLE9BQWIsRUFBc0JOLENBQXRCLENBREEseUJBQzRDVyxJQUQ1Qyx3Q0FHT0EsSUFIUCwrSEFVQ2IsYUFBYWdCLEdBQWIsRUFBa0JkLENBQWxCLENBVkQ7QUFBQSxDQUFiOztBQW1CQSxJQUFNZSxzQkFBTyxTQUFQQSxJQUFPLENBQUNELEdBQUQsRUFBTWQsQ0FBTjtBQUFBLCtNQVVDRixhQUFhZ0IsR0FBYixFQUFrQmQsQ0FBbEIsQ0FWRDtBQUFBLENBQWIiLCJmaWxlIjoiVGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX3Jvb3RFbGVtZW50ID0gKHJvb3QsIG8pID0+XG4gICAgcm9vdCA/IHJvb3QudHJhbnNwaWxlKG8pIDogKG8udHlwZXNjcmlwdCkgP1xuICAgICc8SFRNTEVsZW1lbnQ+PE5vZGU+ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpJyA6XG4gICAgJ2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSc7XG5cbmV4cG9ydCBjb25zdCBydW50aW1lID0gcGF0aCA9PiBgXG5pbXBvcnQge1xuICAgIGVtcHR5IGFzICQkZW1wdHksXG4gICAgYm94IGFzICQkYm94LFxuICAgIHJlc29sdmUgYXMgJCRyZXNvbHZlLFxuICAgIHRleHQgYXMgJCR0ZXh0LFxuICAgIG5vZGUgYXMgJCRub2RlLFxuICAgIHdpZGdldCBhcyAkJHdpZGdldCxcbiAgICBpZkUgYXMgJCRpZixcbiAgICBmb3JFIGFzICQkZm9yLFxuICAgIHN3aXRjaEUgYXMgJCRzd2l0Y2gsXG4gICAgZG9taWZ5IGFzICQkZG9taWZ5LFxuICAgIEFwcFZpZXd9IGZyb20gXCIke3BhdGh9XCI7XG5gO1xuXG5leHBvcnQgY29uc3QgX3R5cGVDbGFzc2VzID0gKGNsYXNzZXMsIG8pID0+XG5jbGFzc2VzID8gJzwnICsgY2xhc3Nlcy5tYXAoYz0+Yy50cmFuc3BpbGUobykpICsgJz4nIDogJzxDPic7XG5cbmV4cG9ydCBjb25zdCBfaGludCA9IChuYW1lLCBvKSA9PlxuICAgIG5hbWUuaGludCA/IG5hbWUuaGludC50cmFuc3BpbGUobykgOiAnQyc7XG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKGlkLGhpbnQsY2xhc3Nlcyx0YWcsbykgPT4gYFxuZXhwb3J0IGNsYXNzICR7aWR9JHtfdHlwZUNsYXNzZXMoY2xhc3Nlcywgbyl9IGV4dGVuZHMgQXBwVmlldzwke2hpbnR9PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiAke2hpbnR9KSB7XG5cbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAke19yb290RWxlbWVudCh0YWcsIG8pfVxuICAgICAgICB9XG5cbiAgICAgICB9XG5cbiAgICAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9ICh0YWcsIG8pID0+IGBcbmV4cG9ydCBjbGFzcyBNYWluPEM+IGV4dGVuZHMgQXBwVmlldzxDPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OkMpIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR7X3Jvb3RFbGVtZW50KHRhZywgbyl9XG4gICAgICAgIH1cblxuICAgICAgIH1cblxuICAgICB9XG5gO1xuIl19