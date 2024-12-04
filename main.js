// import { array } from "prop-types";

console.log("hello from me");
// premitive data type
/* Used to comment*/
// string ' "" `
// number 1235
// undefine  
// Boolean true or false
// null 
// Comment
//what is name ?

// non-premitive data types

// var firstName;
// console.log(firstName);
// firstName = "Bukola";
// console.log(firstName);
// var age = 25;
// console.log(age);
// var isStudent = true;
// console.log(isStudent);
// var name = "ade";

/* Naming variable, variable name can only start with letter or an underscore or dollar sign
It cannot contain special characters or space in between */

// var $years = 5;
// console.log($years);
/*  variable mutation and coarsion it means variable change
Coarsion is how javascript forces a variable from one type  to another*/

// var name = "john";
// var myAge = 32;
// var address;
// var city = undefined;
// city = "abuja";
// console.log(city);

/*  coarsion*/
// console.log("my name is" + name + " i am" + myAge + " years old.");

// console.log(`my name is ${name} i am ${myAge} years old`);

// var dob = 2022 - myAge;
// console.log(dob);

/* operators arithmetic, tenary, assignment, comparism*/

// var result = 3 - (4 / 2) * 2;
// console.log(result);

// var num1 = 44;
// var num2 = "44";
// var compare = num1 == num2;
// console.log(compare);
// var compare2 = num1 === num2;
// console.log(compare2);

// var std1, std2, std3;
// std1 = std2 = std3 = "james";
// console.log(std1, std2, std3);

/* increment */
// var newAge = myAge + 1;
// console.log(newAge);
// myAge = myAge + 1;

// myAge += 1;
// myAge++;
// console.log(myAge);

// var cynthiaMass = 70;
// var cynthiaHeight = 1.7;

// var emekaMass = 175;
// var emekaHeight = 1.6;

// var cynthiaBmi = cynthiaMass / (cynthiaHeight * cynthiaHeight);
// var emekaBmi = emekaMass / (emekaHeight * emekaHeight);

// var higherBmi = cynthiaBmi > emekaBmi;
// console.log("is cynthia bmi higher than emeka's?" + higherBmi);

/* typeof helps us determine the types of a variable */

// console.log(typeof cynthiaBmi, typeof higherBmi);

/*  conditional statements*/

// if (cynthiaBmi > emekaBmi) {
//   console.log("cynthia wins");
// } else {
//   console.log("emeka wins");
// }

// var studentAge = 34;
// if (studentAge >= 20) {
//   console.log("you are a legal student now");
// } else if (studentAge <= 18 && studentAge >= 13) {
//   /* age is between 13 and 18 */
//   console.log("you are a teenager");
// } else if (studentAge < 13 && studentAge >= 5) {
//   /* age is between 5 and 12 */
//   console.log(" hello young one");
// } else {
//   console.log("lovely baby");
// }

/* Switch case is used to test for equality */

// var gender = "male";
// switch (gender) {
//   case "male":
//     console.log("hello sir");

//     break;
//   case "female":
//     console.log("hello ma");

//     break;
//   default:
//     console.log("you are confuse");
//     break;
// }

/* tenary operators */

// var isMarried = true;
// console.log(" is james married" + (isMarried ? "yes" : "no"));

// /* Multinested tenary operator*/
// let login = "Employee";

// var message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greeetings Sir"
//     : "No login";

// 	console.log(message);
// /*OR */

// var age = 18;
// console.log(
//   "how old are you " + (age < 3)
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age"
// );

// var johnScores = (89, 120, 103);
// var johnAve = 89 + 120 + 103 / 3;
// var mikeScore = (116, 94, 103);
// var mikeAve = 116 + 94 + 103 / 3;
// var maryScore = (97, 134, 106);
// var maryAve = 97 + 134 + 106 / 3;

// if (johnAve > mikeAve && johnAve > maryAve) {
//   console.log("the winner is johns team an average score of" + johnAve);
// } else if (mikeAve > johnAve && mikeAve > maryAve) {
//   console.log("the winner is mike's team with an average score of" + mikeAve);
// } else if (maryAve > johnAve && maryAve > mikeAve) {
//   console.log("the winner is mary's team with an average score of" + maryAve);
// } else {
//   console.log("it is a draw");
// }

/* Function */
function addScores() {
  let mathScore = 90;
  let englishScore = 85;
  let physicsScore = 88;
  let biologyScore = 91;
  let totalScore = mathScore + englishScore + physicsScore + biologyScore;
  //   return `Sophie has a Jamb score of ${totalScore}`
  console.log(`Sophie has a Jamb score of ${totalScore}`);
}
// console.log(addScores())
addScores();

