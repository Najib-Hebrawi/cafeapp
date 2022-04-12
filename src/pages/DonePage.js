import React from "react";
import styled from "styled-components";

const Container = styled.div `

  padding: 5rem;
  margin: 10rem;
  border-radius: 0.5rem;
  position: relative;

`

const Text = styled.h1 `
  font-size: 35px;
  font-weight: 300;
`

const Dec = styled.h1 `
  font-size: 35px;
  font-weight: 300;
  margin: 3rem;
`


const DonePage = () => {
    return(
        <Container>
            <Text>Tak for din bestilling</Text>
            <Dec>Ordrenummeret er 232122</Dec>

        </Container>
    )
}


export default DonePage