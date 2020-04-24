/* https://awwapp.com/
JS INTRODUCTION
   - In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($)JavaScript is Case Sensitive
   - MDN (Mozilla Developer Network)  <script src="myScript.js"></script>
   - Client - side JS: cung cấp các đối tượng đê điều khiển 1 trình duyệt (DOM)
   - Sever - side JS: cung cấp cá đối tượng liên quan đến việc chạy JS trên máy chủ
   <script src="./myScript.js"></script> cuối <body>
   this method cua object
   function la object, tat ca co 1 property la prototype
   */

/*
DATA TYPES
   - primitive types
      + Number
      + String   escape characters "" ''
      + Boolean
   - Special types
      + undefined
      + null(object)
   - Reference types
      + Array
      + Object {ery: value}  a.b a['b']
*/

/*
  - unary, binary, ternary(conditional)
  - binay: 0b(B), octal: 0755, 0644, hexadecimal: 0x.
               hyphens: first - name, last - name 
               underscore: first_name, last_name    
   JavaScript: lower Camel Case: firstName, lastName
               Upper Camel Case(Pascal case): FirstName, LastName
*/             

/*
FUNCTION(first-class)
   function doSomething(input1, input2,...){
       //code
       return something;
   }
*/

/*
OBJECT METHOD
   var myDog = {     // object literal
      weight: 5,
      name: 'Dan',
      age: 1,
      bark: function(){  //anounymous function
          console.log('Meo meo, my name is', this.name);
      },     
      eat: function(bone){
          this.weight= this.weight + bone.weight;
      }
    };
    {weight: 5, ...., bark: [Function: bark], eat: [Function: eat]};

    myDog.bark <==> myDog.bark();
    var bone={ weight: 0.5};
    console.log('Before eating', myDog.weight);
    myDog.eat(bone);
    console.log('After eating', myDog.weight);

    //constructor function  <==>  nomal function
   function Mouse(color, weight){
       this.type = 'Mouse';
       this.color = color;
       this.weight = weight;
       }

    // NEW keyword
   var mouse1 = new Mouse('white', 0.2);
   var mouse2 = new Mouse('black', 0.5);
   console.log(mouse1);
   console.log(mouse2);
 */

/*
PROTOTYPE
  -  All function have 1 property: .prototype(object)
  -  In prototype, have 1 property is constructor pointed back function
  -  Prototype object is shared among all the objects created using new

    function Mouse(color, weight){
       this.type = 'Mouse';
       this.color = color;
       this.weight = weight;
       }
    //Add properties
    Mouse.prototype.sleep = function(){
    console.log('Sleeping...');
    };
    var jerry = new Mouse('orange', 20);
    console.log(jerry);
    -> Mouse {type: "Mouse",... _proto_:{sleep:f(),constructor: f Mouse(color, weight),...}}
    console.log(jerry.sleep());

*/

/*
VAR LET CONST
  -  declartion   var <==> let, const
  -  hoisting    var <==> let, const
  -  block scope (if, for)   let, const <==> var (function scope)
  Ex: if (true){var x = 10;} console.log(x);   10
*/

/*
ARROW FUNCTION EXPRESSION
    function sum(a,b) {                           var sum2 = function(a, b) {
         return a + b;                                return a + b;
    }                                              }

    var sum = (a, b) => {                         var sum = (a, b) => a + b;
         return a + b;                           
    }                                             var square = x => x*x;
*/

/*
CLASS
   FUNCTION CONSTRUCTOR                                class Mouse {                
   function Mouse(name) {                                 constructor(name) {
     this.name = name;                                          this.name = name;
   }                                                      }
   Mouse.prototype.run = function() {                     run() {
     console.log(`${this.name} is running`);                console.log(`${this.name} is running`);
   }                                                      }
                                                        }
              const mouse = new Mouse('MicKey');          mouse.run();
*/

