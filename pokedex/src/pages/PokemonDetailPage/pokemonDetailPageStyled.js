import styled from "styled-components";
import tema from "../../tema";
export const getBackgroundColor = (types) => {
    if (types.length > 0) {
        if (types[0].type.name === "normal" && types[1]) {
            return tema.colors.backgroundCard[types[1].type.name]
        }
    }
    return tema.colors.backgroundCard[types[0].type.name] || "#ffffff";
}
console.log(tema);


export const Container = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 95%;
height: 41.438rem;
background-color:${({ types }) => getBackgroundColor(types)};
margin-left:2.5%;
margin-right:2.5%;
border-radius:3rem
`


export const Pokebola = styled.img`
position: absolute;
right: 0;
top:0;
`
export const Pokemon = styled.img`
position: absolute;
width: 16.875rem;
height: 16.875rem ;
right: 2rem;
top: -8.2rem;

`
export const Detalhes = styled.h1`
font-weight: 700;
font-size: 3rem;
margin-top: 3.75rem;
margin-bottom:3.5rem;
margin-left:2.5rem;
color: white;
`
export const Section = styled.div`
padding: 2rem 0rem 2rem 2rem;
width: 75%;
display: flex;
gap: 3rem;
z-index: 1;
`
export const Logos = styled.div`
display: flex;
width: 27%;
flex-direction: column;
justify-content: space-between;


`
export const LogoPoke = styled.div`
height: 17.625rem;
background-color: white;
border-radius: .5rem;
padding: 2.3rem;
`

export const Gif = styled.img`
width: 150px;
align-items: center;
justify-content: center;
`
export const Title = styled.h1`
font-family: "Inter", Arial, Helvetica, sans-serif;
font-weight: 800;
font-size: 1.5rem;

`
export const Base = styled.div`
width: 38%;
background-color: white;
border-radius: .5rem;
`
export const InfoMov = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
width: 28%;
`
export const Info = styled.div`
height: 20%;
background-color: transparent;
border-radius: .5rem;
p{
    color: white;
    font-family: "inter", Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 1rem;
}
h1{
    color: white;
    font-family: "inter", Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 3rem;
}
`
export const Move = styled.div`
height: 70%;
background-color: white;
border-radius: .5rem;
padding: .8rem;
`
export const TypesBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4%;
  width: fit-content;
`;