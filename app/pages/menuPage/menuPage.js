import "./style.css";
import { pokemon } from "../PokemonPage/pokemonPage";
import { cleanPage } from "../../utils/cleanPage";
import { initQuiz } from "../quiz/quiz";
import { initHangman } from "../hangman/hangman";
export const menuPage = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <p class="hola">Hola ${localStorage.name}!✋</p> 
  <div class="menu">
    <button class="pokeapi">PokeApi</button>
    <button class="quiz">Quiz</button>
    
  </div>
  `;
  const pokeDiv = document.querySelector(".pokeapi");
  pokeDiv.addEventListener("click", () => pokemon());

  const quizBtn = document.querySelector(".quiz");
  quizBtn.addEventListener("click", () => initQuiz());

  /*   
  <button class="hangman">Hangman</button>
  
  const hangman = document.querySelector(".hangman");
  hangman.addEventListener("click", () => initHangman()); */

  const header = document.querySelector("header");
  if (document.querySelector("#menuBtn")) {
    header.lastChild.remove();
  }
};