/*
INHERITANCE
   class CoffeeMachine {                         const coffeeMachine = new SpecialCoffeeMachine();
     makeCoffee() {                              coffeeMachine.makeCoffee(function(){
       console.log('making coffee...');               console.log('Call the boss');
     }                                                })
   }                                                
   class SpecialCoffeeMachine extends CoffeeMachine {
     makeCoffee(cb) {
       console.log('making coffee and do something...');
       cb();
      }
   }

 });

 //The Object.create() method creates a new object, using an existing object as the prototype of the newly created object Object.create(proto, [propertiesObject])

 //Magazine Constructor
 function Magazine(title, author, year, month) {
   Book.call(this, title, author, year);
   this.month = month;
 }
 //Inherit Prototype (vì nếu ko thì k dùng dc method của Book)
 Magazine.prototype == Object.create(Book.prototype)
 //Instantiate Magazine Object
 const mag1 = new Magazine(''')
 //Use Magazine Constructor
 Magazine.prototype.constructor = Magazine;


 const book1 = Object.create(bookProtos, {
   title: {value: 'Book One},
   author: {value 'John Doe'},
   year: {value: '2013'}
 });

*/

/*
SUPER
 
   class Hero {                                 const heroA = new RangedHero('A', 100, 10);
      constructor(name, hp, damage) {           const heroB = new Hero('B', 200, 5);
        this.name = name;                       console.log({heroA, heroB});
        this.hp = hp;                           heroA.attack(heroB);
        this.damage = damage;                   console.log({heroA, heroB});
      }
      applyDamage(damage) {
        this.hp -= damage;
      }
      attack(enemy) {
        enemy.applyDamage(this.damage);
     }
   }
   class RangedHero extends Hero { // subclass
      constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
      }

      attack(enemy) {
      super.attack(enemy); //goi method baseclass, super.attack
      this.hp += this.damage;
     }
  }
*/

/*
TEMPLATE STRING
   function greeting(name) {
        return `Hi,                     Hi,
        ${name} !`;                     Minh !
     }
   console.log(greeting('Minh'));
*/

/*
ARGUMENTS: biến có dạng object(Array-like objects: object nhu array(phai co lenh, co index la key)) trong ham thuong
                                         Array-like objects
    const names = ['Thanh', 'Trang', 'Thủy'];          const obj = {  0: 'Thanh',
    for (let i = 0; i < names.length; i++) {                          1: 'Trang',
        console.log(names[i]);                                        2: 'Thủy',
      }                                                               length: 3   };
                                                     for (let i = 0; i < obj.length; i++) {
                                                          console.log(obj[i]);   }
      function sum( ) {console.log(arguments)};    sum(1, 2, 3, 5, 10);
                  -> {'0':1, '1':2, '2':3, '3':5,'4':10}   
                   arguments.length = 5                                             
                                                                            

    Function have n parameters(tham so dau vao, ko co dinh), arguments is a Array-like objects
    function sum() {
       let result = 0;
       for (let i = 0; i <arguments.length; i++) {
           result +=arguments[i];
            }
       return result;
      }
*/

/*
DAFAULT PARAMETERS(nhieu bien cung duoc)
    function greeting(name = 'friend',...) {
       return `Hi, ${name}`;
    }
    greeting();        Hi, friend
*/

/* bind trả về 1 hàm để gọi sau. Call gọi luôn hàm tại lúc đó
CALL(mỗi function đều có call, tham số đầu là 1 đối tượng(nếu hàm có this), các tham số còn lại là biến)
func.call(this, param1, param2, ...)

function greeting(name, age) {                           function greeting() {
   console.log(`Hi! ${name}. I am ${age}.`);                 console.log(`Hi! ${this.name}. I am $                                                               {this.age}.`);
}                                                        }
  greeting.call(null, 'Tom', 10);                       var cat = {
// Hi! Tom. I am 10                                      name: 'Tom',
                                                          age: 10 
                                                        };
                                                        greeting.call(cat);
                                                        // Hi! Tom. I am 10
*/

/*
APPLY: func.apply(this, [param1, param2, ...])
function sum() {                                   function average() {
  const numbers = Array.from(arguments);                   const x = sum.apply(null,arguments);
  return numbers.reduce((sum, num) =>sum + num,0);         return x/arguments.length;
}                                                          }
                                      average(1, 2, 3, 6);
*/

