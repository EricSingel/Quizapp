let questions = [
  {
    question:
      "Chihuahuas sind die kleinste Hunderasse der Welt. Aber sie sind auch...?",
    answer1: "die lauteste Hunderasse der Welt",
    answer2: "eine der schnellsten Hunderassen der Welt",
    answer3: "eine der ältesten Hunderassen der Welt",
    answer4: "die aggressivte Hunderasse der Welt",
    right_answer: 3,
  },
  {
    question:
      "Bei welchen Vögeln wird die harte, schildförmige Spitze des Oberschnabels Nagel genannt?",
    answer1: "Pelikane",
    answer2: "Enten",
    answer3: "Gänse",
    answer4: "Flamingos",
    right_answer: 2,
  },
  {
    question: 'Unter "Arthropoden" versteht man...?',
    answer1: "Kopffüßer",
    answer2: "Gliederfüßer",
    answer3: "Würmer",
    answer4: "Krabbentiere",
    right_answer: 2,
  },
  {
    question: 'Zu welcher Tiergattung gehört die "Scardafella"?',
    answer1: "Pfauen",
    answer2: "Enten",
    answer3: "Hühnern",
    answer4: "Tauben",
    right_answer: 4,
  },
  {
    question: 'Zu welcher Vogelfamilie gehört der "Lachende Hans"?',
    answer1: "Kolibris",
    answer2: "Eisvögel",
    answer3: "Wellensittiche",
    answer4: "Raben",
    right_answer: 2,
  },
];

let currentQuestion = 0;

function init() {
  let howMuchQ = document.getElementById("howMuchQ");

  howMuchQ.innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  if (currentQuestion >= questions.length) {
  } else {
    document.getElementById("questionText").innerHTML = question.question;
    document.getElementById("nextButton").disabled = true;
    document.getElementById("currentQuestion").innerHTML = currentQuestion + 1;

    for (let i = 1; i <= 4; i++) {
      document.getElementById("answer" + i).innerHTML = question["answer" + i];
      document
        .getElementById("answer" + i)
        .classList.remove("bg-danger", "bg-success", "right-answer");
    }
  }
}

function answer(selection) {
  let right_answer = questions[currentQuestion].right_answer;
  if (selection == right_answer) {
    document.getElementById("answer" + selection).classList.add("right-answer");
    setTimeout(function () {
      document.getElementById("answer" + selection).classList.add("bg-success");
    }, 2000);
  } else {
    document.getElementById("answer" + selection).classList.add("right-answer");
    setTimeout(function () {
      document.getElementById("answer" + selection).classList.add("bg-danger");
      document
        .getElementById("answer" + right_answer)
        .classList.add("bg-success");
    }, 2000);
  }
  setTimeout(function () {
    document.getElementById("nextButton").disabled = false;
  }, 2000);
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}
