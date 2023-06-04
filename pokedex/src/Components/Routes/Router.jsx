
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokemonListPage from "../../pages/PokemonListPage/PokemonListPage"
import PokemonDetailPage from "../../pages/PokemonDetailPage/PokemonDetailPage"
import PokedexPage from "../../pages/PokedexPage/PokedexPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PokemonListPage />} />
                <Route path="detail" element={<PokemonDetailPage />} />
                <Route path="pokedex" element={<PokedexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
