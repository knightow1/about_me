'use strict';

alert('Let\'s play a guessing game to see how well you know Nick.');
alert('All questions require yes/no or y/n answers.');

while (true) {
  var music = prompt('First question: Does Nick play Jazz?').toLowerCase();

  if (music === 'n' || music === 'no') {
    alert('You got it! Great job.');
    break;
  } else if (music === 'y' || music === 'yes') {
    alert('Too bad. That\'s wrong');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}
while (true){
  var food = prompt('Second question: Is Nick\'s favorite food tacos?').toLowerCase();

  if(food === 'n' || food === 'no') {
    alert('Another right answer. You\'re on a roll.');
    break;
  } else if (food === 'y' || food === 'yes') {
    alert('You thought you knew him, I guess not.');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}
while (true) {
  var travel = prompt('Third question: Has Nick been to Burma?').toLowerCase();

  if (travel === 'n' || travel === 'no') {
    alert('Wow you guys must be good friends.');
    break;
  } else if (travel === 'y' || travel === 'yes') {
    alert('Better luck next time.');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}
while (true) {
  var color = prompt('Fourth question: Is Nick\'s favorite color green?').toLowerCase();

  if (color === 'y' || color === 'yes') {
    alert('Good job. Almost done.');
    break;
  } else if (color === 'n' || color === 'yes') {
    alert('You must just be guessing...');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}
while (true) {
  var games = prompt('Last question: Does Nick like to play video games?').toLowerCase();

  if (games === 'y' || games === 'yes') {
    alert('Amazing. Thanks for playing the Nick guessing game.');
    break;
  } else if (games === 'n' || games === 'yes') {
    alert('Come on. Do you even know him? Thanks for playing anyway.');
    break;
  } else {
    alert('That is not a valid answer.');
  }
}
