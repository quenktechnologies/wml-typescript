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
    return '\nexport class ' + id + _typeClasses(classes, o) + ' extends AppView<' + hint + '> {\n\n    constructor(context: ' + hint + ') {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function($$ctx:' + hint + ') {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n\n';
};

var main = exports.main = function main(tag, o) {
    return '\nexport class Main<C> extends AppView<C> {\n\n    constructor(context:C) {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function($$ctx:C) {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbIl9yb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwidHlwZXNjcmlwdCIsInJ1bnRpbWUiLCJwYXRoIiwiX3R5cGVDbGFzc2VzIiwiY2xhc3NlcyIsIm1hcCIsImMiLCJfaGludCIsIm5hbWUiLCJoaW50IiwidmlldyIsImlkIiwidGFnIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsV0FDakJELE9BQU9BLEtBQUtFLFNBQUwsQ0FBZUQsQ0FBZixDQUFQLEdBQTRCQSxFQUFFRSxVQUFILEdBQzNCLHNEQUQyQixHQUUzQixtQ0FIaUI7QUFBQSxDQUFyQjs7QUFLTyxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVO0FBQUEsZ1JBWUZDLElBWkU7QUFBQSxDQUFoQjs7QUFlQSxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLE9BQUQsRUFBVU4sQ0FBVjtBQUFBLFdBQzVCTSxVQUFVLE1BQU1BLFFBQVFDLEdBQVIsQ0FBWTtBQUFBLGVBQUdDLEVBQUVQLFNBQUYsQ0FBWUQsQ0FBWixDQUFIO0FBQUEsS0FBWixDQUFOLEdBQXVDLEdBQWpELEdBQXVELEtBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTVMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxJQUFELEVBQU9WLENBQVA7QUFBQSxXQUNqQlUsS0FBS0MsSUFBTCxHQUFZRCxLQUFLQyxJQUFMLENBQVVWLFNBQVYsQ0FBb0JELENBQXBCLENBQVosR0FBcUMsR0FEcEI7QUFBQSxDQUFkOztBQUdBLElBQU1ZLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ0MsRUFBRCxFQUFJRixJQUFKLEVBQVNMLE9BQVQsRUFBaUJRLEdBQWpCLEVBQXFCZCxDQUFyQjtBQUFBLCtCQUNMYSxFQURLLEdBQ0FSLGFBQWFDLE9BQWIsRUFBc0JOLENBQXRCLENBREEseUJBQzRDVyxJQUQ1Qyx3Q0FHT0EsSUFIUCw2R0FTcUJBLElBVHJCLGdDQVVDYixhQUFhZ0IsR0FBYixFQUFrQmQsQ0FBbEIsQ0FWRDtBQUFBLENBQWI7O0FBbUJBLElBQU1lLHNCQUFPLFNBQVBBLElBQU8sQ0FBQ0QsR0FBRCxFQUFNZCxDQUFOO0FBQUEsc05BVUNGLGFBQWFnQixHQUFiLEVBQWtCZCxDQUFsQixDQVZEO0FBQUEsQ0FBYiIsImZpbGUiOiJUZW1wbGF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfcm9vdEVsZW1lbnQgPSAocm9vdCwgbykgPT5cbiAgICByb290ID8gcm9vdC50cmFuc3BpbGUobykgOiAoby50eXBlc2NyaXB0KSA/XG4gICAgJzxIVE1MRWxlbWVudD48Tm9kZT5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCknIDpcbiAgICAnZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpJztcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBwYXRoID0+IGBcbmltcG9ydCB7XG4gICAgZW1wdHkgYXMgJCRlbXB0eSxcbiAgICBib3ggYXMgJCRib3gsXG4gICAgcmVzb2x2ZSBhcyAkJHJlc29sdmUsXG4gICAgdGV4dCBhcyAkJHRleHQsXG4gICAgbm9kZSBhcyAkJG5vZGUsXG4gICAgd2lkZ2V0IGFzICQkd2lkZ2V0LFxuICAgIGlmRSBhcyAkJGlmLFxuICAgIGZvckUgYXMgJCRmb3IsXG4gICAgc3dpdGNoRSBhcyAkJHN3aXRjaCxcbiAgICBkb21pZnkgYXMgJCRkb21pZnksXG4gICAgQXBwVmlld30gZnJvbSBcIiR7cGF0aH1cIjtcbmA7XG5cbmV4cG9ydCBjb25zdCBfdHlwZUNsYXNzZXMgPSAoY2xhc3NlcywgbykgPT5cbmNsYXNzZXMgPyAnPCcgKyBjbGFzc2VzLm1hcChjPT5jLnRyYW5zcGlsZShvKSkgKyAnPicgOiAnPEM+JztcblxuZXhwb3J0IGNvbnN0IF9oaW50ID0gKG5hbWUsIG8pID0+XG4gICAgbmFtZS5oaW50ID8gbmFtZS5oaW50LnRyYW5zcGlsZShvKSA6ICdDJztcblxuZXhwb3J0IGNvbnN0IHZpZXcgPSAoaWQsaGludCxjbGFzc2VzLHRhZyxvKSA9PiBgXG5leHBvcnQgY2xhc3MgJHtpZH0ke190eXBlQ2xhc3NlcyhjbGFzc2VzLCBvKX0gZXh0ZW5kcyBBcHBWaWV3PCR7aGludH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6ICR7aGludH0pIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCQkY3R4OiR7aGludH0pIHtcbiAgICAgICAgICAgIHJldHVybiAke19yb290RWxlbWVudCh0YWcsIG8pfVxuICAgICAgICB9XG5cbiAgICAgICB9XG5cbiAgICAgfVxuXG5gO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9ICh0YWcsIG8pID0+IGBcbmV4cG9ydCBjbGFzcyBNYWluPEM+IGV4dGVuZHMgQXBwVmlldzxDPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OkMpIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCQkY3R4OkMpIHtcbiAgICAgICAgICAgIHJldHVybiAke19yb290RWxlbWVudCh0YWcsIG8pfVxuICAgICAgICB9XG5cbiAgICAgICB9XG5cbiAgICAgfVxuYDtcbiJdfQ==