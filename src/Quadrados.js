import styled from "styled-components";

export default function Quadrados() {

    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    return (
        <>
            <Main>
                <Container>
                    {id.map((element) => {
                        return (
                            <>
                                <Box> {element} </Box>
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
    background-color: orange;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 10px 0px;
    font-weight: bold;
    font-size: 20px;
    color:white;
`