/*
ENHANCED OBJECT LITERALS: khai bao ngan goc cac thuoc tinh, method cua 1 object

   const name = 'Tom';
   const cat = {
     name, //this.name : name                 cat.run()             // Tom is running
     run() { //run: function() {}
       console.log(`${this.name} is running`);
     }
   };
   console.log(Object.values(cat)) => ["name", f]
   console.log(Object.keys(cat)) => ["name", "run"]
*/

/*
Static method: ko doi tao tao object moi de dung function day
Ex: Array.from(), no k can tao array moi de dung ham do

class Foo {                                          function Foo() {
     static someMethod() {                             ....
     console.log('some method');                      }
     }                      
                                                   Foo.someMethod = function() {     
   anotherMethod() {                                    ....
    console.log('another method');                   }
   }
                                              Foo.protype.anotherMethod = function() {
 }                                                ....
                                                }

*/

/* rest:phan con lai, ko biet truyen vao bao nhieu tham so
...REST  <==> ARGUMENTS  
   array      object (array like object)
   not all    all variables
  [1, 2, 3, 4]  [0: 1, ...]
  function log(a, ...numbers) {            function log(a) {
   console.log(a);                            console.log(a);
    console.log(numbers);                  }
  }
  log(1, 2, 3, 4);     1  [2, 3, 4]        log(1, 2, 4) -> 1

function sum(...nums) {                    function concat(separator, ...strings) {
  return nums.reduce((a,b) => a+b,0);         return strings.join(separator);
}                                          }
                                
sum(1, 2, 3, 4, 5);   // 15                 concat('.', 'a', 'b', 'c');  // a.b.c
*/

/*
...SPREAD   <==> REST: gom cac pt tao 1 array
const a = [1, 2, 3];
const b = [0, ...a, 4];        [0, 1, 2, 3, 4]
console.log(b);
sum(...a);  //sum(1, 2, 3)

//spread an object
const obj1 = {        let obj2 = {
  a: 1,                 ...obj1, (nhu obj1)
  b: 2,                 z: 1000 (them)
  c: 3 
  d: {e: 10}  };               };   
   
console.log({ obj1, obj2 })
{
  obj1: {a: 1, b:..... d:{e:10}},
  obj2: ......................, z: 1000}
}
*/

/*
DESTRUCTURING  array      const [a, , , d] = arr; (a, d) = (1, 4)
const arr = [1, 2, 3, 4, 5];    const [a,...b] = arr  (a, b) = 1, [2, 3, 4, 5]
const [a, b, c, d, e] = arr;
console.log(a, e) // 1 5

obect: const obj = {          const {a: x, b: y} = obj;
            a: 1,             console.log(x, y) = 1, 2
            b: 2              const {a, b} = obj; enhanced object literal   //react
            };                console.log(a, b) = 1, 2
*/

/* GLOBAL CONTEXT, FUNCTION CONTEXT, BIND(method của function, thay đổi context của hàm)
 //global context
  var mouse = {                                         mouse.sayHi(); context cua sayHi la mouse  
      name: 'Mickey',                                   var say = mouse.sayHi;   // function
      sayHi: function() {                         say(); Hi, my name is, undefined, ko co context(global context)
        console.log('Hi, my name is', this.name);         truyen vao object muon su dung lam this cua function 
         }                                              var sayTwo = mouse.sayHi.bind(mouse);
       };                                               sayTwo(); Hi, my name is, Mickey     (this->mouse)
                                                      var sayThree = mouse.sayHi.bind(cat);
  var cat = {                                           sayThree(); Hi, my name is, Tom
      name: 'Tom'
    };      mouse.sayHi [Function: sayHi]
        
    
    
  function run(cb) {                   run(mouse.sayHi); 
        console.log('run...');         //  run...           
        cb();                              undefied
  }                                   
 
   var mouse = {                     run(mouse.sayHi.bind(mouse));
   name: 'Mickey',                   // run...
   sayHi: funtion() {                 Mickey
     console.log(this.name);
   }
  }
*/

/*
VALUE TYPE AND REFERENCE TYPE
*/

/*
FOR
   - for .. of    các phần tử (object) for (var employee of a) {console.log(a.name, a.age);}
   - for .. in    (index, key trong object)
IF .. ELSE, ternary operator : condition ? expression when true : expression when false
WHILE  DO .. WHILE
SWITCH .. CASE
   switch(lightValue){
      case 'green':
      case 'orange':
      console.log('go'); break;
      default: console.log('stop'); break;
    }
*/

