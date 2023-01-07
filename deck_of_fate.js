let result = null;
let previous = '';
let target = document.getElementsByClassName("card");

/*
Breakdown of flavor text:
-4 = 1
-3 = 2
-2 = 4
-1 = 8
0  = 16
+1 = 8
+2 = 4
+3 = 2
+4 = 1
*/

let results = {
  '-4': {
    'color': 'red',
    'short': 'Awful',
    'text': [],
    'photo': []
  },
  '-3': {
    'color': 'red',
    'short': 'Terrible',
    'text': [],
    'photo': []
  },
  '-2': {
    'color': 'red',
    'short': "Bad",
    'text': ['Um, well'],
    'photo': []
  },
  '-1': {
    'color': 'red',
    'short': 'Poor',
    'text': ["Getting there"],
    'photo': []
  },
  '0': {
    'color': 'red',
    'short': "Mediocre",
    'text': ["There is a zen in the middle"],
    'photo': []
  },
  '1': {
    'color': 'red',
    'short': 'Average',
    'text': [],
    'photo': []
  },
  '2': {
    'color': 'red',
    'short': 'Fair',
    'text': [],
    'photo': []
  },
  '3': {
    'color': 'red',
    'short': "Good",
    'text': [],
    'photo': []
  },
  '4': {
    'color': 'red',
    'short': "Great",
    'text': [],
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
  document.getElementById("flavor").innerHTML = results[result]['short'];
  document.getElementById("previous").innerHTML = previous;
  target[0].style.opacity = '1';
}
