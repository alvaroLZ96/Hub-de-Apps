import "./style.css";
export const callPokemonCard = (pokemon) => {
  const divPrincipal = document.body.querySelector("#app");
  (divPrincipal.innerHTML = ""),
    (divPrincipal.innerHTML = `
            <div class="pokemonCardDiv">
                <h2>${pokemon.name}</h2>
                <h3>Experiencia base: ${pokemon.experience}</h3>
                <h3>Número Pokemon: ${pokemon.id}</h3>
                <h3>Altura: ${pokemon.height}m</h3>
                <h3>Peso: ${pokemon.weight}kg</h3>
                <img class="${pokemon.name}" src=${pokemon.image}>
            </div>`);
};
