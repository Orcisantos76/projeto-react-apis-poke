import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { TituloDaPagina, CardContainer } from "./pokemonListPageStyled"
function PokemonListPage() {
    return (
        <>
            <TituloDaPagina>Todos Pokémons</TituloDaPagina>
            <CardContainer>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
            </CardContainer>


            
        </>
    )
}

export default PokemonListPage