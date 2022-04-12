import React from "react";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room} from "@material-ui/icons";
import {
    Container,
    Left,
    Logo,
    Desc,
    SocialContainer,
    SocialIcon,
    Center,
    Title,
    List,
    ListItem,
    LinkText, ContactItem, Right
} from "./FooterStyle"


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
                    <Room style={{marginRight:"10px"}}/> København
                    {/*Lundtoftegade 105, 2200*/}
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +45 12 34 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> info@crepecafe.dk
                </ContactItem>
            </Right>

        </Container>
    )
}

export default Footer