import React, { useState } from "react";
import {
  Container,
  CardBox,
  InfoBox,
  Box,
  BoxTipo,
  ImageTipo,
  Detalhes,
  PokemonImage,
  CapturarButton,
  IdPokemon,
  NamePokemon,
} from "./pokemonCardStyle";
import pokebola from "../../assets/pokebola.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../Routes/cordinator";
import pokemonTypes from "../../pokemonTypes";
import { useEffect } from "react";
import { GlobalContext } from "../../Context/globalContext";
import { useContext } from "react";

export default function PokemonCard({ name, image, id, types}) {
  const navigate = useNavigate();
  const [pokedex, setPokedex] = useState([])
  const [inPokedex, setInPokedex] = useState(false)
  const {pokedexList, setPokedexList, removePokemon, setPokemonOnHeader} = useContext(GlobalContext)
  const location = useLocation()
  
  const pokemon = {
    id: id,
    name: name,
    image: image,
    types: types,
  }

  useEffect(()=>{
    
    setInPokedex(pokedexList.find((pokemon)=>pokemon.id===id))
  })
  
  // console.log(inPokedex, name);

  const addPokedex = ()=>{
    setPokedexList([...pokedexList, pokemon])    
  }




  return (
    <Container>
      <PokemonImage src={image} alt="" />
      <CardBox types={types}>
        <InfoBox>
          <Box>
            <IdPokemon># {id}</IdPokemon>
            <NamePokemon>{name}</NamePokemon>
            <BoxTipo>
              {types.map((type) => (
                <ImageTipo
                  key={type.type.name}
                  src={pokemonTypes[type.type.name]}
                  alt={type.type.name}
                />
              ))}
            </BoxTipo>
          </Box>
          <Detalhes
            onClick={() => {
              setPokemonOnHeader(pokemon)
              goToDetail(navigate, id);
            }}
          >
            Detalhes
          </Detalhes>
        </InfoBox>
        <img src={pokebola} alt="" />
      </CardBox>
      {!inPokedex&&<CapturarButton onClick={addPokedex}>Capturar</CapturarButton>}
      {location.pathname === "/pokedex" && <CapturarButton onClick={()=>removePokemon(id)}>Excluir</CapturarButton>}
      
    </Container>
  );
}
