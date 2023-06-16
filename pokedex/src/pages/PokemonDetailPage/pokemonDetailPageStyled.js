import styled from "styled-components";


export const Container = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 95%;
height: 41.438rem;
background-color:#729F92;
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
margin-top: 3.75rem;
margin-bottom:3.5rem;
margin-left:2.5rem;
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
export const LogoPokeFront = styled.div`
height: 17.625rem;
width: 100%;
background-color: white;
border-radius: .5rem;
`
export const LogoPokeBack = styled.div`
height: 17.625rem;
width: 100%;
background-color: white;
border-radius: .5rem;
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
background-color: white;
border-radius: .5rem;

`
export const Move = styled.div`
height: 70%;
background-color: white;
border-radius: .5rem;
`