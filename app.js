var user = prompt('Who is this?');

var res1 = document.getElementById('resultOne');
var res2 = document.getElementById('resultTwo');
var res3 = document.getElementById('resultThree');
var res4 = document.getElementById('resultFour');
var res5 = document.getElementById('resultFive');

function userName() {
  //alert('Hello, ' + user );
  res1.textContent = 'Hello, ' + user + '.';
  console.log('The user\'s name is ' + user);
}

userName();

var counter =0;

function qOne() {
  var answer1 = prompt (user + ' Is Ethan 900 lbs? Please answer Y or N.')
  console.log('the user answered question1: ' + answer1);
  if(answer1.toUpperCase() === 'NO' || answer1 === 'no' || answer1 === 'n' || answer1 === 'N') {
  //alert('True! He only weighs 850.');
  res2.textContent = 'True! He only weighs 850.';
  counter ++
  } else {
  //alert('Nope, he\'s not that big');
  res2.textContent = 'Nope, he\'s not that big.';
  }
}

qOne();

function qTwo() {
  var answer2 = prompt (user + ' Is Ethan from Croatia? Please answer Y or N.')
  console.log('the user answered question2: ' + answer2);
  if(answer2.toUpperCase() === 'N' || answer2 === 'n' || answer2 === 'no' || answer2 === 'NO') {
  //alert('You\'re right, he\'s never even been there!');
  res3.textContent = 'You\'re right, he\'s never even been there!';
  counter ++
  } else {
  //alert('Wrong! But what a lovely place.');
  res3.textContent = 'Wrong! But what a lovely place.';
  }
}

qTwo();

function qThree() {
  var answer3 = prompt (user + ', does Ethan LOVE tacos? Please respond Y or N. The answer is pretty obvious though.');
  console.log('the user answered question3:' + answer3);
  if(answer3.toUpperCase() === 'Y' || answer3 === 'YES' || answer3 === 'y' || answer3 === 'yes') {
  //alert('You better believe he loves tacos!');
  res4.textContent = 'You better believe he loves tacos!';
  counter ++
  } else {
  //alert('Who doesn\'t love tacos? A person I could never be friends with is who.');
  res4.textContent = 'Who doesn\'t love tacos? A person I could never be friends with is who.';
  }
}

qThree();

function qFour() {
  var answer4 = prompt (user + ', does Ethan LOVE bikes? Please respond Y or N.');
  console.log('the user answered question4:' + answer4);
  if(answer4.toUpperCase() === 'Y' || answer3 === 'YES' || answer3 === 'y' || answer3 === 'yes') {
  //alert('You better believe he loves tacos!');
  res5.textContent = 'You better believe he loves bikes!';
  counter ++
  } else {
  //alert('Who doesn\'t love tacos? A person I could never be friends with is who.');
  res5.textContent = 'Who doesn\'t love bikes? Future Transportation.';
  }
}

qFour();
//
// function qFive() {
//   var answer5 = prompt(user + ', Has Ethan lived in Seattle for 12 years?');
//   console.log('the user answered question4:' + answer4);
//   while(answer4 != 12) {
//   //alert('That is incorrect!');
//   res5.textContent = 'That is incorrect!';
//   } counter++
//   //alert('thats right');
//   res5.textContent = 'That\'s right!';
//   //alert('You got ' + counter + ' answers\'s correct');
//   //res5.textContent = 'You got ' + counter + ' answers\'s correct';
// }
