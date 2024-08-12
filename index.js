"use strict";

///

/*
function sum (...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result+= args[i]
  }

  return result;
}

console.log(sum(1, 2, 3))
*/

///


///
/*
function sum (a, b, c) {
  return a + b + c;
}

let array = [1, 2, 3]

console.log(sum(...array))
*/
///

///
/*
function sayHiBye (firstName, lastName) {

  function getFullName () {
    return firstName + " " + lastName
  }

  console.log("Hi, " + getFullName())
}

sayHiBye("Maxim", "Shtin")
*/
///

///
/*
let count = 0;

function makeCounter () {


  return function () {
    return count++;
  }
}

let counter1 = makeCounter()

console.log(counter1())

console.log(counter1())

console.log(counter1())
*/
///

///
/*
let phrase = "Hello"

function say() {


  console.log("dsdsd" + phrase)

}
say()
  phrase = "Bye"
  say()
*/
///

///
/*
let value = 2;

function showValue () {
  console.log("showValue " + value)
}

function wrapper () {
 let value = 3;
 console.log("wrapper " + value)
 


  showValue()
}

wrapper()
*/
///

///
/*
let count = 0;

function up () {
  return count++
}

console.log(up())
console.log(up())
console.log(up())

*/
////

///
/*
function sum (a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(1)(2))

console.log(sum(5)(-1))
*/
///

///
/*
let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetween (a, b) {
  return function (num) {
    if (num >= a && num <= b) {
      return true
    } 
    return false;
  }
}

console.log(arr.filter(inBetween(3, 6)))

function inArray (args) {
  return function (num) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === num) {
        return true;
      }
    }
    return false
  }
}

console.log( arr.filter(inArray([1, 2, 10])) )
*/
///


///
/*
let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField (field) {
  return (a, b) => a[field] > b[field] ? 1 : -1
}

console.log(users.sort(byField('name')))
*/
///

///
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      console.log( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
*/
///

///
/*
function makeCounter() {

  counter.decrease = function () {
    return counter.count--;
  }

  counter.set = function (value) {
    counter.count = value;
    return counter.count;
  }


  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())

console.log(counter.set(100))

console.log(counter())
console.log(counter())

console.log(counter.decrease())
*/
///


///
/*
function makeCounter (a) {
  let count = 0;

  return function result (b) {
    result.decrease = function () {
      return count--;
    }

    result.set = function (n) {
      count = n;
      return count;
    }

    return count++

  }
}


let counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())

console.log(counter.set(100))

console.log(counter())
console.log(counter())

console.log(counter.decrease())
*/
///


///
/*
function printNumbers (from, to) {
  let timer = setInterval(function () {
    console.log(from++)
    if (from > to) {
      clearInterval(timer)
    }
  }, 1000)
}

printNumbers(3, 6)
*/
///


///
/*
function printNumbers(from, to) {
  if (from >= to) {
    console.log(to)
    return setTimeout(() => {
      return to
    }, 1000);

  } 
  console.log(from++)
 return setTimeout(() => {

  return printNumbers(from, to)
}, 1000);
}

printNumbers(3, 6)
*/
///


///
/*
function work(a, b) {
  return a + b;
  }


function spy (func) {
  let array = []

  function result () {
    array.push([...arguments])
    
    let res = func.call(this, ...arguments)
    return res;
  }

  result.calls = array
  
  return result
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9 

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/
///

///
/*
function f(x) {
  console.log(x);
}

function delay (func, delay) {

  return function () {
    setTimeout(() => {
      let result = func.call(this, ...arguments)
      return result
    }, delay);

  }
}

let f3000 = delay(f, 3000);
let f1500 = delay(f, 1500);

f3000(12)
*/
///

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.