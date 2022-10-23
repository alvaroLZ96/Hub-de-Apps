import { menuPage } from "../pages/menuPage/menuPage";

export const goToMenu = () => {
  const header = document.querySelector("header");
  if (document.querySelector("#menuBtn")) {
    header.lastChild.remove();
    const menuBtn = document.createElement("button");
    menuBtn.innerText = "MENÚ";
    header.appendChild(menuBtn);
    menuBtn.id = "menuBtn";
  } else {
    const menuBtn = document.createElement("button");
    menuBtn.innerText = "MENÚ";
    header.appendChild(menuBtn);
    menuBtn.id = "menuBtn";
  }
  menuBtn.addEventListener("click", () => menuPage());
};
