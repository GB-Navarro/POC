import styled from "styled-components";
import react from "react";

export default function Quadrados() {

    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const [backgroundColor, setBackgroundColor] = react.useState('blue');
    return (
        <>
            <Main>
                <Container>
                    {id.map((element) => {
                        return (
                            <>
                                <Box backgroundColor={backgroundColor} onClick={() => {
                                    setBackgroundColor('red'); 
                                /*Raciocínio:
                                    Devido a esse styled component Box ser renderizado individualmente
                                    no map, eu pensava que ao fazer a lógica dessa forma, apenas o box
                                    que sofreu o click teria a sua cor mudada, oque não acontece.
                                    PS: Hoje eu já entendo o porque isso não acontece
                                    PS.2: O modo que resolvi esse problema está no componente Caso2.
                                */
                                }}> {element} </Box>
                            </>
                        )
                    })}
                </Container>
            </Main>
        </>
    )
}

const Main = styled.main`
    display:flex;
    justify-content: center;
`
const Container = styled.div`
    width: 80vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.backgroundColor};
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 10px 0px;
    font-weight: bold;
    font-size: 20px;
    color:white;
`
