import React from 'react'
import { Container, CardBox, InfoBox, Box, BoxTipo, ImageTipo, Detalhes, PokemonImage,CapturarButton, IdPokemon, NamePokemon } from './pokemonCardStyle'
import pokebola from "../../assets/pokebola.svg"
import TipoBug from "../../assets/TipoBug.svg"
import TipoPoison from "../../assets/TipoPoison.svg"
import Pokemon from "../../assets/Beedrill.svg"


export default function PokemonCard() {
    return (
        <Container>
            <PokemonImage src={Pokemon} alt="" />
            <CardBox>
                <InfoBox>
                    <Box>
                        <IdPokemon>ID</IdPokemon>
                        <NamePokemon>Nome</NamePokemon>
                        <BoxTipo>
                            <ImageTipo src={TipoBug} alt="" />
                            <ImageTipo src={TipoPoison} alt="" />
                        </BoxTipo>
                        
                    </Box>
                    <Detalhes>Detalhes</Detalhes>
                    
                </InfoBox>
                <img src={pokebola} alt="" />
            </CardBox>
            
            <CapturarButton>Capturar</CapturarButton>
        </Container>
    )
}
