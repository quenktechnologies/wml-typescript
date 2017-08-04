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

var view = exports.view = function view(name, tag, o) {
    return '\n\nexport class ' + name + (o.typescript ? '<C> extends AppView<C>' : 'extends AppView') + '{\n\n    constructor(context' + (o.typescript ? ':C' : '') + ') {\n\n        super(context);\n\n        let view = this;\n\n        this.template = function() {\n            return ' + _rootElement(tag, o) + '\n        }\n\n       }\n\n     }\n\n';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvVGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbIl9yb290RWxlbWVudCIsInJvb3QiLCJvIiwidHJhbnNwaWxlIiwidHlwZXNjcmlwdCIsInJ1bnRpbWUiLCJwYXRoIiwidmlldyIsIm5hbWUiLCJ0YWciXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2pCRCxPQUFPQSxLQUFLRSxTQUFMLENBQWVELENBQWYsQ0FBUCxHQUE0QkEsRUFBRUUsVUFBSCxHQUMzQixzREFEMkIsR0FFM0IsbUNBSGlCO0FBQUEsQ0FBckI7O0FBS08sSUFBTUMsNEJBQVUsU0FBVkEsT0FBVTtBQUFBLGdSQVlGQyxJQVpFO0FBQUEsQ0FBaEI7O0FBZUEsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBWVAsQ0FBWjtBQUFBLGlDQUVMTSxJQUZLLElBRUVOLEVBQUVFLFVBQUYsR0FBYSx3QkFBYixHQUFzQyxpQkFGeEMsc0NBSUtGLEVBQUVFLFVBQUYsR0FBYSxJQUFiLEdBQWtCLEVBSnZCLGdJQVdDSixhQUFhUyxHQUFiLEVBQWtCUCxDQUFsQixDQVhEO0FBQUEsQ0FBYiIsImZpbGUiOiJUZW1wbGF0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfcm9vdEVsZW1lbnQgPSAocm9vdCwgbykgPT5cbiAgICByb290ID8gcm9vdC50cmFuc3BpbGUobykgOiAoby50eXBlc2NyaXB0KSA/XG4gICAgJzxIVE1MRWxlbWVudD48Tm9kZT5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCknIDpcbiAgICAnZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpJztcblxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSBwYXRoID0+IGBcbmltcG9ydCB7XG4gICAgZW1wdHkgYXMgJCRlbXB0eSxcbiAgICBib3ggYXMgJCRib3gsXG4gICAgcmVzb2x2ZSBhcyAkJHJlc29sdmUsXG4gICAgdGV4dCBhcyAkJHRleHQsXG4gICAgbm9kZSBhcyAkJG5vZGUsXG4gICAgd2lkZ2V0IGFzICQkd2lkZ2V0LFxuICAgIGlmRSBhcyAkJGlmLFxuICAgIGZvckUgYXMgJCRmb3IsXG4gICAgc3dpdGNoRSBhcyAkJHN3aXRjaCxcbiAgICBkb21pZnkgYXMgJCRkb21pZnksXG4gICAgQXBwVmlld30gZnJvbSBcIiR7cGF0aH1cIjtcbmA7XG5cbmV4cG9ydCBjb25zdCB2aWV3ID0gKG5hbWUsIHRhZywgbykgPT4gYFxuXG5leHBvcnQgY2xhc3MgJHtuYW1lfSR7by50eXBlc2NyaXB0Pyc8Qz4gZXh0ZW5kcyBBcHBWaWV3PEM+JzonZXh0ZW5kcyBBcHBWaWV3J317XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0JHtvLnR5cGVzY3JpcHQ/JzpDJzonJ30pIHtcblxuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICBsZXQgdmlldyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR7X3Jvb3RFbGVtZW50KHRhZywgbyl9XG4gICAgICAgIH1cblxuICAgICAgIH1cblxuICAgICB9XG5cbmA7XG4iXX0=