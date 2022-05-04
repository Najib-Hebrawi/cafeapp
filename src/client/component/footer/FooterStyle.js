import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #EF7631;
  color: white;
  margin-top: 100px;
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Logo = styled.h1`
  color: white;
`
export const Desc = styled.p`
  margin: 20px 0px;
`
export const SocialContainer = styled.h1`
  display: flex;
`
export const SocialIcon = styled.div`
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

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

`;

export const LinkText = styled.a`
  text-decoration: none;
  color: inherit;
`


export const Right = styled.div`
  flex: 1;
  padding: 20px;
`
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;




