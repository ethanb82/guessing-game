var user = prompt('Who is this?');

var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');

/* we're going to add an array to store the values for the questions, their possible answers, and the responses given to the user*/
var questionData = [
  //this array is for question 1
  ['NO', 'N', (user + ' Is Ethan 900 lbs?'), 'True! He only weighs 850.', 'Nope, he\'s not that big.'],
  //this array is for question 2
  ['NO', 'N', (user + ' Is Ethan from Croatia?'), 'You\'re right, he\'s never even been there!', 'Wrong! But what a lovely place.'],
  //this array is for question 3
  ['YES', 'Y', (user + ', does Ethan LOVE tacos? Please respond Y or N. The answer is pretty obvious though.'), 'You better believe he loves tacos!', 'Who doesn\'t love tacos? A person I could never be friends with is who.'],
];
console.log(questionData);

function userName() {
  //alert('Hello, ' + user );
  res1.textContent = 'Hello, ' + user + '.';
  console.log('The user\'s name is ' + user);
}

userName();

var counter = 0;

//THIS IS A QUESTION ABOUT HOW MUCH ETHAN WEIGHS (QUESTION 1, ARRAY 0)
function qOne() {
  var answer1 = prompt(questionData[0][2]);
  console.log('the user answered question1: ' + answer1);
  if(answer1.toUpperCase() === questionData[0][0] || answer1.toUpperCase() === questionData[0][1]) {
  //alert('True! He only weighs 850.');
  res2.innerHTML = questionData[0][3];
  res2.className = 'right';
  console.log(res2);
  counter ++
  } else {
  //alert('Nope, he\'s not that big');
  res2.innerHTML = questionData[0][4];
  res2.className = 'wrong';
  console.log(res2);
  }
}

qOne();

//THIS IS A QUESTION ABOUT WHERE ETHAN IS FROM (QUESTION 2, ARRAY 1)
function qTwo() {
  var answer2 = prompt(questionData[1][2]);
  console.log('the user answered question2: ' + answer2);
  if(answer2.toUpperCase() === questionData[1][0] || answer2.toUpperCase() === questionData[1][1]) {
  //alert('You\'re right, he\'s never even been there!');
  res3.textContent = questionData[1][3];
  res3.className = 'right';
  counter ++
  } else {
  //alert('Wrong! But what a lovely place.');
  res3.textContent = questionData[1][4];
  res3.className = 'wrong';
  }
}

qTwo();

//THIS IS A QUESTION ABOUT WHETHER ETHAN LOVES TACOS (QUESTION 3, ARRAY 2)
function qThree() {
  var answer3 = prompt(questionData[2][2]);
  console.log('the user answered question3:' + answer3);
  if(answer3.toUpperCase() === questionData[2][0] || answer3.toUpperCase() === questionData[2][1]) {
  //alert('You better believe he loves tacos!');
  res4.textContent = questionData[2][3];
  res4.className = 'right';
  counter ++
  } else {
  //alert('Who doesn\'t love tacos? A person I could never be friends with is who.');
  res4.textContent = questionData[2][4];
  res4.className = 'wrong';
  }
}

qThree();

//THIS IS A QUESTION ABOUT HOW LONG ETHAN HAS LIVED IN SEATTLE (QUESTION 4)
function qFour() {
  var answer4 = prompt(user + ', How many years has Ethan lived in Seattle?');
  console.log('the user answered question4:' + answer4);
  if(answer4 === "12") {
    console.log('My argument is logical');
    res5.textContent = 'That\'s right!';
    res5.className = 'right';
  } else {
    res5.textContent = 'That is incorrect!';
    res5.className = 'wrong';
  }
}
//   while(answer4 != 12) {
//   //alert('That is incorrect!');
//   res5.textContent = 'That is incorrect!';
//   } counter++
//   //alert('thats right');
//   res5.textContent = 'That\'s right!';
//   //alert('You got ' + counter + ' answers\'s correct');
//   res5.textContent = 'You got ' + counter + ' answers\'s correct';
// }

qFour();
