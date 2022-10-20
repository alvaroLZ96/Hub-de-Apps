import { cleanPage } from "../../utils/cleanPage";
import { callPokemonCard } from "../../components/pokeCard/pokeCard";
import "./style.css";

let mappedPokemons;

export const pokemon = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  const pokemonNav = document.createElement("div");
  app.appendChild(pokemonNav);
  pokemonNav.classList.add("pokemonNav");
  pokemonNav.innerHTML = `
    <h1 class="pokemon-title">Bienvenido al Mundo Pokemon ${localStorage.name}!</h1>
    <img src="https://orig00.deviantart.net/aa74/f/2012/201/9/e/chibi_squirtle_by_o_melet-d580ex7.png" class="pokemon-img"></img>
    <input type="text" class="searchbar"></input>
    <button class="filter1" >Grandes</button>
    <button class="filter2" >Pequeños</button>
  `;
  const pokeCards = document.createElement("div");
  pokeCards.classList.add("pokemons");
  app.appendChild(pokeCards);

  const getPokemon = async () => {
    let pokemonArray = [];
    for (let i = 1; i < 151; i++) {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const dataJSON = await data.json();
        pokemonArray.push(dataJSON);
      } catch (error) {
        console.log("Error:");
      }
    }
    transformData(pokemonArray);
  };

  const transformData = (list) => {
    mappedPokemons = list.map((item) => ({
      id: item.id,
      name: item.name,
      experience: item.base_experience,
      height: item.height / 10,
      weight: item.weight / 10,
      type: item.types[0].type.name,
      image: item.sprites.other.dream_world.front_default,
      image2: item.sprites.other.home.front_default,
      imageArtwork: item.sprites.other["official-artwork"].front_default,
    }));
    printPokemon(mappedPokemons, "");
    /* 
    const averagePokemons = (mappedPokemons) => {
      let suma = 0;
      for (let element of mappedPokemons) {
        suma += element.height;
      }
      return suma / mappedPokemons.length;
    };
    let average = averagePokemons(mappedPokemons);
    console.log(average);
 */
    /* const filter1 =document.querySelector(".filter1");
filter1.addEventListener("click", ()=>{ 
  if(item.height>average){
    const bigDiv =document.createElement("div");
    document.body.appendChild(bigDiv);
    cleanPage(app);
    bigDiv.innerHTML+=item;
  }
  
  
  }
*/
  };

  const printPokemon = (list, word) => {
    cleanPage(pokeCards);
    const filteredPokemons = list.filter(
      (item) =>
        item.name.toLowerCase().includes(word.toLowerCase()) || item.id == word
    );

    for (const pokemon of filteredPokemons) {
      const pokeDiv = document.createElement("div");
      pokeDiv.classList.add(`${pokemon.type}`);
      pokeCards.appendChild(pokeDiv);
      pokeDiv.innerHTML += `
      <h2>${pokemon.name}</h2>
      <img src=${pokemon.imageArtwork} alt=${pokemon.name}/>
      <h3>Experiencia base: ${pokemon.experience}</h3>
      `;
      pokeDiv.addEventListener("click", () => callPokemonCard(pokemon));
    }
  };
  const searchInput = document.querySelector(".searchbar");
  searchInput.addEventListener("input", (ev) =>
    printPokemon(mappedPokemons, ev.target.value)
  ); //cada vez que hago el input vuelvo a pintar los jugadores pero lo hace por el valor del input
  getPokemon();
};
