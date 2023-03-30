import "./style.css";
import { goToMenu } from "../../utils/menulauncher";
import { cleanPage } from "../../utils/cleanPage";

export const initHangman = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  goToMenu();
  const hangmanDiv = document.createElement("div");
  hangmanDiv.classList.add("hangmanDiv");
  app.appendChild(hangmanDiv);
  hangmanDiv.innerHTML = `
<div class="gameDiv">
        <h1>Bienvenidx al juego de El Ahorcado</h1>
        <h3>Elige una letra</h3>
        <div class="letterDiv"></div>
</div>
<div class="wordDiv"></div>
<h3> Vidas restantes:<span class="lives"></span></h3>
<div class="resetBtn"><button>Reinicia</button></div>
<div class="notifDiv hidden"></div>
    <h2>GAME OVER</h2>
    <h3 class="notif-content">¡GANASTE!</h3>
    <h4>Correcto <span class="notif-span"></span></h4>
    <button class="notif-btn">Juega de nuevo </button>
</div>
`;
  const letterDiv = document.querySelector(".letter-div");

  const resetButton = document.querySelector(".reset-btn");

  const liveSpan = document.querySelector(".lives");
  const wordDiv = document.querySelector(".wordDiv");
  const notifDiv = document.querySelector(".notifDiv");
  const notifContent = document.querySelector(".notif-content");
  const notifSpan = document.querySelector(".notif-span");
  const playAgain = document.querySelector(".notif-btn");

  const words = ["puma", "plato", "rata", "alfajor"];
  const getRandomWord = (list) => {
    return list[Math.floor(Math.random() * words.length)];
  };

  let selectWord;
  let letters;
  let lives;

  const initGame = (state) => {
    wordDiv.innerHTML = "";
    if (state === "start") {
      for (const letter of "abcdefghijklmnopqrstuvwxyz") {
        const html = `<button class="alphabet">${letter.toUpperCase()}</button> `;
        letterDiv.insertAdjacentHTML("beforeend", html);
      }
    } else if (state === "reset") {
      letters.forEach((btn) => {
        btn.classList.remove("disabled");
        notifDiv.classList.add("hidden");
      });
    }

    selectWord = getRandomWord(words);
    lives = 5;
    letters = document.querySelectorAll(".alphabet");
    liveSpan.textContent = lives;

    for (let i = 0; i < selectWord.length; i++) {
      const html = `<p class="word">_</p>`;
      wordDiv.insertAdjacentHTML("beforeend", html);
    }
  };

  initGame("start");
  const showNotif = (message) => {
    notifDiv.classList.remove("hidden");
    notifSpan.textContent = selectWord;
    notifContent.textContent = `HAS ${message}`;
  };

  const decreaseLife = () => {
    lives--;
    liveSpan.textContent = lives;
    if (lives === 0) {
      showNotif("PERDIDO");
    }
  };

  
  const getindexes = (letter) => {
    let indexes = [];
    [...selectWord].forEach((val, i) => {
      if (val === letter) {
        const index = i;
        indexes.push(index);
      }
    });
    return indexes;
  };

  const checkWord = () => {
    let val = true;
    for (let i = 0; i < wordDiv.children.length; i++) {
      if (wordDiv.children[i].textContent === "_") {
        val = false;
      }
    }
    return val;
  };

  const letterPress = () => {
    const letter = this.textContent.toLowerCase();

    if (selectWord.includes(letter)) {
      const indexes_list = getindexes(letter);
      indexes_list.forEach((val, i) => {
        wordDiv.children[val].textContent = this.textContent;
      });
      if (checkWord()) showNotif("GANADO");
    } else {
      decreaseLife();
    }
    this.classList.add("disabled");
  };
  letters.forEach((btn) => {
    btn.addEventListener("click", letterPress);
  });

  resetButton.addEventListener("click", () => init("reset"));

  playAgain.addEventListener("click", () => init("reset"));
};
