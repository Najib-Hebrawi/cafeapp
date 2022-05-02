import React from "react";
import styled from "styled-components";

const Container = styled.div `
  padding: 10rem;
  margin: 10rem;
  box-sizing: content-box;
  align-items: center;
`

const Text = styled.h1 `
  font-size: 35px;
  font-weight: 300;
`

const Dec = styled.h1 `
  font-size: 35px;
  font-weight: 300;
`


const DonePage = () => {

    const orderID = JSON.parse(localStorage.getItem("orderId"));

    return(
        <Container>
            <Text>Tak for din bestilling</Text>
            <Dec>Ordrenummeret er {orderID}</Dec>

        </Container>
    )
}


export default DonePage