(function(){
    "use strict";

//var cat = {name: 'Fluffy', color: 'White'};
//cat.age = 3;
//
//cat.speak = function(){
//  display("Meowww");      
//};
//
//display(cat.name);
//display(cat.age);
//cat.speak();

//function Cat(){
//        this.name = 'Fluffy';
//        this.color = 'White';
//}
//
//var cat = new Cat();
//
//
//
//display(cat);

//class Cat{
//        constructor(name, color){
//              this.name = name;
//              this.color = color;
//        }
//        
//        speak(){
//                display('Meooow');
//        }
//}
//
//var cat = new Cat('Fluffy', 'White');
//
//display(cat);
//cat.speak();


//var cat = {
//        name: {first: 'Fluffy', last: 'LaBeouf'},
//        color: 'White'
//};
//
//Object.defineProperty(cat, 'fullName',
//                      {
//                        get:function(){
//                                return this.name.first + ' ' + this.name.last;
//                        },
//                        set: function(value){
//                                var nameParts = value.split(' ');
//                                this.name.first = nameParts[0];
//                                this.name.last = nameParts[1];
//                        }
//                        });
//
//cat.fullName = 'Muffin Top';
//display(cat.fullName);
//display(cat.name.first);
//display(cat.name.last);

//Object.defineProperty(cat, 'name', {enumerable: false});
//
//for (var propertyName in cat){
//        display(propertyName + ': ' + cat[propertyName]);
//}
//
//display(Object.keys(cat));

//cat['Eye Color'] = 'Green';
//display(cat['Eye Color']);

//display(Object.getOwnPropertyDescriptor(cat, 'name'));


//var arr = ['red', 'blue', 'green'];
//
//Object.defineProperty(Array.prototype, 'last', {get: function(){
//        return this[this.length-1];
//        }});
//var last = arr.last;
//var arr2 = ['one', 'two', 'three'];
//display(arr.last);
//display(arr2.last);

//function Animal(voice){
//    this.voice = voice || 'grunt';
//}
//Animal.prototype.speak = function(){
//    display(this.voice);
//};
//
//function Cat(name, color){
//    Animal.call(this, 'Meow');
//        this.name = name;
//        this.color = color;
//}

class Animal{
    constructor(voice){
        this.voice = voice || 'grunt';
        
    }

speak(){
    display(this.voice);
    }
}

class Cat extends Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('fluffy', 'white');
var muffin = new Cat('muffin', 'Brown');

fluffy.speak();

//display(Cat.prototype);
//display(muffin.age);
//display(Cat.prototype === muffin._proto_.age);
//display(fluffy.age);
//display(Cat.prototype === fluffy._proto_.age);


display(fluffy.age);
display(muffin.age);

})();