let systemColorFlashSequence = [];
let userColorClickSequence = [];

let btns = ['box-1', 'box-3', 'box-2', 'box-4']

let gameBeginning = false;
let level = 0;
let h3 = document.querySelector('h3');

document.addEventListener('keypress', () => {
  if (gameBeginning == false) {
    console.log('Game Started');
    gameBeginning = true;
    levelUp();
  }
});

function gameFlash(temp) {
  temp.classList.add('flash');
  setTimeout(() => {
    temp.classList.remove('flash');
    setTimeout(() => { // Second flash
      temp.classList.add('flash');
      setTimeout(() => {
        temp.classList.remove('flash');
      }, 180);
    }, 80); // Delay between flashes
  }, 180);
}

function userClickFlash(temp) {
  temp.classList.add('clickflash');
  setTimeout(() => {
    temp.classList.remove('clickflash');
    setTimeout(() => { // Second flash
      temp.classList.add('clickflash');
      setTimeout(() => {
        temp.classList.remove('clickflash');
      }, 180);
    }, 80); // Delay between flashes
  }, 180);
}


function levelUp() {
  userColorClickSequence = [];
  level++;
  h3.innerText = `level ${level}`;

  let randomIndex = Math.floor(Math.random() * 3);
  let randomColor = btns[randomIndex];
  let randomBtns = document.querySelector(`.${randomColor}`);
  systemColorFlashSequence.push(randomColor);
  // console.log(systemColorFlashSequence);
  gameFlash(randomBtns);

  // console.log(randomBtns);

}

// let highestScore = 0;
function checkEqualityOfArray(arrayIndex) {
  // console.log('lvl', level);
  // let arrayIndex = level - 1;
  if (userColorClickSequence[arrayIndex] === systemColorFlashSequence[arrayIndex]) {
    if (userColorClickSequence.length === systemColorFlashSequence.length) {
      setTimeout(levelUp, 1000);
    }
    // h3.innerText = 'Keep Going';
  } else {
    h3.innerHTML = `game over! your score is <i>${level}</i> you can re-start`;
    // highestScore = Math.max(highestScore, level);
    reset();
  }
}

// const highestScoreElement = document.querySelector('#highestscore');
// highestScoreElement.innerText = `Highest score ${level}`

function btnClick() {
  // console.log('Clicked');
  const btn = this;
  userClickFlash(btn);
  let boxClicked;

  boxClicked = btn.getAttribute('id');
  // console.log(boxClicked);
  userColorClickSequence.push(boxClicked);
  // console.log(userColorClickSequence);

  checkEqualityOfArray(userColorClickSequence.length - 1);
}

const allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
  btn.addEventListener('click', btnClick);
}

function reset() {
  gameBeginning = false;
  systemColorFlashSequence = [];
  userColorClickSequence = [];
  level = 0;
}



