import "./style.css";
import { quizQuestions } from "../../data/quiz-json";
import { cleanPage } from "../../utils/cleanPage";
import { goToMenu } from "../../utils/menulauncher";

let score = 0;
let pos = 0;

export const initQuiz = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  goToMenu();
  const quizNav = document.createElement("div");
  app.appendChild(quizNav);
  quizNav.classList.add("quizNav");
  quizNav.innerHTML += `
    <h1>Welcome to Quiz</h1>
    <button id="startBtn">Start</button>
`;
  const startBtn = document.querySelector("#startBtn");
  startBtn.addEventListener("click", () =>
    printCheckQuestion(quizQuestions, pos)
  );
};

const checkAnswer = (object, clave) => {
  if (pos == quizQuestions.length - 1) {
    const endDiv = document.createElement("div");
    endDiv.classList.add("endDiv");
    let app = document.querySelector("#app");
    cleanPage(app);
    app.appendChild(endDiv);
    endDiv.innerHTML = `
    <p> ¡Terminaste! Tu puntuación ha sido ${score} de 10</p>
    <button id="retakeBtn">Volver a jugar</button>
    `;
    pos = 0;
    score = 0;
    const retakeBtn = document.querySelector("#retakeBtn");
    retakeBtn.addEventListener("click", () =>
      printCheckQuestion(quizQuestions, pos)
    );
  } else if (object[clave] == true) {
    score++;
    pos += 1;
    console.log("score" + score);
    printCheckQuestion(quizQuestions, pos);
  } else {
    pos += 1;
    console.log(score);
    printCheckQuestion(quizQuestions, pos);
  }
};

const printCheckQuestion = (list, value) => {
  const element = list[value];
  console.log(element);
  let questionScoreContainer = document.createElement("div");
  questionScoreContainer.classList.add("questionScoreContainer");
  let questionDiv = document.createElement("div");
  questionDiv.classList.add("questionDiv");
  let app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(questionScoreContainer);
  questionScoreContainer.appendChild(questionDiv);
  let scoreSpan = document.createElement("span");
  scoreSpan.innerText = `${score}/10`;
  questionDiv.insertAdjacentElement("afterend", scoreSpan);
  questionDiv.innerHTML = `
    <h2 id="questionSentence">${pos + 1}. ${element.question}</h2>`;
  for (const key in element.answers) {
    let answer = document.createElement("button");
    answer.id = "answer";
    answer.textContent = key;
    answer.addEventListener("click", (evento) =>
      checkAnswer(element.answers, evento.target.innerText)
    );
    questionDiv.appendChild(answer);
  }
};
