'use script'


//JS
// QUESTIONS
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Jordan Sanders",
    },
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "React",
    },
    correctAnswer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "ESLint",
  },
  {
    question: "What is the capital of Spain?",
    answers: {
      a: "Berlin",
      b: "Buenos Aires",
      c: "Madrid",
      d: "San Juan",
    },
    correctAnswer: "Madrid",
  },
  {
    question: "When did The Avengers come out?",
    answers: {
      a: "May 2, 2008",
      b: "May 4, 2012",
      c: "May 3, 2013",
      d: "April 4, 2014",
    },
    correctAnswer: "May 4, 2012",
  },
  {
    question: "HTML stands for what?",
    answers: {
      a: "Hypertrophic Management Language",
      b: "Hyperberic Tertiary Logrithm",
      c: "Hypertext Markup Language",
      d: "Hyperresonant Marginal Logrithm",
    },
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "What is the name of the biggest part of the human brain?",
    answers: {
      a: "Cerebrum",
      b: "Thalamus",
      c: "Medulla",
      d: "Cerebellum",
    },
    correctAnswer: "Cerebrum",
  },
  {
    question: "Who developed and designed TypeScript?",
    answers: {
      a: "Microsoft",
      b: "Amazon",
      c: "Oracle",
      d: "Google",
    },
    correctAnswer: "Microsoft",
  },
  {
    question: "JavaScript file has an Extension of?",
    answers: {
      a: ".java",
      b: ".js",
      c: ".javascript",
      d: ".xml",
    },
    correctAnswer: ".js",
  },
  {
    question: "Which is a Backend Framework of JavaScript?",
    answers: {
      a: "React.js",
      b: "Node.js",
      c: "Vue.js",
      d: "Ember.js",
    },
    correctAnswer: "Node.js",
  },
  {
    question: "To wrap a block of text around an image we use CSS property?",
    answers: {
      a: "wrap",
      b: "push",
      c: "float",
      d: "align",
    },
    correctAnswer: "float",
  },
  {
    question: "Golf player Vijay Singh belongs to which country?",
    answers: {
      a: "USA",
      b: "Fiji",
      c: "India",
      d: "UK",
    },
    correctAnswer: "Fiji",
  },
  {
    question:
      "Each year World Red Cross and Red Crescent Day is celebrated on?",
    answers: {
      a: "May 8",
      b: "May 18",
      c: "June 8",
      d: "June 18",
    },
    correctAnswer: "May 8",
  },
  {
    question: "The ozone layer restricts?",
    answers: {
      a: "Visible light",
      b: "Infrared radiation",
      c: "Gamma rays",
      d: "Ultraviolet radiation",
    },
    correctAnswer: "Ultraviolet radiation",
  },
  {
    question: "Filaria is caused by?",
    answers: {
      a: "Bacteria",
      b: "Mosquito",
      c: "Protozoa",
      d: "Virus",
    },
    correctAnswer: "Mosquito",
  },
];

// VARIABLES
let qQuestion, qAnswer, qOption1, qOption2, qOption3, qOption4;
let qCount = 0;
let optionS = [];
let incorrect = Math.floor(Math.random() * 3) + 1;
console.log(incorrect);
// SELECTORS
const modal = document.querySelector(".modal");
const gameoverModal = document.querySelector('.gameoverModal');
const overlay = document.querySelector(".overlay");
const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const questionNo = document.querySelector(".question-no");
const optionBtns = document.querySelectorAll(".option");
// const phonefriend = document.getElementById('phonefriend');


let currentScore = document.querySelector(`#src${qCount}`);

// ASSIGN QUESTION AND ANSWERS
const assignQ = () => {
  qQuestion = myQuestions[qCount].question;
  qAnswer = myQuestions[qCount].correctAnswer;
  qOption1 = myQuestions[qCount].answers.a;
  qOption2 = myQuestions[qCount].answers.b;
  qOption3 = myQuestions[qCount].answers.c;
  qOption4 = myQuestions[qCount].answers.d;
  questionNo.textContent = qCount + 1;
  question.textContent = qQuestion;
  option1.textContent = qOption1;
  option2.textContent = qOption2;
  option3.textContent = qOption3;
  option4.textContent = qOption4;
  return qAnswer;
};

//SHOW CORRECT OPTION 
const showCorrectAnswer = () => {
  for (let c = 0; c < optionBtns.length; c++) {
    if (optionBtns[c].textContent === assignQ()) {
      console.log(optionBtns[c]);
      optionBtns[c].classList.add("correct");
    }
    optionBtns[c].classList.remove("hover");
  }
};

audience.addEventListener('click', function() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');

  setTimeout(() => {
    modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  }, 5000);
});



// CHOOSING ANSWER FROM OPTIONS
for (let i = 0; i < optionBtns.length; i++) {
  optionBtns[i].addEventListener("click", function () {
    selected = optionBtns[i].textContent;
    console.log(selected);
    console.log("Answer is", assignQ());
    // CORRECT ANSWER
    if (selected == assignQ()) {
      optionBtns[i].classList.add("correct");
      optionBtns[i].classList.toggle("hover"); //TURN GREEN
      // DELAY BEFORE NEXT QUESTION
      setTimeout(() => {
        optionBtns[i].classList.toggle("hover");
        nextQuestion();
        optionBtns[i].classList.remove("correct");
      }, 1000);
    }
    // WRONG ANSWER
    else {
      showCorrectAnswer();
      // PAINT CORRECT RED
      optionBtns[i].classList.remove("hover");
      optionBtns[i].classList.add("wrong");
      setTimeout(() => {
        gameoverModal.classList.toggle('hidden')
      }, 2000);
    }
  });
}

// INITIAL CONDITION NEW GAME
const init = () => {
  // phonefriend.play();
  // phonefriend.volume = 0.8;
  currentScore.classList.remove("active-score");
  qCount = 0;
  assignQ();
  currentScore = document.querySelector(`#src${qCount}`);
  currentScore.classList.add("active-score");
  for (let c = 0; c < optionBtns.length; c++) {
    // console.log(optionBtns[c]);
    optionBtns[c].classList.remove("correct");
    optionBtns[c].classList.remove("wrong");
    optionBtns[c].classList.add("hover");
  }
};

// DISPLAY NEXT QUESTIONS AND ANSWERS
const nextQuestion = () => {
  qCount += 1;
  currentScore.classList.remove("active-score");
  assignQ();
  for (let c = 0; c < optionBtns.length; c++) {
    // console.log(optionBtns[c]);
    optionBtns[c].classList.remove("correct");
    optionBtns[c].classList.remove("wrong");
    optionBtns[c].classList.add("hover");
  }
  console.log(currentScore.textContent);
  console.log(qCount);
  console.log(qQuestion);
  console.log(qAnswer);
  currentScore = document.querySelector(`#src${qCount}`);
  currentScore.classList.toggle("active-score");

  // End of Game start Again
  if (qCount === 14) {
    qCount = -1;
  }
};

// 50:50
const fiftyFifty = () => {
  let e = 1;
  incorrect = Math.floor(Math.random() * 3) + 1;
  for (let d = 0; d < optionBtns.length; d++) {
    if (optionBtns[d].textContent === assignQ()) {
      optionS[0] = optionBtns[d];
    } else {
      optionS[e] = optionBtns[d];
      e += 1;
    }
  }
  console.log(optionS[0]);
  console.log(optionS[incorrect]);
};

init();
document.querySelector("#half").addEventListener("click", fiftyFifty);
document.querySelector("#audience").addEventListener("click", init);
document.querySelector("#call").addEventListener("click", nextQuestion);
