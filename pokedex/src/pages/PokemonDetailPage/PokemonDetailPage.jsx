import Header from "../../Components/Header/Header"
import Menor from "../../assets/Menor.svg"


function PokemonDetailPage() {
    return (
        <>
            <Header />
            <button>                
                <h3><img src={Menor} alt="" /> Todos Pokémons</h3>
            </button>
            <p>PokemonDetailPage</p>
        </>
    )
}

export default PokemonDetailPage
