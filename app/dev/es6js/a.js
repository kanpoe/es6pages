class Animal {
    constructor(){
        this.name = 'kendy2',
        this.firstName="g1",
        this.lastName="G4",
        this.nameOBJ=new Object()
    }
    says(){
        this.nameOBJ={firstName:this.firstName,'lastName':this.lastName}
        var sum = (num1, num2) => { return num1 + num2; }
        return sum('a','b')
        //return this.nameOBJ
    }
}
class Cat extends Animal {
    constructor(){
        super();
        /*super关键字，它指代父类的实例（即父类的this对象）
        子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
        如果不调用super方法，子类就得不到this对象。*/
        this.firstName = this.name
    }
}
let cat = new Cat()



