import styled from "styled-components";
import react from "react";
import "./styles.css";

/*O racional desse método é o seguinte, eu individualizo os elementos através de um array
e a partir disso, eu seto classes individualmente em cada elemento, dependendo apenas do fato
desse elemento estar ou não contido nesse array. Caso ele esteja, ele recebe uma classe, caso não
esteja, ele recebe outra classe */

export default function Quadrados() {

    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const [backgroundColor, setBackgroundColor] = react.useState(0);
    const [array, setArray] = react.useState([]);

    return (
        <>
            <h1 onClick={() => {
                console.log(array);
            }}>Console log do array</h1>
            <Main>
                <Container>
                    {id.map((element) => {
                        return (
                            <>
                                <Box className={verifyArray(array,element) === false ? 'blue' : 'red'}
                                    onClick={() => {
                                        if (verifyArray(array, element) === false) {
                                            setArray([...array,
                                                element
                                            ])
                                        } else {
                                            let index = verifyArray(array, element);
                                            removeElement(array, element, setArray);
                                        }

                                    }}> {element} </Box>
                            </>
                        )
                    })}
                </Container>
            </Main>
        </>
    )
}

function verifyArray(array, id) {
    if (array.find((e) => (e === id)) != undefined) {
        return true; //Id está no array
    } else {
        return false; //Id não está no array
    }
}

function removeElement(array, id, setArray) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === id) {
            index = i;
        }
    }
    array.splice(index,1)
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
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px 10px 0px;
    font-weight: bold;
    font-size: 20px;
    color:white;
`
