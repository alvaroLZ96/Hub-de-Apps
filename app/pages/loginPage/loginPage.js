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

/* const saveLocalName = (value) => {
    localStorage.setItem("name", value);
    /* if (typeof value !== "string") {
      // no está funcionaodo esta condición y si escribo números tbn me deja entrar
      //y tbn me preocupa no saber como conseguir quitar el mensaje de acceso denegado que cada vez que le doy al button se vuelve a pintar
      //arriba en el template he probado a meterlo tbn por expresión regular
      const notWelcome = document.createElement("p");
      notWelcome.innerText = "";
      notWelcome.innerText = `"${value}" is not a valid name`;
      divLogin.appendChild(notWelcome);
    } else if (value.length < 2) {
      const tooShort = document.createElement("p");
      tooShort.innerText = "";
      tooShort.innerText += `${value} is not a valid name`;
      divLogin.appendChild(tooShort);
    } else { 
      cleanPage(divLogin);
      MenuPage(value);
    }
  };
  const input = document.querySelector("input");
  saveBtn.addEventListener("click", () => saveLocalName(input.value));
};  

/* showBtn.addEventListener("click", () => showLocalName()); */

/* const saveData = () => {
  localStorage.nombre = document.getElementById("nombre").value;
};
saveData();



const recuperarDatos = () => {
  if (localStorage.nombre != undefined) {
    document.getElementById("datos").innerHTML =
      "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
  } else {
    document.getElementById("datos").innerHTML =
      "No has introducido tu nombre y tu password";
  }
};
recuperarDatos(); */

/* const loginBtn = document.querySelector('.login-btn')

  loginBtn.addEventListener('click', async (e) => {
    const input = document.querySelector('#user-input')
    if (input.value.length <= 0) {
      alert('Your name must have at least 1 character')
    } else {
      const usersList = await getData('users')
      const findUser = usersList.findIndex((user) => user.name === input.value)
      if (findUser < 0) {
        postData('users', input.value)
        localStorage.setItem('user', input.value)
        gamesPage()
      } else {
        gamesPage()
      }
    }
  })
 
 */
