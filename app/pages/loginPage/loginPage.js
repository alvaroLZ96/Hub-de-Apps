import "./styles.css";
import { MenuPage } from "../menuPage/menuPage";
export const loginStorage = () => {
  const divLogin = document.createElement("div");
  divLogin.setAttribute("id", "divLogin");
  document.body.appendChild(divLogin);
  divLogin.innerHTML = ` 

<h1>Neoland Hub-Games</h1>
<label for= "inputName">Introduce tu nombre</label>
<input type="text" id="inputName" required/>
<button id="saveBtn">👍🏽</button>`;

  const saveLocalName = (value) => {
    localStorage.setItem("name", value);
    if (typeof value !== "string") {
      // no está funcionaodo esta condición y si escribo números tbn me deja entrar
      //y tbn me preocupa no saber como conseguir quitar el mensaje de acceso denegado que cada vez que le doy al button se vuelve a pintar
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
