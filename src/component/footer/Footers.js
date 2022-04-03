import React from "react";
import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #EF7631;
  color: white;
  margin-top: 100px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
  color: white;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.h1`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

`;

const LinkText = styled.a `
  text-decoration: none;
  color: inherit;
`


const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer=() =>{

    return(

        <Container>
            <Left>
                <Logo>Crepe Cafe</Logo>
                <Desc>
                    Københavns nye café med de lækreste crepes, pandekager og andre lækre desserter.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>

                <List>
                    <ListItem><LinkText href={"menu"}>Menu</LinkText></ListItem>
                    <ListItem><LinkText href={"about_us"}>Om os</LinkText></ListItem>
                    <ListItem><LinkText href={"contact_us"}>Kontakt os</LinkText></ListItem>
                    <ListItem><LinkText href={"order_side"}>Bestil nu</LinkText></ListItem>

                </List>
            </Center>
            <Right>
                <Title>Kontakt</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Lundtoftegade 105, 2200 København
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +45 91 98 98 03
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> kontakt@crepecafe.dk
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer