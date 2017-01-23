"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal() {
        _classCallCheck(this, Animal);

        this.name = 'kendy2', this.firstName = "g1", this.lastName = "G4", this.nameOBJ = new Object();
    }

    _createClass(Animal, [{
        key: "says",
        value: function says() {
            this.nameOBJ = { firstName: this.firstName, 'lastName': this.lastName };
            var sum = function sum(num1, num2) {
                return num1 + num2;
            };
            return sum('a', 'b');
            //return this.nameOBJ
        }
    }]);

    return Animal;
}();

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat() {
        _classCallCheck(this, Cat);

        /*super关键字，它指代父类的实例（即父类的this对象）
        子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
        如果不调用super方法，子类就得不到this对象。*/
        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

        _this.firstName = _this.name;
        return _this;
    }

    return Cat;
}(Animal);

var cat = new Cat();