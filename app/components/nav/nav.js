import "./style.css";
import { randomColor } from "../../utils/theme-color";

export const changeTheme = () => {
  /* document.body.classList.toggle("dark");//meter en lugar de dark una funcion k me cambie el tema de manera random */
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "🌈";
  themeBtn.id = "themeBtn";
  const header = document.querySelector("header");
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor);
};
