export const callPokemonCard = (pokemon) => {
  const divPrincipal = document.body.querySelector("#app");
  (divPrincipal.innerHTML = ""),
    (divPrincipal.innerHTML = `
            <div class="planetCardDiv">
                <h2>${pokemon.name}</h2>
                <h3>Experiencia base: ${pokemon.experience}</h3>
                <h3>Número Pokemon: ${pokemon.id}</h3>
                <h3>Altura: ${pokemon.height}metros</h3>
                <h3>Peso: ${pokemon.weight}kilos</h3>
                <img class="${pokemon.name}" src=${pokemon.image}>
            </div>`);
};
