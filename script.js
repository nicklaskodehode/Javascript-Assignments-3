console.log("Opgave 1-----------------");
//Opgave 1:

let name = "Nicklas Nielsen";
console.log(name);

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(4, 8));

console.log("Opgave 2-----------------");
//Opgave 2

function calcAge(year) {
  let currentYear = 2024;
  let age = currentYear - year;
  console.log("I am " + age + " years old");
}
calcAge(1996);

console.log("Opgave 3-----------------");
//Opgave 3

function checkNum(num) {
  if (num === 0) {
    return "the number is 0";
  } else if (num % 2 === 0) {
    return "this is a positive number";
  } else {
    return "this is a negative number";
  }
}

console.log(checkNum(2645));

console.log("Opgave 4-----------------");
//Opgave 4

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("Opgave 4 Part 2-----------------");
//Opgave 4 Part 2
function sumOfPartall() {
  let evenNumbers = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumbers = evenNumbers + i;
    }
  }
  return evenNumbers;
}
console.log("sum = " + sumOfPartall());

console.log("Opgave 5-----------------");
//Opgave 5

function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  console.log(reversed);
}
reverseString("this is a string");

console.log("Opgave 5 Part 2-----------------");
//Opgave 5 Part 2
function changedChar(text) {
  if (text.length >= 7) {
    let charList = text.split("");
    let char1 = charList[2];
    let char2 = charList[4];
    let char3 = charList[6];
    console.log(text + " " + charList);
    console.log(char1, char2, char3); //Original text
    charList[2] = char2;
    charList[4] = char3;
    charList[6] = char1;
    console.log(charList.join("")); //Changed characters
  } else {
    console.log("Your text is too short");
  }
}
changedChar("positive");

console.log("Opgave 6-----------------");
//Opgave 6
function median() {
  let numberList = [55, 22, 77, 52, 74, 24, 26, 87, 54, 110];
  numberList.sort();
  console.log(numberList);
  let mid = Math.floor(numberList.length / 2);
  let midValue = numberList[mid];
  return midValue;
}
console.log(median());

console.log("Opgave 6 Part 2----------------- MANGLER"); // COME BACK TO THIS ONE
//Opgave 6 Part 2
function uniqueVal() {
  let list = [2,4,6,3,4,2,1,6,9];
  
}
uniqueVal();

console.log("Opgave 7-----------------");
//Opgave 7
function leapYear(year) {
  if (year % 4 === 0) {
    return "It IS a leap year!";
  } else {
    return "It's NOT a leap year!";
  }
}
console.log(leapYear(2025));

console.log("Opgave 7 Part 2-----------------");
//Opgave 7 Part 2
function specialChar(text) {
  for (let i = 0; i <= text.length; i++) {
    // if (text[i] === ">")
    // {
    //   console.log("Right >");
    // } else if (text[i] === "<")
    //   {
    //   console.log("Left <");
    // } else if (text[i] === "v")
    //   {
    //   console.log("Down v");
    // } else if (text[i] === "^")
    //   {
    //   console.log("Up ^");
    // }

    switch (text[i]) {
      case ">":
        console.log("Right");
        break;
      case "<":
        console.log("Left");
        break;
      case "v":
        console.log("Down");
        break;
      case "^":
        console.log("Up");
        break;
      default:
        break;
    }
  }
}
specialChar("><v^<^<>v");

console.log("Opgave 8----------------- MANGLER");
//Opgave 8

console.log("Opgave 9-----------------");
//Opgave 9
function getTimeFromBirthday(birthday) {
  let bdaySplit = birthday.split("/");
  let today = new Date();
  bdaySplit[1] = parseInt(bdaySplit[1]) - 1;

  let setBday = new Date().setFullYear(
    bdaySplit[2],
    bdaySplit[1],
    bdaySplit[0]
  );
  let birthdate = new Date(setBday);
  // console.log(birthdate);
  // console.log((today.getFullYear()-birthdate.getFullYear()));
  // console.log(today.getMonth()-birthdate.getMonth());
  // console.log(today.getDate()-birthdate.getDate());
  let getYear = today.getFullYear() - birthdate.getFullYear();
  let getMonth = today.getMonth() - birthdate.getMonth(); // month is -1 bc months is = or less than todays month and date is bigger than todays date
  let getDate = today.getDate() - birthdate.getDate(); // Date is -17 bc 30-13 = -17

  if (getDate < 0) {
    // check if date is more than 0
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); //get the last month
    getDate += lastMonth.getDate(); // add lastmonths date to calculated date (in the case -17 + last months date) to get current date
    getMonth -= 1; // then adjust for the extra month that was added
  }
  if (getMonth < 0) {
    // check if month is more than 0
    getMonth += 12; // add 12 months to adjust for the negative months
    getYear -= 1; // take away 1 year to counter the months added
  }

  console.log(
    getYear + " years " + getMonth + " months and " + getDate + " days old"
  );
}
getTimeFromBirthday("30/03/1996");
getTimeFromBirthday("14/11/1998");



console.log("Opgave 10-----------------");
//Opgave 10
function findVal(list, num) {
  return list.includes(num);
}
console.log(findVal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));



console.log("DEL 2 MIDDEL VANSKELIGE OPGAVER-----------------");
console.log("Opgave 1-----------------");
//Opgave 1
let numb1 = 0;
let numb2 = 1;
let numbSum;
function fibonacci(n) {
  for (let i = 1; i <= n; i++) {
    console.log(numb1);
    numbSum = numb1 + numb2;
    numb1 = numb2;
    numb2 = numbSum;
  }
}
fibonacci(15);



