'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var flatten = exports.flatten = function flatten(list, o) {
    return list.length === 0 ? '$$empty()' : list.length === 1 ? list[0].transpile(o) : '$$box(' + list.map(function (l) {
        return l.transpile(o);
    }).join(',') + ')';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvdXRpbC5qcyJdLCJuYW1lcyI6WyJmbGF0dGVuIiwibGlzdCIsIm8iLCJsZW5ndGgiLCJ0cmFuc3BpbGUiLCJtYXAiLCJsIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSw0QkFBVSxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQWNELEtBQUtFLE1BQUwsS0FBZ0IsQ0FBakIsR0FDaEMsV0FEZ0MsR0FFL0JGLEtBQUtFLE1BQUwsS0FBZ0IsQ0FBakIsR0FDQUYsS0FBSyxDQUFMLEVBQVFHLFNBQVIsQ0FBa0JGLENBQWxCLENBREEsY0FFU0QsS0FBS0ksR0FBTCxDQUFTO0FBQUEsZUFBR0MsRUFBRUYsU0FBRixDQUFZRixDQUFaLENBQUg7QUFBQSxLQUFULEVBQTRCSyxJQUE1QixDQUFpQyxHQUFqQyxDQUZULE1BRm1CO0FBQUEsQ0FBaEIiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmbGF0dGVuID0gKGxpc3QsIG8pID0+IChsaXN0Lmxlbmd0aCA9PT0gMCkgP1xuICAgICckJGVtcHR5KCknIDpcbiAgICAobGlzdC5sZW5ndGggPT09IDEpID9cbiAgICBsaXN0WzBdLnRyYW5zcGlsZShvKSA6XG4gICAgYCQkYm94KCR7bGlzdC5tYXAobD0+bC50cmFuc3BpbGUobykpLmpvaW4oJywnKX0pYDtcbiJdfQ==