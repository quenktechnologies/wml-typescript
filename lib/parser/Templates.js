'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _rootElement = function _rootElement(root, o) {
    return root ? root.transpile(o) : o.typescript ? '<HTMLElement><Node>document.createDocumentFragment()' : 'document.createDocumentFragment()';
};

var runtime = exports.runtime = function runtime(path) {
    return '\nimport {\n    empty as $$empty,\n    box as $$box,\n    resolve as $$resolve,\n    text as $$text,\n    node as $$node,\n    widget as $$widget,\n    ifE as $$if,\n    forE as $$for,\n    switchE as $$switch,\n    AppView} from "' + path + '";\n';
};

var view = exports.view = function view(name, tag, o) {
    return '\n\nexport class ' + name + ' extends AppView {\n\n    constructor(context) {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function() {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n       static render(context) {\n\n         return (new ' + name + '(context)).render();\n\n       }\n\n     }\n\n';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbIl9yb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwidHlwZXNjcmlwdCIsInJ1bnRpbWUiLCJwYXRoIiwidmlldyIsIm5hbWUiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2pCRCxPQUFPQSxLQUFLRSxTQUFMLENBQWVELENBQWYsQ0FBUCxHQUE0QkEsRUFBRUUsVUFBSCxHQUMzQixzREFEMkIsR0FFM0IsbUNBSGlCO0FBQUEsQ0FBckI7O0FBS08sSUFBTUMsNEJBQVUsU0FBVkEsT0FBVTtBQUFBLHVQQVdGQyxJQVhFO0FBQUEsQ0FBaEI7O0FBY0EsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBWVAsQ0FBWjtBQUFBLGlDQUVMTSxJQUZLLDRLQVdDUixhQUFhUyxHQUFiLEVBQWtCUCxDQUFsQixDQVhELDJGQWtCR00sSUFsQkg7QUFBQSxDQUFiIiwiZmlsZSI6IlRlbXBsYXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9yb290RWxlbWVudCA9IChyb290LCBvKSA9PlxuICAgIHJvb3QgPyByb290LnRyYW5zcGlsZShvKSA6IChvLnR5cGVzY3JpcHQpID9cbiAgICAnPEhUTUxFbGVtZW50PjxOb2RlPmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKScgOlxuICAgICdkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCknO1xuXG5leHBvcnQgY29uc3QgcnVudGltZSA9IHBhdGggPT4gYFxuaW1wb3J0IHtcbiAgICBlbXB0eSBhcyAkJGVtcHR5LFxuICAgIGJveCBhcyAkJGJveCxcbiAgICByZXNvbHZlIGFzICQkcmVzb2x2ZSxcbiAgICB0ZXh0IGFzICQkdGV4dCxcbiAgICBub2RlIGFzICQkbm9kZSxcbiAgICB3aWRnZXQgYXMgJCR3aWRnZXQsXG4gICAgaWZFIGFzICQkaWYsXG4gICAgZm9yRSBhcyAkJGZvcixcbiAgICBzd2l0Y2hFIGFzICQkc3dpdGNoLFxuICAgIEFwcFZpZXd9IGZyb20gXCIke3BhdGh9XCI7XG5gO1xuXG5leHBvcnQgY29uc3QgdmlldyA9IChuYW1lLCB0YWcsIG8pID0+IGBcblxuZXhwb3J0IGNsYXNzICR7bmFtZX0gZXh0ZW5kcyBBcHBWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR7X3Jvb3RFbGVtZW50KHRhZywgbyl9XG4gICAgICAgIH1cblxuICAgICAgIH1cblxuICAgICAgIHN0YXRpYyByZW5kZXIoY29udGV4dCkge1xuXG4gICAgICAgICByZXR1cm4gKG5ldyAke25hbWV9KGNvbnRleHQpKS5yZW5kZXIoKTtcblxuICAgICAgIH1cblxuICAgICB9XG5cbmA7XG4iXX0=