console.log("Opgave 2-----------------");
//Opgave 2
function palindromCheck(text) {
  text = text.split("");
  let isPalindrom = true;
  let i = 0;
  let j = text.length - 1;
  while (i <= j) {
    if (text[i] === text[j]) {
      i++;
      j--;
    } else {
      isPalindrom = false;
      break;
    }
  }
  if (isPalindrom === true) {
    console.log(text.join("") + " is a Palindrom");
  } else {
    console.log(text.join("") + " is NOT a Palindrom");
  }
}
palindromCheck("otto");
palindromCheck("bolob");
palindromCheck("pultup");



console.log("Opgave 3-----------------");
//Opgave 3

let matrise = [
  [1, 3, 5],
  [2, 4, 6],
  [7, 9, 11]
]
function matriseSum(matrise) {
  let sum = 0;
  for (let array of matrise) {
    for (let value of array) {
      sum = sum+value;
    }
  }
  console.log("the sum is "+sum);
}
matriseSum(matrise);


console.log("Opgave 4-----------------");
//Opgave 4
let listOfNumbers = [4, 8, 5, 99, 53, 1, 34, 63, 3, 54, 21, 12, 9];
console.log(listOfNumbers);
for (let i = 0; i <= listOfNumbers.length; i++) {
  for (let j = i + 1; j <= listOfNumbers.length + 1; j++) {
    if (typeof listOfNumbers[j] !== "undefined") {
      if (listOfNumbers[i] > listOfNumbers[j]) {
        let tempNumb;
        tempNumb = listOfNumbers[i];
        listOfNumbers[i] = listOfNumbers[j];
        listOfNumbers[j] = tempNumb;
      }
    }
  }
}
console.log(listOfNumbers);


console.log("Opgave 5-----------------");
//Opgave 5
  let people = [
    { age: 17, country: "Sweden"},
    { age: 41, country: "Norway"},
    { age: 25, country: "Denmark"},
    { age: 31, country: "Germany"}
  ]

  function filterObject(people) {
    console.log(people);   
    let filteredList = people.filter(people => people.age >= 30);
    console.log(filteredList);
  }
  filterObject(people);


console.log("Opgave 6-----------------");
//Opgave 6
function countCharacters(text) {
  // Gotta refactor so it doesnt run through the loop if it has counted a letter already
  // could be made by adding the already counted letter into a list and then check the list 
  // if it includes the letter and then skip it if its already in the list
  text = text.split("");
  console.log(text);
  for (let i = 0; i <= text.length; i++) {
    if (text[i] !== " ") {
      if (text[i] !== undefined) {
        let counter = 0;
        for (let j = 0; j <= text.length; j++) {
          if (text[i] === text[j]) {
            {
              counter++;
            }
          }
        }
        console.log(text[i] + " accoured " + counter + " times");
      }
    }
  }
}
countCharacters("this is a nice text");



console.log("Opgave 7-----------------");
//Opgave 7

function groupArray(list) {
  console.log(list);
  for (let i = 0; i <= list.length; i++) {
      if (list.includes(list[i])) {
        list
        console.log(list);
      }
  }
}

groupArray([1,2,2,3,3,3]);

console.log("Opgave 8-----------------");
//Opgave 8

function countNumbersInString(text) {
    let numbers = text.match(/\d+/g);
    // \d matches numbers. d = digits and + is for 2+ digits (9>)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + parseInt(numbers[i]);
    }
    console.log(sum);
}
countNumbersInString("this is 1, 3 and 5 but also 9, 10 and 2");

console.log("Opgave 9-----------------");
//Opgave 9

function celciusToFAndK(c){
  console.log("Celcius: ");
  let farenheit = (c*9/5) + 32;
  console.log(c+"C is "+farenheit+"F");
  let kelvin = c+273.15;
  console.log(c+"C is "+kelvin+"K");
}

function farenheitToCAndK(f){
  console.log("Farhenheit: ");
  let celcius = (f-32)*5/9;
  console.log(f+"F is "+celcius+"C");
  let kelvin = (5/9*(f-32)) + 273.15;
  console.log(f+"F is "+kelvin+"K");
}

function kelvinToCandK(k){
  console.log("Kelvin: ");
  let farenheit = ((k-273.15)*9/5)+32;
  console.log(k+"K is "+farenheit+"F");
  let celcius = k - 273.15;
  console.log(k+"K is "+celcius+"C");
}
celciusToFAndK(20);
farenheitToCAndK(77);
kelvinToCandK(290);

console.log("DEL 3 VANSKELIGE OPGAVER-----------------");
console.log("Opgave 1-----------------");
//Opgave 1

console.log("Opgave 2-----------------");
//Opgave 2

function balancedParenteses(text) {
  text = text.split("");
  let isBalanced = true;
  let i = 0;
  let j = text.length - 1;
  while (i <= j) {
    if (text[i] === "(" && text[j] === ")") {
      i++;
      j--;
    } else if(text[i] === "{" && text[j] === "}") {
      i++;
      j--;
    }
      else if(text[i] === "[" && text[j] === "]") {
        i++;
        j--;
      }
     else {
      isBalanced = false;
      break;
    }
  }
  if (isBalanced === true) {
    console.log(text.join("") + " is balanced");
  } else {
    console.log(text.join("") + " is NOT balanced");
  }
}

balancedParenteses("({()})");

console.log(
  "DEL 4 VALGFRI OPGAVE MED SVÆRT HØY VANSKELIGHETSGRAD-----------------"
);
console.log("Opgave 1-----------------");
//Opgave 1
