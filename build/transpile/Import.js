/**
 * Import 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Import = (function () {
    function Import(member, module, location) {
        _classCallCheck(this, Import);

        this.member = member;
        this.module = module;
        this.location = location;
    }

    _createClass(Import, [{
        key: "toString",
        value: function toString() {

            return "import " + this.member + " from " + this.module + ";";
        }
    }]);

    return Import;
})();

exports["default"] = Import;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSW1wb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFHTSxNQUFNO0FBRUcsYUFGVCxNQUFNLENBRUksTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7OEJBRnBDLE1BQU07O0FBSUosWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FFNUI7O2lCQVJDLE1BQU07O2VBVUEsb0JBQUc7O0FBRVAsK0JBQWlCLElBQUksQ0FBQyxNQUFNLGNBQVMsSUFBSSxDQUFDLE1BQU0sT0FBSTtTQUV2RDs7O1dBZEMsTUFBTTs7O3FCQWtCRyxNQUFNIiwiZmlsZSI6IkltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0IFxuICovXG5jbGFzcyBJbXBvcnQge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVyLCBtb2R1bGUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5tZW1iZXIgPSBtZW1iZXI7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gYGltcG9ydCAke3RoaXMubWVtYmVyfSBmcm9tICR7dGhpcy5tb2R1bGV9O2A7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0XG4iXX0=