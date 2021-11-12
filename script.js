let questions = [
  {
    question:
      'Chihuahuas sind die kleinste Hunderasse der Welt. Aber sie sind auch...?',
    answer1: 'die lauteste Hunderasse der Welt',
    answer2: 'eine der schnellsten Hunderassen der Welt',
    answer3: 'eine der ältesten Hunderassen der Welt',
    answer4: 'die aggressivte Hunderasse der Welt',
    right_answer: 3,
  },
  {
    question:
      'Bei welchen Vögeln wird die harte, schildförmige Spitze des Oberschnabels Nagel genannt?',
    answer1: 'Pelikane',
    answer2: 'Enten',
    answer3: 'Gänse',
    answer4: 'Flamingos',
    right_answer: 2,
  },
  {
    question: 'Unter "Arthropoden" versteht man...?',
    answer1: 'Kopffüßer',
    answer2: 'Gliederfüßer',
    answer3: 'Würmer',
    answer4: 'Krabbentiere',
    right_answer: 2,
  },
  {
    question: 'Zu welcher Tiergattung gehört die "Scardafella"?',
    answer1: 'Pfauen',
    answer2: 'Enten',
    answer3: 'Hühnern',
    answer4: 'Tauben',
    right_answer: 4,
  },
  {
    question: 'Zu welcher Vogelfamilie gehört der "Lachende Hans"?',
    answer1: 'Kolibris',
    answer2: 'Eisvögel',
    answer3: 'Wellensittiche',
    answer4: 'Raben',
    right_answer: 2,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;
let audio_success = new Audio('audio/victory.mp3');
let audio_wrong = new Audio('audio/wrong.mp3');

function init() {
  let howMuchQ = document.getElementById('howMuchQ');

  howMuchQ.innerHTML = questions.length;
  showQuestion();
}

function restart() {
  currentQuestion = 0;
  rightAnswer = 0;
  document.getElementById('winScreen').style.display = 'none';
  document.getElementById('questionScreen').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  if (gameOver()) {
    showEndScreen();
  } else {
    progressBarPercentage();
    updateToNextQuestion();
  }
}

function gameOver() {
  return currentQuestion >= questions.length;
}

function progressBarPercentage() {
  let percent = currentQuestion / questions.length;
  percent = percent * 100;
  document.getElementById('progressBar').style.height = percent + '%';
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('questionText').innerHTML = question.question;
  document.getElementById('currentQuestion').innerHTML = currentQuestion + 1;
  document.getElementById('nextButton').disabled = true;

  for (let i = 1; i <= 4; i++) {
    document.getElementById('answer' + i).innerHTML = question['answer' + i];
    document
      .getElementById('answer' + i)
      .classList.remove('bg-danger', 'bg-success', 'right-answer');
  }
}

function showEndScreen() {
  document.getElementById('questionScreen').style.display = 'none';
  document.getElementById('winScreen').style.display = 'block';
  document.getElementById('rightAnswers').innerHTML = rightAnswer;
  document.getElementById('howManyQ').innerHTML = questions.length;
  document.getElementById('progressBar').style.height = '100%';
}

function answer(selection) {
  let right_answer = questions[currentQuestion].right_answer;
  if (selection == right_answer) {
    rightAnswer(selection);
  } else {
    wrongAnswer(selection, right_answer);
  }
  setTimeout(function () {
    document.getElementById('nextButton').disabled = false;
  }, 2000);
}

function rightAnswer(selection) {
  document.getElementById('answer' + selection).classList.add('right-answer');
  setTimeout(function () {
    document.getElementById('answer' + selection).classList.add('bg-success');
    audio_success.play();
  }, 2000);
  rightAnswers++;
}

function wrongAnswer(selection, right_answer) {
  document.getElementById('answer' + selection).classList.add('right-answer');
  setTimeout(function () {
    document.getElementById('answer' + selection).classList.add('bg-danger');
    document
      .getElementById('answer' + right_answer)
      .classList.add('bg-success');
    audio_wrong.play();
  }, 2000);
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}
