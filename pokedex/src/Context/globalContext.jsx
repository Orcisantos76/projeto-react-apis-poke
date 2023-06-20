import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = ({children})=>{
    const [pokedexList, setPokedexList]=useState([])
    const [pokemonOnHeader, setPokemonOnHeader] = useState({})

    const removePokemon =(id)=>{
        setPokedexList(pokedexList.filter((pokemonToRemove)=>pokemonToRemove.id !== id))
      }
    

    return(<GlobalContext.Provider 
        value={{pokedexList, setPokedexList, removePokemon, setPokemonOnHeader, pokemonOnHeader}}
        >{children}</GlobalContext.Provider>)

}
export default GlobalContextProvider