/*
CALLBACK 
  - using function as a parameter
     var coffeeMachine = {
        makeCoffee: function(onFinish) {
           console.log('Making coffee...');
           onFinish();
          }
     };
     var beep = function() {
         console.log('Tit Tit');
     };
     coffeeMachine.makeCoffee(beep);  // Making coffee... tit tit
     coffeeMachine.makeCoffee(function() {
          console.log('Bip Bip');
      })                              // Making coffee... bip bip
*/

/*
ARRAY METHODS
  a.concat(b)     // arrays are unchanged
  a.push(b)       // return  length and a is changed
  a.pop()         //  return  length and a is changed
  a.shift()       // return first value and a is changed 
  a.unshift()     // add one or more elements into first index and return length of new array 
  a.slice()       // (2) (2,3) not evalute last index
  a.splice()
  var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
  myFish.splice(2, 0, 'drum'); // insert 'drum' into index 2
     =>> myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"]
  myFish.splice(2, 1); // delete 1 element form index 2 
     =>> myFish is ["angel", "clown","mandarin", "sturgeon"]
*/

/*
ARRAY MAP
  arr.map(function(item){
      //transform
      return newValue;
  });
*/

/*
ARRAY FILTER
  arr.filter(function(item){
      //filter
      return newValue;  true or false
  });
*/

/*
ARRAY.FIND
 As filter but return first value
*/

/*
ARRAY.REDUCE
  arr.reduce(function(item1, item2){
      //calculation
      return x;
  });

  arr.reduce(function(item1, item2){
      //calculation
      return x;
  }, init);

  var numbers = [1, 2, 3, 4];                 1  2
  numbers.reduce(function(a, b){              3  3
  console.log(a, b);                          6  4
  return a+b;                               =>> 10
  })
  var orders = [
  { name: 'A', quantity: 2, unitPrice: 100},
  { name: 'B', quantity: 1, unitPrice: 400},
  { name: 'C', quantity: 5, unitPrice: 15}
];
 
  orders.map(function(x){                           orders.reduce(function(currentTotal, product) {
    return x.quantity * x.unitPrice;                      return currentTotal + product.quantity *                                                                     product.unitPrice;
       return x.quantity* x.unitPrice;              },0)
  }).reduce(function(a,b){
      return a+b;
  })

*/

/*
ARRAY SORT
  - arr.sort(function(a,b){
     
    });
  //assum a,b
  if function return a value <0 ->> a will come before b
                             >0 ->> b will come before a
                             =0 ->> unchanged
*/

/*
MATH OBJECT
  Math.PI
  Math.ceil(number)
  Math.floor(number)
  Math.round(number)
  Math.max(x1, x2, ...)
  Math.min(x1, x2, ... )
  Math.random()
*/

/*
JSON
  - Introduction
       + JSON: JavaScript Object Notation.
       + JSON is a syntax for storing and exchanging data.
       + JSON is text, written with JavaScript object notation.
       + When exchanging data between a browser and a server, the data can only be text.JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.We can also convert any JSON received from the server into JavaScript objects.
       + You can request JSON from the server by using an AJAX request
       + A common use of JSON is to exchange data to/from a web server.
       + A common use of JSON is to read data from a web server, and display the data in a web page.
  - JSON OBJECTS
       + { "name":"John", "age":30, "car":null } 
       + Nested JSON Objects
      {
          "name":"John",
          "age":30,
          "cars": {
              "car1":"Ford",
              "car2":"BMW",                     // delete myObj.cars.car2;
              "car3":"Fiat"
         }
      } 
       + Arrays in JSON Objects
       {
         "name":"John",
         "age":30,                               //x = myObj.cars[0];
         "cars":[ "Ford", "BMW", "Fiat" ] 
       }
       + Nested Arrays in JSON Objects
       {
          "name":"John",
          "age":30,
          "cars": [
              { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },  // delete myObj.cars[1];
              { "name":"BMW", "models":[ "320", "X3", "X5" ] },
              { "name":"Fiat", "models":[ "500", "Panda" ] }
         ]
       }
       + stringify - convert an object to a JSON string   (string to server)
       + parse - convert a JSON string to an object       (object to browser)
       
       var myDog = {name: 'lulu', age: 1, dead: false};
       var myDogString = JSON.stringify(myDog);
       var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
       var myCat = JSON.parse(myCatString);
*/

