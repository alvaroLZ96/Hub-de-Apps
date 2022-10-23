import "./style.css";
import { changeTheme } from "./components/nav/nav.js";
import { randomColor } from "./utils/theme-color";
import { loginStorage } from "./pages/loginPage/loginPage";
import { menuPage } from "./pages/menuPage/menuPage";
import { initQuiz } from "./pages/quiz/quiz";
changeTheme();
randomColor();
loginStorage();
