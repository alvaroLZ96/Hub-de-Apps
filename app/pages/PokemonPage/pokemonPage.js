import { cleanPage } from "../../utils/cleanPage";
import { callPokemonCard } from "../../components/pokeCard/pokeCard";
import "./style.css";
import { goToMenu } from "../../utils/menulauncher";

let mappedPokemons;

export const pokemon = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  const pokemonNav = document.createElement("div");
  app.appendChild(pokemonNav);
  pokemonNav.classList.add("pokemonNav");
  pokemonNav.innerHTML = `
  
    <h1 class="pokemon-title">Bienvenidx al Mundo Pokemon ${localStorage.name}!</h1>
    <img src="https://orig00.deviantart.net/aa74/f/2012/201/9/e/chibi_squirtle_by_o_melet-d580ex7.png" class="pokemon-img"></img>
  `;

  const pokemonNav2 = document.createElement("div");
  app.appendChild(pokemonNav2);
  pokemonNav2.classList.add("pokemonNav2");
  pokemonNav2.innerHTML = `
  
      <div class="searchDiv"> 
            <input type="text" class="searchbar"></input>
            <input type="submit" value="🔎" class= "searchBtn"></input>
      </div>
      <div class="btns-big-box">
        <div class="btns-box">
              <button class="btns filter1" ><span class="text">Grandes</span></button>
            
        </div>
        <div class="btns-box">
              
              <button class="btns filter2" ><span class="text">Pequeños</span></button>
        </div>
      </div>
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
    console.log(mappedPokemons);
  };

  const printPokemon = (list) => {
    for (const pokemon of list) {
      const pokeDiv = document.createElement("div");
      pokeDiv.classList.add(`${pokemon.type}`);
      pokeCards.appendChild(pokeDiv);
      pokeDiv.innerHTML += `
      <h2>${pokemon.name}</h2>
      <img src=${pokemon.imageArtwork} alt=${pokemon.name}/>
      
      `;
      pokeDiv.addEventListener("click", () => callPokemonCard(pokemon));
    }
    goToMenu();
  };

  const bigFunction = (mappedPokemons) => {
    cleanPage(pokeCards);
    const averagePokemons = (mappedPokemons) => {
      console.log("mapped:", mappedPokemons);
      let suma = 0;
      for (let element of mappedPokemons) {
        suma += element.height;
      }
      return suma / mappedPokemons.length;
    };
    let average = averagePokemons(mappedPokemons);
    console.log(average);
    const mappedBigAverage = mappedPokemons.filter(
      (pokemon) => pokemon.height > average
    );
    printPokemon(mappedBigAverage);
  };


  const smallFunction = (mappedPokemons) => {
    cleanPage(pokeCards);
    const averagePokemons = (mappedPokemons) => {
      console.log("mapped:", mappedPokemons);
      let suma = 0;
      for (let element of mappedPokemons) {
        suma += element.height;
      }
      return suma / mappedPokemons.length;
    };
    let average = averagePokemons(mappedPokemons);
    console.log(average);
    const mappedSmallAverage = mappedPokemons.filter(
      (pokemon) => pokemon.height < average
    );
    console.log(mappedSmallAverage);
    printPokemon(mappedSmallAverage);
  };

  
  const searchFunction = (list, word) => {
    cleanPage(pokeCards);
    const filteredPokemons = list.filter(
      (item) =>
        item.name.toLowerCase().includes(word.toLowerCase()) || item.id == word
    );
    printPokemon(filteredPokemons);
  };


  const inputSearch = document.querySelector(".searchBtn");
  inputSearch.addEventListener("click", () => {
    const searchInput = document.querySelector(".searchbar");
    console.log(mappedPokemons);
    searchFunction(mappedPokemons, searchInput.value);
  });
  const filter1 = document.querySelector(".filter1");
  filter1.addEventListener("click", () => bigFunction(mappedPokemons));

  const filter2 = document.querySelector(".filter2");
  filter2.addEventListener("click", () => smallFunction(mappedPokemons));

  getPokemon();
};