/*
NODE MODULE SYSTEM
  -  Exchange file JS to ->> more small file
  -  1 file is 1 module

EX: FILE mouse.js                                                   FILE index.js
  function Mouse(color) {                                           var Mouse = require('./mouse');
    this.color = color;                                             var Cat = require('./cat');
    this.dead = false;
  }                                                                 var mickey = new Mouse('black');
  Mouse.prototype.die = function() {                                var jerry = new Mouse('orange');
    this.dead = true;                                               console.log(mickey);
  };                                                                console.log(jerry);
  module.exports = Mouse;
                                                                    var tom = new Cat();
    FILE cat.js                                                     tom.eat(mickey);
  function Cat() {                                                  tom.eat(jerry);
    this.stomach = [];                                              console.log(tom);
  }
  Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    mouse.die();
  };
  module.exports = Cat;
*/

/*
NODE BUILD-IN MODULES (available in node.js installes) 
   - https://nodejs.org/dist/latest-v12.x/docs/api/
     FileSystem: readFileSync writeFileSync (nodejs/docs)

   var fs = require('fs'); 
   var text = fs.readFileSync('./song', {encoding: 'utf8'});
   console.log(text);
   fs.writeFileSync('./song-2.txt','I am Coders.Tokyo');
*/

/*
NODE PACKAGE MANAGER (Community, developer improve)
 - Install node: node -v, npm -v
 - Vào trang npmjs.com
 - readlineSync -> Install ( CLI -> Bắt đầu 1 project(include file) -> npm init -> enter alls(name là folder project) -> create file package.json -> npm install (package name) -- save -> Save into package.json file -> create node_modules folder) -> require vào thôi

   var readlineSync = require('readline-sync');
   var pet = {};
   // Wait for user's response.
   var name = readlineSync.question(' Your pet name: ');
   var gender= readlineSync.question( 'pet genger');
   var weight = readlineSync.question ('Weight');
   pet.name = name;
   pet.gender = gender;
   pet.weight = weight;
   console.log(pet);
*/

/*
CLOSURE: hàm trả về hàm
function debug(name) {
 return function(str) {          
   console.log(`[${name}] ${str}`);
 }
}

const log = debug('Mouse');
log('Error happened');          [Mouse] Error happened
*/

/*
SYNC(SYNCHORONOUS) ASYNC(ASYNCHRONOUS)

      Sync   fs.readFileSync('song1.txt', { encoding: 'utf8'});

      --------------------------|------------------------------|------------------>
      Make coffee           Coffee Done                     Wear Done          Done
                            Wear clothes                    Making bed

      Async  fs.readFile('song1.txt', { encoding: 'utf8'}, function(err, song1) {
        console.log(song1);
      });

      ----------|-----------|------------|----------->        //     Read/write to FS, Network
      Make coffee      Wear clothes   Make bed    Done
*/

/*
HIGHER ORDER FUCTIONS: hàm có tham số(callback, composition) là 1 hàm hoặc trả về 1/nhiều hàm(closure, curryin, stateful function): chia nhỏ ct ra rất là nhiều hàm
*/

/*
CALLBACK HELL (nested if)
*/

