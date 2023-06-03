/* eslint-disable no-unused-vars */
import { Container,Todos,BotaoPokedex, Logo,MenorImage } from "./headerStyled"
import logo from "../../assets/LogoPokemon.svg";
import SimboloMenor from "../../assets/Menor.svg"





function Header (){
    return(
        <>
            <Container> 
                <Todos>
                    <MenorImage src={SimboloMenor} alt="" />
                    <u>Todos Pokémons</u>
                    
                </Todos>
                <Logo src={logo} alt="" />
                <BotaoPokedex>
                    <p>Pokédex</p>
                </BotaoPokedex>
            </Container>
        </>
    )
}

export default Header