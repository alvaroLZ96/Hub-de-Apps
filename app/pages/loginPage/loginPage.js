import "./styles.css";
import { menuPage } from "../menuPage/menuPage";
import { cleanPage } from "../../utils/cleanPage";

export const loginStorage = () => {
  const divLogin = document.createElement("div");
  divLogin.setAttribute("id", "divLogin");
  const app = document.querySelector("#app");
  app.appendChild(divLogin);
  divLogin.innerHTML = ` 

  <h1>Neoland Hub-Games</h1>
  <form>
  <label for= "inputName">Introduce tu nombre</label>
  <input type="text" id="inputName" required pattern="[A-Za-z]+" minlength="2" title="Introduce tu nombre. No está permitido el uso de números">
  <span class="error"></span>
  <button type="button" id="saveBtn">👍🏽</button>
  </form>`;

  const saveLocalName = () => {
    const input = document.querySelector("input");
    const errorText = document.querySelector(".error");
    console.log("validity", input.validity);
    if (!input.validity.valid) {
      if (input.validity.tooShort) {
        errorText.textContent =
          "Tu nombre debería contener al menos 2 caracteres";
      } else if (input.validity.valueMissing) {
        errorText.textContent = "Debes introducir tu nombre";
      } else {
        errorText.textContent = "Tu nombre solo debe contener letras";
      }
    } else {
      errorText.textContent = "";
      localStorage.setItem("name", input.value);

      menuPage();
    }
  };
  saveBtn.addEventListener("click", () => saveLocalName());
};
