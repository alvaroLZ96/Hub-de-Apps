import "./style.css";
import { randomColor } from "../../utils/theme-color";

export const changeTheme = () => {
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "🌈";
  themeBtn.id = "themeBtn";
  const header = document.querySelector("header");
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor);
};
