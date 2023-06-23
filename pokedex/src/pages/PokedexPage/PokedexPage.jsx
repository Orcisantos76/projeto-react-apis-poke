import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Context/globalContext";
import { Grid, Text } from "@chakra-ui/react";

function PokedexPage() {
  const { pokedexList } = useContext(GlobalContext);
  // console.log(pokedexList);
  return (
    <>
      <Text
        color="white"
        fontSize={{ lg: "2.5rem", base: "1.5rem" }}
        mt="3.75rem"
        ml="2.5rem"
        fontFamily="Poppins"
      >
        Meus Pokémons
      </Text>
      <Grid
        templateColumns={{
          "2xl": "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
          base: "1fr",
        }}
        justifyItems="center"
      >
      {pokedexList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          

          types={pokemon.types}
        ></PokemonCard>
      ))}
      </Grid>
    </>
  );
}

export default PokedexPage;
