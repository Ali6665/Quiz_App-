const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hyper Tool Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Trainer Marking Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    /* … up to 10 total questions … */
    {
      question: "How can you detect the client-side browser name in JavaScript?",
      options: [
        "navigator.appName",
        "navigator.browserName",
        "navigator.name",
        "browser.name"
      ],
      answer: "navigator.appName"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  let timer, timeLeft = 15;
  
  function startQuiz() {
    currentIndex = 0; score = 0;
    document.getElementById("score-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        disableOptions();
      }
    }, 1000);
  
    const q = questions[currentIndex];
    document.getElementById("question").textContent = q.question;
    const opts = document.querySelectorAll(".option");
    opts.forEach((cb, i) => {
      cb.checked = false;
      cb.disabled = false;
      cb.nextElementSibling.textContent = q.options[i];
    });
    document.getElementById("next-button").disabled = true;
  }
  
  function checkAnswer(cb) {
    clearInterval(timer);
    if (cb.nextElementSibling.textContent === questions[currentIndex].answer) {
      score++;
    }
    disableOptions();
  }
  
  function disableOptions() {
    document.querySelectorAll(".option").forEach(cb => cb.disabled = true);
    document.getElementById("next-button").disabled = false;
  }
  
  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("final-score").textContent =
      `Your Score: ${score} / ${questions.length}`;
  }
  