import { cleanPage } from "../../utils/cleanPage";
export const MenuPage = (name) => {
  const divLogin = document.createElement("div");
  divLogin.setAttribute("id", "divLogin");
  document.body.appendChild(divLogin);
  cleanPage(divLogin);
  divLogin.innerHTML = `<p>Hola ${name}</p> `;
};