function person() {
  let firstName = "John";
  let lastName = "Mary";
  let fullName = `my name is ${firstName} ${lastName}`;
  return fullName;
}

console.log(person());

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}
console.log(addTwoNumbers(66, 99));

function aveScore(maths = 20, english = 33, physics = 66) {
  return maths + english + physics / 3;
}
console.log(aveScore(66, 88, 99));
console.log(aveScore(616, 188, 199));
console.log(aveScore(616, 848, 299));

const multiply = () => {
  let sum = 33 * 55;
  return sum;
};
console.log(multiply());

const multiplyAnother = (a, b) => {
  let sum = a * b;
  return sum;
};
console.log(multiply(6, 8));

const divide = (a, b) => a / b;
console.log(divide(7, 2));

function calculateAge(yearOfBirth = 1991) {
  // let currentYear = 2022;
  let currentYear = new Date().getFullYear(); // best way
  let age = currentYear - yearOfBirth;
  return age;
}

console.log("hello i'm " + calculateAge(2000) + "years old");
console.log("i am " + calculateAge(1995) + "years old");
console.log("Sophie is " + calculateAge(1956) + "years old");

function yearsUntilRetirement(dob, jobYear, name) {
  var myAge = calculateAge(dob);
  var noOfYears = calculateAge(jobYear);
  var ageOfRetirement = 65 - myAge;
  var workTillRequirement = 35 - noOfYears;
  if (ageOfRetirement > workTillRequirement) {
    console.log(
      "hello," +
        name +
        "you have" +
        workTillRequirement +
        "years before you retire"
    );
  } else if (workTillRequirement > ageOfRetirement) {
    console.log(
      " hello," +
        name +
        "you have" +
        workTillRequirement +
        "years before you retire"
    );
  } else {
    console.log(
      "hello," +
        name +
        "you have" +
        workTillRequirement +
        "years before you retire"
    );
  }
}

yearsUntilRetirement(1998, 2009, "james");
yearsUntilRetirement(1998, 2005, "sarah");
yearsUntilRetirement(1998, 2015, "david");
yearsUntilRetirement(1995, 2010, "tolu");
//array
let favouriteFoods = ["rice", "beans", "cassava", "kunu aya"];
let favouriteNumbers = [17, 18, 19, 20];
let fruits = ["mango", "orange"];
let fruit = Array();
fruit.push("mango");
fruit.push("guava");
fruit.push("orange");
fruit.push("apple");
console.log(fruit);
console.log(fruits);

let randomData = [
  "rice",
  "beans",
  "cassava",
  { name: "sophie", age: 17, isMarried: true },
  ["mango", "orange"],
  undefined,
  function greeting() {
    return "hello world";
  },
];
console.log(randomData[6]);
console.log(favouriteNumbers);
console.log(favouriteFoods);
var result = [90, 87, 66, 77, 88, 99, "john"];
console.log(result);
console.log(result.length);
console.log(result[5]);
var student = ["hosea", "john", "favour", "emma"];
console.log(student);
console.log(student[3]);
console.log(student.indexOf("hosea"));
student.pop(); /*  removes the last value*/
console.log(student);
student.shift(); /* removes the first value */
console.log(student);
student.push("linda"); /*  adds linda to be the last value*/
console.log(student);
student.unshift("anu"); /* adds anu to be the first value */
console.log(student);

/* Function practice */

let fuel = 99;
function launch_rocket() {
  function warning_msg() {
    console.warn("not enough fuel");
  }
  if (fuel >= 100) {
    console.log("we are goodd to go");
  } else {
    warning_msg();
  }
}
launch_rocket();

function tipCalculator(bill) {
  var percentage;

  if (bill < 5000) {
    percentage = 0.2;
  } else if (bill >= 5000 && bill < 30000) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bill = [12400, 4800, 26800];
var tips = [
  tipCalculator(bill[0]),
  tipCalculator(bill[1]),
  tipCalculator(bill[2]),
];
var finalValues = [bill[0] + tips[0] + bill[1] + tips[1] + bill[2] + tips[2]];
console.log(tips, finalValues);

/* CALL BACK FUNCTION */

function ask(question = "do you wish to proceed", yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("you agreed");
}
function showCancel() {
  alert("you cancelled the execution");
}

/* Anonymous function */

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}
ask(
  "do you agree ?",
  function () {
    alert("you agreed");
  },
  function () {
    alert("you have cancelled the execution");
  }
);

/* Arrow function */

let sum = (a, b) => a + b;
alert(sum(1, 2));

let double = (n) => n * 2;
alert(double(3));
/* objects are like property or entity */
let personData = {}
console.log(personData);
personData.name = 'Sophie'
personData.age = 99
personData.lastName = 'John'
console.log(personData);

