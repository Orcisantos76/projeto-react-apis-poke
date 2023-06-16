import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Context/globalContext";

function PokedexPage() {
  const { pokedexList } = useContext(GlobalContext);
  console.log(pokedexList);
  return (
    <>
      <section>
        <h1>Meus Pokémons </h1>
      </section>
      {pokedexList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          types={pokemon.types}
        ></PokemonCard>
      ))}
    </>
  );
}

export default PokedexPage;
