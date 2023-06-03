
import Header from "./Components/Header/header"
import { GlobalStyled } from "./GlobalStyle"
import PokemonListPage from "./pages/PokemonListPage/PokemonListPage"



function App() {
  return (
    <>
      <GlobalStyled/>
        <div>
          <Header/>
          <PokemonListPage/>
        
        </div>      
        
    </>
  )
}

export default App