var student = {
  firstName: "Esther",
  lastName: "Kola",
  age: 16,
  state: "new york",
  lga: "memphis",
  ca: 40,
  exam: 60,

  address: {
    city: "gwagwalada",
  },

  email: function (email) /* this is an anonymous function */
  {
    // return "hello@yahoo.com";
    return email
  },
  children: ["funmi", "joy", "david", "ayo"],
};

console.log(student.address.city); /* we wnat to console log city */
console.log(student.email('hello@lordvic.com')); /* we have to call email as a function */
console.log(student.children[3]);
console.log(student);

console.log(student.state);
console.log(student["firstName"]); /* this is another way to write it */

var key = "ca";
console.log(student["ca"]);

var worker = Object.create(null);
console.log(worker);
worker.job = "doctor";
worker.salary = 30000;
console.log(worker);


/*Object with function */

var house = {
  address: "gwags",
  /* monthlyRent = 1000*/
  annual: 0,
  calculateAnnualRent: function (monthlyRent) {
    /* var annual = this.monthlyRent * 12;
		return annual;
		house.annual = this.monthlyRent * 12
		*/
    this.annual = monthlyRent * 12;
    return house.annual;
  },
};
console.log(house.address);
console.log(house.calculateAnnualRent(400000));
console.log(house);


/* N ARRAY OF OBJECTS */

var developers = [
  {
    name: "victor",
    language: "javascript",
    address: "usa",
  },
  
  {
    name: "bidemi",
    language: "javascript",
    address: "gwags",
  },
  {
    name: "grace",
    language: "javascript",
    address: "lokoja",
  },
  {
    name: "frank",
    language: "javascript",
    address: "kuje",
  },
];

/* LOOP */
var students = ["john", "james", "fred", "dan", "success", "james", " john", "fred", "dan", "success",];
for (let index = 0;  index < students.length; index++) {
    console.log(students[index]);
}

for (var i = 1; i < students.length; i++) {
  if (students[i] === "dan") {
    break;
  }
  console.log(students[i]);
}

/*map */
students.splice(1, 3).map(function (student) {
  console.log(student);
});

// students.map(function (student) {
//   console.log(student);
// });
students.map(function(i){
 console.log(i);
})
students.map((student)=>{
console.log(student);
})
developers.map((developer) => {
  console.log(developer.name);
});
developers.map((developer) =>{
  console.log(`${developer.name} codes in ${developer.language} and lives in ${developer.address}`);
})


developers.map(function (developer) {
  console.log(
    `${developer.name} codes in ${developer.language} and lives in ${developer.address}`
  );
});

/* destructuring */
developers.map(function ({ name, language, address }) {
  console.log(`${name} codes in ${language} and lives in ${address}`);
});

developers.map(({name,language}) => {
  console.log(name + ' codes in ' + language);
})

// var {name, language, address} = developers;
// console.log(developers.name)

// function calculate() {
// 	event.preventDefault();
// 	principal = document.getElementById("p").value;
// 	noyears = document.getElementById("n").value;
// 	rate = document.getElementById("r").value;
// 	result = document.getElementById("result");

// principal.value='';
// noyears.value='';
// rate.value='';
/*  Using javascript to add style property*/

// 	result.style.border = "1px solid red"
// 	result.style.color = "red"
// 	result.style.backgroundColor = "papayawhip"
// 	result.style.padding = "50px"
// 	result.style.fontSize = "60px"
// 	result.innerHTML = "The interest is" + (principal * noyears * rate) / 100;
// }

// const result = document.getElementById('result');
// result.addEventListener('click', function handleSubmit (event) {
// 	event.preventDefault();
// 	const input = document.querySelectorAll('#p, #n, #r')

// 	inputs.forEach(input => {
// 		input.value = '';
// 	});

// });

function clearInputs() {
  Array.from(document.querySelectorAll(".input-element")).forEach(function (
    inputElement
  ) {
    inputElement.value = "";
  });
}

function calculate() {
  event.preventDefault();
  var principal = document.getElementById("p").value;
  var noyears = document.getElementById("n").value;
  var rate = document.getElementById("r").value;
  var value = (principal * noyears * rate) / 100;
  var resultDisplay = document.querySelector("#result");
  resultDisplay.textContent = `The interest is ${value}`;

  // var interestForm = document.querySelector("#interest-form")
  // interestForm.style.display = "none";
  resultDisplay.style.display = "block";
  clearInputs();

  setTimeout(() => {
    // interestForm.style.display = "block";
    resultDisplay.style.display = "none";
    // debugger
  }, 3000);
}

function greet() {
  alert("say hi");
}
greet();