/*
PROMISE- constructor function(Promise) - npm install promise-fs
Cài module promise
Promise có sẵn trong javasript, giúp viết code bất đồng bộ dễ dàng hơn. Sức mạnh của promise chính là khả năng nối các tác vụ bất đồng bộ và trả về kết quả theo mong muốn.
Tao hàm -> trả về promise -> gọi resolve, reject
Cách dùng: then và catch
}
var fs = require('fs')

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
      if(err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
}

readFilePromise('song1.txt')
  .then(song1 => {console.log(song1); return readFilePromise('song2.txt')  })
  .then(song2 => console.log(song2))
  .catch(error => console.log(error))

async function run() {
  var song1 = await readFilePromise('./song1.txt');
  var song2 = await readFilePromise('./song2.txt');
  return [song1, song2]
}
run().then(values => console.log(values))

Promise.all([ rút gọn promise, k cần chú ý đến thứ tự chạy
  readFilePromise('./song1.txt),
  readFilePromise('./song2.txt),
  readFilePromise('./song3.txt)
])
  .then(values => console.log(values))
  .catch(err => console.log(err))


Tạo 1 hàm return promise

let add = (a, b) => {
  return new Promise(resolve, reject) {
    setTimeout(()=>{
       if( typeOf a !='number' || typeOf b !='number') {
       return reject(new Error('Tham so kp kieu number'))
         }  
       resolve(a+ b)
      },2000)
    }
}

add(3, 4)
  .then(res => add(res, 7))
  .then(res => console.log(res))
  .catch(err => console.log('Loi:' + err))

let tinhDientich = (a, b, h) => {
add(a, b)
  .then(res => multiply(res ,h))
  .then(result => divide(result, 2))
  .then(square => console.log('Dien tich hinh thang = ' + square))
  .catch(err => console.log('Loi' + err)) 
} -> tinhDientich(1, 2, 3)

let tinhDientich = (a, b, h) => {
add(a, b)
  .then(res => multiply(res ,h))
  .then(result => divide(result, 2))
}
tinhDientich(1, 2, 3)
  .then(square => console.log('Dien tich hinh thang = ' + square))
  .catch(err => console.log('Loi' + err)) 

- Browser(PromiseStatus, PromiseValue)
- Promise.resolve(gt hoặc Promise), .reject('Bi loi') -> handle (đều return về Promise)
- Promise.all([add(4, 5), multiply(4, 5)])//ko phụ thuộc thứ tự
  .then(res => console.log(res)) // [9, 20] //.then([add, multiply] => {console.log(add) console.log(multiply)}
  .catch(err => console.log(err)) //promise nào bị reject đầu tiên, race thì resolve/reject của kq đầu tiên(phụ thuộc thứ tự)

- Async/await

let add = async() => {
  let res = await addPr(4, 5);
  console.log(res)
}

add()   // 9, dừng hết lại, chờ addPr rồi gán res
<==>

let add = async() => {
  let res = addPr(4, 5);
  console.log(res) // Promise{<pending>}
}

let tinhDientich = async (a, b, h) => {
  try { 
  let ab = await add(a, b);
  let abh = await multiply(ab, h)
  let square = await divide(abh, 2)
  return Promise.resolve(square)
  } catch (e) {
   return Promise. reject(e)	
  } 
}
tinhDientich(2, 4, 6)
 .then(res => console.log(res))
 .catch(err => console.log(err + '')) Handle lỗi -> try catch

*/

/*
FUNCTIONA PROGRAMMING
Pure functions
Function composition
Function currying
Higher order functions
*/

/*
ASYNCHRONOUS JAVASCRIPT
Event loop
Asynchronous
Single threaded
Callbacks, Promises and async - await
What the heck is the event loop anyway
*/

/*
Promise.all([
  readFilePromise('./song1.txt'),
  readFilePromise('./song2.txt'),
  readFilePromise('./song3.txt')('./song4.txt') // resolved
]).then((values) => {
  console.log(values); -> [song1, song2, song2]  
}).catch((error) => {
  console.log(error);
}) // 1 lỗi là out 
*/

/*
ASYNC - AWAIT
var fs = require('fs);

function readFilePromise(path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, {encoding: 'utf8}, function(err, data) {
      if (err) { reject(err)} else {resolve(data);}
    })
  })
}

async function run() {
  var song1 = await readFilePromise('./song1.txt')
  var song2 = await readFilePromise('./song2.txt')
  return [song1, song2]
}
  run().then((values) => {
    console.log(values)
  })
 
*/

/*
setTimeout(fn, ms);  clearTimeout
var done = () => { console.log('Finish)};
console.log('Start');
var timeoutId = setTimeout(done, 1000);
console.log('Done');
clearTimeout(timeoutId); -> Start, Done
*/

/*
setInterval(fn, ms) clearInterval
var i = 0;
var intervalId - setInterval(() = > {
  ++i; console.log(i);
  if (i === 5) { clearInterval(intervalId)}
}, 1000); -> 1 2 3 4 5

*/






























