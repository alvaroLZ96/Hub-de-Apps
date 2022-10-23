import { pokemon } from "../pages/PokemonPage/pokemonPage";

export const reloadFunction = () => {
  const btnReload = document.querySelector(".reloadBtn");

  btnReload.addEventListener("click", () => pokemon());
};
