import "./style.css";
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
  <div class="pokeapi">PokeApi</div>
  </div>
  `;
};
