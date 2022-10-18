import "./style.css";
import { pokemon } from "../PokemonPage/pokemonPage";
import { cleanPage } from "../../utils/cleanPage";
export const menuPage = () => {
  /* const divLogin = document.createElement("div");
  divLogin.setAttribute("id", "divLogin");
  document.body.appendChild(divLogin);
  cleanPage(divLogin); */
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <p class="hola">Hola ${localStorage.name}!✋</p> 
  <div class="menu">
    <button class="pokeapi">PokeApi</button>
  </div>
  `;
  const pokeDiv = document.querySelector(".pokeapi");
  pokeDiv.addEventListener("click", () => pokemon());
};
