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

///
/*
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
*/
///

///
/*
let user = {
  firstName: "Вася"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// привязка this к user
let funcUser = func.bind(user);

funcUser("Привет");
*/
///

///
/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

askPassword(() => {user.loginOk()}, () => {user.loginFail});
*/
///

///
/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

///askPassword(user.login.bind(user, true), user.login.bind(user, false));

askPassword(() => {user.login(true)}, () => {user.login(false)});
*/
///

///
/*
function logPerson () {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: "Михаил", age:22, job: "FrontEnd"}

function bind (person, func) {
  return function () {
    return func.call(person, ...arguments)
  }
}

bind(person1, logPerson)()
*/
///

/* Theme - Map and Set */

///
/*
function unique (arr) {
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(( unique(values) ))
*/
///

///

// function aclean (arr) {
//   let arraySorted = [];
//   for (let el of arr) {
//     arraySorted.push(el.split("").sort().join("").toLowerCase())
//   }

//   let result = [];
//   let set = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arraySorted[i]) == false) {
//       result.push(arr[i])
//     }
//     set.add(arraySorted[i]);
//   }

//   return result;
// }

// function aclean (arr) {
//   let mapOfArr = new Map()

//   for (let el of arr) {
//     mapOfArr.set(el, el.split("").sort().join("").toLowerCase())
//   }
//   arr = null;

//   let result = [];
//   let set = new Set();

//   mapOfArr.forEach((value, key, map) => {
//     if (set.has(value) == false) {
//       result.push(key)
//     }
//     set.add(value);
//   })

//   return result;
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr))
///

///
/*
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys)
*/
///

///
/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries (obj) {
  let sum = 0;
  for (let value of Object.values(obj)) {
    if (typeof(value) === "number") {
      sum+= value
    }
  }
  return sum;
}

console.log(sumSalaries(salaries))
*/
///

///
/*
let user = {
  name: 'John',
  age: 30
};

function count (obj) {
  return Object.entries(obj).length;
}

console.log(count(user))
*/
///

///
/*
let user = {
  name: "John",
  years: 30
};

let {name, years : age, isAdmin = false} = user

console.log( name ); 
console.log( age );
console.log( isAdmin );
*/
///

///
/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary (obj) {
  let max = 0;
  let name = null;
  for (let [key, value] of Object.entries(obj)) {
    if (max < value) {
      name = key;
      max = value
    }
    console.log(value)
  }
  return name;
}

console.log(topSalary(salaries))
*/
///

///
/*
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user)

let obj = JSON.parse(json)

console.log(obj)
*/
///

///
/*
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if (value == meetup && key != "") {
    return undefined;
  } else { 
    return value;
  }

}));

*/
///

///
/*
function delay(ms) {
  return new Promise ((resolve) => {
    // setTimeout(() => {
    //   resolve()
    // }, ms);
    setTimeout(resolve, ms)
  })
}

delay(1000).then(() => console.log('выполнилось через 3 секунды'));
*/
///

// function go() {
//   showCircle(150, 150, 100, div => {
//     div.classList.add('message-ball');
//     div.append("Привет, мир!");
//   });
// }

///
/*
function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    return new Promise ((resolve) => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
  })
}

function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}
*/
///

///
/*
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));

let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function (promise1, promise2) {
  // let res1 = await promise1.then(function (res) {
  //   return res
  // });

  // let res2 = await promise2.then(function (res) {
  //   return res
  // });

  // return res1 + res2;
  return await promise1 + await promise2;
};

let res = addTwoPromises(promise1, promise2)

console.log(res);
*/
///

///
/*
function doItAFter (sec) {
  return new Promise (resolve => setTimeout(resolve, sec * 1000))
}

doItAFter(3).then(() => console.log('dasdasdas'))
*/
///

///
/*
async function getState(promise) {
  let state;
  let p1 = promise
    .then(() => state = "fulfilled")
    .catch(() => state = "rejected");

  let p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  }).then(() => (state = "pending"));
  return Promise.race([p1, p2]);
}

const promise = new Promise((resolve, rejected) => {
    resolve()
});

console.log(getState(promise));
*/
///

///
/*
async function loadJson (url) {
  let response = await fetch(url)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new Error(response.status);
  }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/
///

///
/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson (url) {
  let response = await fetch(url)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser () {
  let user
  while (true) {
    try {
      let name = prompt("Введите логин?", "iliakan")
      user = await loadJson(`https://api.github.com/users/${name}`)
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  }
  console.log(`Полное имя: ${user.name}.`);
  return user
}

demoGithubUser();
*/
///

///
/*
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  wait().then((res) => {
    console.log(res)
  })
}

console.log(f())
*/
///

///
/*
async function getUsers(names) {
  let result = [];
  for (let name of names) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let user = await response.json();
    if (user.message == "Not Found") {
      result.push(null) 
    } else {
      result.push(user)
    }
  }
  return result;
}

console.log(getUsers(["iliakan", "remy", "no.such.users"]))


async function test () {
  let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
  assert.equal(users[0].login, 'iliakan');
  console.log(users[1].login);
  console.log(users[2]);
}

test()
*/
///

///
/*
console.log(
  document.querySelector("[data-widget-name]").getAttribute("data-widget-name")
);

for (let el of document.querySelectorAll("[href]")) {
  if (/\:\/\//.test(el.getAttribute("href")) 
    && !/http\:\/\/internal\.com/.test(el.getAttribute("href"))) {
    el.style.color = "orange";
  }
}
*/
///

