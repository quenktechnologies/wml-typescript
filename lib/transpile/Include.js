/*
 * Include 
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Include = (function () {
    function Include(tmpl, args, location) {
        _classCallCheck(this, Include);

        this.tmpl = tmpl;
        this.arguments = args;
        this.location = location;
    }

    _createClass(Include, [{
        key: "toString",
        value: function toString() {

            return this.tmpl + ".apply(this, [make].concat(" + this.arguments + "))";
        }
    }]);

    return Include;
})();

exports["default"] = Include;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc3BpbGUvSW5jbHVkZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR00sT0FBTztBQUVFLGFBRlQsT0FBTyxDQUVHLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzhCQUZoQyxPQUFPOztBQUlMLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBRTVCOztpQkFSQyxPQUFPOztlQVVELG9CQUFHOztBQUVQLG1CQUFVLElBQUksQ0FBQyxJQUFJLG1DQUE4QixJQUFJLENBQUMsU0FBUyxRQUFLO1NBRXZFOzs7V0FkQyxPQUFPOzs7cUJBa0JFLE9BQU8iLCJmaWxlIjoiSW5jbHVkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBJbmNsdWRlIFxuICovXG5jbGFzcyBJbmNsdWRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRtcGwsIGFyZ3MsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy50bXBsID0gdG1wbDtcbiAgICAgICAgdGhpcy5hcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy50bXBsfS5hcHBseSh0aGlzLCBbbWFrZV0uY29uY2F0KCR7dGhpcy5hcmd1bWVudHN9KSlgO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY2x1ZGVcbiJdfQ==