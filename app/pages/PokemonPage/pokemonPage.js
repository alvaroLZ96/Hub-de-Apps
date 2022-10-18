import { cleanPage } from "../../utils/cleanPage";

export const pokemon = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  let pokemonArray = [];
  const getPokemon = async () => {
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
      height: item.height,
      weight: item.weight,
      type: item.types[0].type.name,
      image: item.sprites.other.dream_world.front_default,
      image2: item.sprites.other.home.front_default,
      image3: item.sprites.other["official-artwork"].front_default,
    }));
    console.log(mappedPokemons);
  };
  getPokemon();
};