///
/*
const list = document.querySelector(".list")

let isHidden = true;

document.querySelector(".title").addEventListener("click", function () {
  
  if (isHidden) {
    list.style.visibility = "visible"
    document.querySelector(".to_open").style.display = "none"
    document.querySelector(".to_close").style.display = "inline"
    isHidden = false
  } else {
    list.style.visibility = "hidden"
    document.querySelector(".to_open").style.display = "inline"
    document.querySelector(".to_close").style.display = "none"
    isHidden = true
  }
})
*/
///

///
/*
DO IT LATER
const ball = document.querySelector("#ball")

const field = document.querySelector("#field")

field.addEventListener("click", (event) => {
  const fieldData = field.getBoundingClientRect()
  const leftStyle = event.clientX - (ball.naturalWidth / 2)
  const rightStyle = event.clientY - ((ball.naturalHeight / 2))

  console.log(fieldData)
  console.log(leftStyle + " leftStyle")
  console.log(rightStyle + " rightStyle")

  if (leftStyle >= fieldData.x && rightStyle >= fieldData.y) {
    ball.style.left = leftStyle + "px"; 
    ball.style.top = rightStyle + "px"; 
  } else {
    console.log("WORKED")
    ball.style.left = 100 + "px"; 
    ball.style.top = 100 + "px"; 
  }
})
*/
///

///
/*
document.querySelector("#grid").addEventListener("click", (event) => {
  let target = event.target.dataset.type;

  if (!target) return;
  const index = event.target.cellIndex;

  let rows = document
    .querySelector("#grid")
    .querySelector("tbody")
    .querySelectorAll("tr");

  rows = Array.from(rows)

  if (target == "string") {
    rows.sort((a, b) => {
      if (a.children[index].textContent > b.children[index].textContent) {
        return 1;
      }
      if (a.children[index].textContent < b.children[index].textContent) {
        return -1;
      }
      return 0;
    })
  } else if (target == "number") {
    rows.sort((a, b) => {
      return a.children[index].textContent - b.children[index].textContent;
    })
  } else {
    return 0;
  }

  document
  .querySelector("#grid")
  .querySelector("tbody")
  .append(...rows)
});
*/
///

///
/*
document.querySelector("#contents").addEventListener("click", (event) => {
  if (event.target.nodeName != "A" && event.target.parentNode.nodeName != "A")
    return;
  let agreeResult = confirm(`Leave for ${event.target.getAttribute("href")}`);
  if (!agreeResult) {
    event.preventDefault();
  }
});
*/
///

///
/*
document.querySelector("#thumbs").addEventListener("click", event => {
  event.preventDefault()
  console.log(event.target.nodeName)
  if (event.target.nodeName != "IMG" && event.target.nodeName != "A") return
  
  if (event.target.nodeName == "IMG" ) {
    document.querySelector("#largeImg").src = event.target.parentNode.href
  } else {
    document.querySelector("#largeImg").src = event.target.href
  }
})
*/
///

///
/*
document.querySelector("#ul").addEventListener("mousedown", (event) => {
  event.preventDefault();
});

document.querySelector("#ul").addEventListener("click", (event) => {
  if (event.target.nodeName != "LI") return;

  let element = event.target;
  let listItems = document.querySelector("#ul").querySelectorAll("li");

  if (!event.ctrlKey && !event.metaKey) {
    for (let item of listItems) {
      item.classList.remove("selected");
    }
    element.classList.add("selected");
  } else {
    if (!element.classList.contains("selected")) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  }
});
*/
///

///
/*
document.addEventListener("mouseover", event => {
  if (!event.target.dataset.tooltip) return;

  const text = event.target.dataset.tooltip

  let span = document.createElement("span")
  span.innerHTML = text
  span.classList.add("tooltip")

  document.body.append(span);
  
  let coords = event.target.getBoundingClientRect()
  let left = coords.left + (event.target.offsetWidth - span.offsetWidth) / 2
  if (left < 0) left = 0;
 

  let top = coords.top - span.offsetHeight - 5;
  if (top < 0) top = coords.top + event.target.offsetHeight + 5;

   span.style.left = left + "px"
    span.style.top = top + "px"
})


document.addEventListener("mouseout", event => {
  if (!event.target.dataset.tooltip) return
  document.querySelector(".tooltip").remove()

})
*/
///

let currentElem = null;

document.querySelector("#house").addEventListener("mouseover", (event) => {
  if (currentElem) return;

  let target = event.target.closest("[data-tooltip]");

  if (!target) return;

  currentElem = target;

  if (document.querySelector(".tooltip"))
    document.querySelector(".tooltip").remove();

  let span = document.createElement("span");
  span.classList.add("tooltip");
  span.innerHTML = target.dataset.tooltip;

  document.body.append(span);

  let coords = currentElem.getBoundingClientRect();
  let left = coords.left + (event.target.offsetWidth - span.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - span.offsetHeight - 5;
  if (top < 0) top = coords.top + event.target.offsetHeight + 5;

  span.style.left = left + "px";
  span.style.top = top + "px";
});

document.querySelector("#house").addEventListener("mouseout", (event) => {
  if (!currentElem) return;

  let relatedTarget = event.relatedTarget;

  if (relatedTarget == currentElem) return;

  if (relatedTarget.dataset.tooltip) {
    currentElem = null;
    return;
  }

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }

  currentElem = null;
});
