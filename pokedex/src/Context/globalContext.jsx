import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = ({children})=>{
    const [pokedexList, setPokedexList]=useState([])
    const [pokemonOnHeader, setPokemonOnHeader] = useState({})

    const removePokemon =(id)=>{
      // console.log("ola",id)
      const pokedex01=pokedexList.filter((pokemonToRemove)=>pokemonToRemove.id != id)
      console.log(pokedex01)
      
      setPokedexList(pokedex01)
      
      }
    console.log(pokedexList)

    return(<GlobalContext.Provider 
        value={{pokedexList, setPokedexList, removePokemon, setPokemonOnHeader, pokemonOnHeader}}
        >{children}</GlobalContext.Provider>)

}
export default GlobalContextProvider