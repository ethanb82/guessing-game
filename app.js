var user = prompt('Who is this?');
  alert('Hello, ' + user );
  var counter =0;
  console.log('The user\'s name is'  + user);
var answer1 = prompt (user + ' Is Ethan 900 lbs? Please answer Y or N.')
console.log('the user answered question1: ' + answer1);
if(answer1.toUpperCase() === 'NO' || answer1 === 'no' || answer1 === 'n' || answer1 === 'N') {
  alert('True! He only weighs 850.');
  counter ++
}else {
  alert('Nope, he\'s not that big');
}
var answer2 = prompt (user + ' Is Ethan from Croatia? Please answer Y or N.')
console.log('the user answered question2: ' + answer2);
if(answer2.toUpperCase() === 'N' || answer2 === 'n' || answer2 === 'no' || answer2 === 'NO') {
  alert('You\'re right, he\'s never even been there!');
  counter ++
}else {
  alert('Wrong! But what a lovely place.');
}
var answer3 = prompt (user + ', does Ethan LOVE tacos? Please respond Y or N. The answer is pretty obvious though.');
console.log('the user answered question3:' + answer3);
if(answer3.toUpperCase() === 'Y' || answer3 === 'YES' || answer3 === 'y' || answer3 === 'yes') {
  alert('You better believe he loves tacos!');
  counter ++
}else {
  alert('Who doesn\'t love tacos? A person I could never be friends with is who.');
}
var answer4 = prompt(user + ', How many years has Ethan lived in Seattle?');
console.log('the user answered question4:' + answer4);
while(answer4 != 12) {
  alert('That is incorrect!');
  answer4 = prompt(user + ', How many years has Ethan lived in seattle?');
}counter++
alert('thats right');
alert('You got ' + counter + ' answers\'s correct');
