import styled from "styled-components";
import tema from "../../tema";
const getBackgroundColor = (types) => {
    if (types.length > 0) {
        if (types[0].type.name === "normal" && types[1]) {
            return tema.colors.backgroundCard[types[1].type.name]
        }
    }
    return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
}
console.log(tema);

export const Container = styled.div`

width: 30vw;
height: 29vh;
display: flex;
align-items: end;
margin-left: 1vw;
position: relative;

`
export const PokemonImage = styled.img`
position: absolute;
top: -1.5vh;
width: 14vw;
right: 0.4vw;
`
export const CardBox = styled.div`
width: 29.9vw;
height: 23vh;
background-color: ${({ types }) => getBackgroundColor(types)};
border-radius: 0.6vw;
display: flex;
justify-content: space-between;
`
export const InfoBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
overflow: hidden;
width:50%;
padding: 3%;
`
export const Box = styled.div`
color: #ffffff;
font-size: 3rem;
font-style: bold;
display: flex;
flex-direction: column;
gap: .5vh;

`
export const BoxTipo = styled.div`
display: flex;
flex-direction: row;
position: absolute;
top: 60%;
`
export const IdPokemon = styled.p`
font-size: 2vw;
`
export const NamePokemon = styled.p`
font-size: 2vw;
`
export const Detalhes = styled.button`
color: #ffffff;
text-decoration:underline;
background: transparent;
border: none;
font-size: 2vw;

cursor: pointer;
`
export const ImageTipo = styled.img`
width:7vw;
height: 4vh;
`
export const CapturarButton = styled.button`
position: absolute;
right: 0;
height: 4.2vh;
width: 7.6vw;
margin-bottom:2vh;
margin-right: 2.3vw;
border-radius:.4vw;
border:none;
font-size: 1vw;

cursor: pointer;
`