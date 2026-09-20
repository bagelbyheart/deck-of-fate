let result = null;
let previous = '';
let out_text = '';
let target = document.getElementsByClassName("card");

/*
Breakdown of flavor text (and colors):
RED
-4 = 1  # Done
-3 = 2  # Done
-2 = 4  # Done
BLUE
-1 = 8  # 4/8
0  = 16 # 4/16
+1 = 8  # 4/8
GREEN
+2 = 4  # Done
+3 = 2  # Done
+4 = 1  # Done
*/

let results = {
  '-4': {
    'color': 'lightcoral',
    'short': 'Awful',
    'text': [ "Sometimes everything comes crashing down"],
    'photo': []
  },
  '-3': {
    'color': 'lightcoral',
    'short': 'Terrible',
    'text': [
      "The important thing is to get back up",
      "Look, I have other skills"
    ],
    'photo': []
  },
  '-2': {
    'color': 'lightcoral',
    'short': "Bad",
    'text': [
      "Oof, that looks like it hurts",
      "You know what they say; try, try again",
      "Gotta break a few eggs to make an omlette",
      "Ugh, I just woke up"
    ],
    'photo': []
  },
  '-1': {
    'color': 'lightblue',
    'short': 'Poor',
    'text': [
      "Getting there",
      "So close",
      "We all stumble sometimes",
      "Eh, better luck next time",
    ],
    'photo': []
  },
  '0': {
    'color': 'lightblue',
    'short': "Mediocre",
    'text': [
      "There is a zen in the middle",
      "Skill is the only thing that matters",
      "Sometimes things are just what they are",
      "The rest is up to you"
    ],
    'photo': []
  },
  '1': {
    'color': 'lightblue',
    'short': 'Average',
    'text': [
      "One step after another; that's how you get someplace",
      "Brick by brick, day by day, we build the world",
      "Life is all about the little silver linings",
      "A little pebble still makes big ripples"
    ],
    'photo': []
  },
  '2': {
    'color': 'lightgreen',
    'short': 'Fair',
    'text': [
      "Practice makes perfect ya know",
      "Not everything requires a genius",
      "It ain't no thing",
      "I wake up like this"
    ],
    'photo': []
  },
  '3': {
    'color': 'lightgreen',
    'short': "Good",
    'text': [
      "I can stand on the head of a pin as well",
      "JACKPOT!"
    ],
    'photo': []
  },
  '4': {
    'color': 'lightgreen',
    'short': "Great",
    'text': [ "Throughout Heaven and Earth, I alone am the honored one"],
    'photo': []
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function randKey(len) {
  return Math.floor( Math.random() * len)
}

function fudgeRoll() {
  return Math.floor( Math.random() * 3) - 1
}

async function fullRoll() {
  let rolls = [fudgeRoll(),fudgeRoll(),fudgeRoll(),fudgeRoll()];
  if (result != null) {
    previous = result + "<br />" + previous;
    result = 0;
    target[0].style.opacity = '0';
    await delay(750);
  }
  for (let i = 0; i < rolls.length; i++) {
    let roll = rolls[i];
    result = result + roll;
  }
  document.getElementById("result").innerHTML = result;
  if (results[result]['text'].length > 0){
	  out_text = results[result]['text'][randKey(results[result]['text'].length)];
  } else {
	  out_text = results[result]['short'];
  }
  document.getElementById("flavor").innerHTML = out_text;
  document.getElementById("previous").innerHTML = previous;
  target[0].style.opacity = '1';
  target[0].style.background = results[result]['color'];
}
