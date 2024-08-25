const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "High Text Markup Language", correct: false },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      answers: [
        { text: "title", correct: true },
        { text: "head", correct: false },
        { text: "meta", correct: false },
        { text: "link", correct: false },
      ],
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: [
        { text: "break", correct: false },
        { text: "br", correct: true },
        { text: "lb", correct: false },
        { text: "linebreak", correct: false },
      ],
    },
    {
      question: "Which CSS property controls the text size?",
      answers: [
        { text: "font-size", correct: true },
        { text: "text-size", correct: false },
        { text: "font-style", correct: false },
        { text: "text-style", correct: false },
      ],
    },
    {
      question: "What is the default value of the position property in CSS?",
      answers: [
        { text: "static", correct: true },
        { text: "relative", correct: false },
        { text: "absolute", correct: false },
        { text: "fixed", correct: false },
      ],
    },
    {
      question: "Which JavaScript keyword is used to declare a variable?",
      answers: [
        { text: "var", correct: true },
        { text: "let", correct: true },
        { text: "const", correct: true },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        { text: "style", correct: true },
        { text: "class", correct: false },
        { text: "font", correct: false },
        { text: "styles", correct: false },
      ],
    },
    {
      question: "Which of the following is a valid JavaScript array declaration?",
      answers: [
        { text: "var arr = [];", correct: true },
        { text: "var arr = {};", correct: false },
        { text: "var arr = (1, 2, 3);", correct: false },
        { text: "var arr = <1, 2, 3>;", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      answers: [
        { text: "script src='script.js'", correct: true },
        { text: "script href='script.js'", correct: false },
        { text: "script name='script.js'", correct: false },
        { text: "script file='script.js'", correct: false },
      ],
    },
    {
      question: "Which CSS property is used to change the background color?",
      answers: [
        { text: "color", correct: false },
        { text: "bgcolor", correct: false },
        { text: "background-color", correct: true },
        { text: "background", correct: true },
      ],
    },
    {
      question: "How do you create a function in JavaScript?",
      answers: [
        { text: "function myFunction()", correct: true },
        { text: "function:myFunction()", correct: false },
        { text: "create myFunction()", correct: false },
        { text: "myFunction() = function", correct: false },
      ],
    },
    {
      question: "Which of the following is a JavaScript data type?",
      answers: [
        { text: "String", correct: true },
        { text: "Number", correct: true },
        { text: "Boolean", correct: true },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      answers: [
        { text: "The current object", correct: true },
        { text: "The previous object", correct: false },
        { text: "The global object", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "How do you add a comment in JavaScript?",
      answers: [
        { text: "// This is a comment", correct: true },
        { text: "!-- This is a comment --", correct: false },
        { text: "' This is a comment", correct: false },
        { text: "# This is a comment", correct: false },
      ],
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      answers: [
        { text: "ul", correct: true },
        { text: "ol", correct: false },
        { text: "li", correct: false },
        { text: "list", correct: false },
      ],
    },
    {
      question: "What is the purpose of the z-index property in CSS?",
      answers: [
        { text: "Control the stacking order of elements", correct: true },
        { text: "Set the opacity of an element", correct: false },
        { text: "Adjust the font size", correct: false },
        { text: "None of the above", correct: false },
      ],
    },
    {
      question: "How can you make a numbered list in HTML?",
      answers: [
        { text: "ol", correct: true },
        { text: "ul", correct: false },
        { text: "list", correct: false },
        { text: "li", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestionIndex + 1 + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtonsElement.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  