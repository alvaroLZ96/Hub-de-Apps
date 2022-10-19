import { cleanPage } from "../../utils/cleanPage";
import "./style.css";

export const pokemon = () => {
  const app = document.querySelector("#app");
  cleanPage(app);

  const getPokemon = async () => {
    let pokemonArray = [];
    for (let i = 1; i < 151; i++) {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const dataJSON = await data.json();
        pokemonArray.push(dataJSON);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    transformData(pokemonArray);
  };

  const transformData = (list) => {
    const mappedPokemons = list.map((item) => ({
      id: item.id,
      name: item.name,
      expererience: item.base_experience,
      height: item.height, //filtro por altura
      weight: item.weight,
      type: item.types[0].type.name,
      image: item.sprites.other.dream_world.front_default,
      image2: item.sprites.other.home.front_default,
      imageArtwork: item.sprites.other["official-artwork"].front_default,
    }));
    printPokemon(mappedPokemons);
  };

  const printPokemon = (list) => {
    const app = document.querySelector("#app");
    cleanPage(app);

    const pokemonNav = document.createElement("div");
    app.appendChild(pokemonNav);
    pokemonNav.classList.add("pokemonNav");
    pokemonNav.innerHTML = `
      <h1 class="pokemon-title">Bienvenido al Mundo Pokemon ${localStorage.name}!</h1>
      <img src="https://orig00.deviantart.net/aa74/f/2012/201/9/e/chibi_squirtle_by_o_melet-d580ex7.png" class="pokemon-img"></img>
      <input type="text" class="searchbar"></input>
      <button>filtro 1</button>
      <button>filtro 2</button>
    `;
    const pokeCards = document.createElement("div");
    pokeCards.classList.add("pokemons");
    app.appendChild(pokeCards);
    for (const pokemon of list) {
      const pokeDiv = document.createElement("div");
      pokeCards.appendChild(pokeDiv);
      pokeDiv.innerHTML += `
    <h2>${pokemon.name}</h2>
    <img src=${pokemon.imageArtwork} alt=${pokemon.name}/>
    <h3>Experiencia base: ${pokemon.expererience}</h3>
    `;
    }
  };

  getPokemon();
};
