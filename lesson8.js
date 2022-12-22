//Задание 1
const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
]

console.log(pickPropArray(students, 'name'));

function pickPropArray(arr, prop) {
  var result = [];
  arr.forEach(item => item[prop] && result.push(item[prop]));
  return result;
}
//Задание 2
function createCounter() {
  var count = 0;
  return () => ++count;
}

const counter1 = createCounter()
console.log(counter1()); // 1
console.log(counter1()); // 2


const counter2 = createCounter()

console.log(counter2()); // 1
console.log(counter2()); // 2
//Задание 3
function spinWords(text) {
  return text.split(' ')
    .map(
      word => (word.length >= 5)
      ? word.split('').reverse().join('')
      : word
    ).join(' ');
}

const result1 = spinWords('Привет от Legacy')
console.log(result1) // тевирП от ycageL

const result2 = spinWords('This is a test')
console.log(result2) // This is a test
//Задание 4
function getSumIndexes(nums, target) {
  for (let i = 0; i < nums.length; i++)
      for (let j = i; j < nums.length; j++)
          if (nums[i] + nums[j] === target)
              return[i, j];

  return [];
}

var nums = [2,7,11,15];
var target = 9;

console.log(getSumIndexes(nums, target));
//Задание 5
const strs1 = ['цветок','поток','хлопок'];
const strs2 = ['ёлка', 'полка', 'иголка'];
const strs3 = ['собака', 'мышеловка', 'сова']

function getPrefix(arr) {
  var prefix = arr.shift();
  arr.forEach(str => {
    for (let i = str.length - 1; i >= 0; i--)
      if(prefix[prefix.length - str.length + i] != str[i])
        prefix = prefix.slice(0, prefix.length - str.length + i) + ' ' + prefix.slice(prefix.length - str.length + i + 1);
  })
  prefix = prefix.replace(/\s+/g, ' ').split(' ').sort((a,b) => b.length - a.length).shift();
  prefix = (prefix.length > 1) ? prefix : '';
  return prefix;
}

console.log(getPrefix(strs1));
console.log(getPrefix(strs2));
console.log(getPrefix(strs3));
