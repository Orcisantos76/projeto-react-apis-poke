import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = ({children})=>{
    const [pokedexList, setPokedexList]=useState([])
    const [pokemonOnHeader, setPokemonOnHeader] = useState({})
    // const [pokemons, setPokemons]= useState([])
    const catchPokemon = (pokemon) =>{
      setPokedexList([...pokedexList, pokemon]);
      // const newPokemons = pokemons.filter((poke)=>pokemon.id !== poke.id);
    };

    const removePokemon =(id)=>{
      const pokedex01=pokedexList.filter((pokemonToRemove)=>pokemonToRemove.id !== id)
      console.log(pokedex01)      
      setPokedexList(pokedex01)      
      }

    console.log(pokedexList)

    return(<GlobalContext.Provider 
        value={{pokedexList,catchPokemon, setPokedexList, removePokemon, setPokemonOnHeader, pokemonOnHeader}}
        >{children}</GlobalContext.Provider>)

}
export default GlobalContextProvider