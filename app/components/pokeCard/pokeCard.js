import "./style.css";
export const callPokemonCard = (pokemon) => {
  const divPrincipal = document.body.querySelector("#app");
  (divPrincipal.innerHTML = ""),
    (divPrincipal.innerHTML = `
      <div class="pokeBox">
        <div class="pokemonCardDiv">
            <div class="box1">
              <img class="${pokemon.name} poke-img" src=${pokemon.image}>
            </div>
            <div class="box2">
              
                    <h2>${pokemon.name}</h2>
                    <h3>Experiencia base: ${pokemon.experience}<span>&#160;</span></h3>
                    <h3>Número Pokemon: ${pokemon.id}<span>&#160;</span></h3>
                    <h3>Altura: ${pokemon.height}m<span>&#160;</span></h3>
                    <h3>Peso: ${pokemon.weight}kg<span>&#160;</span></h3>
                    
            </div>
        </div>
      </div> `);
};
