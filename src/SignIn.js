import React, {Component} from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
 text-align: center;
  justify-content: center;
  display: flex;
  padding: 90px 0 90px 0;

`

const SubContainer = styled.div`
  justify-content: center;
  height: 550px;
  width: 35%;
  box-shadow: 4px 5px 5px 4px rgb(207, 207, 207);
  padding-top: 30px;
  background-color: #FFFDF1;
  
`

const Title = styled.h1`
    margin: 20px;
`


const InputText = styled.input `
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 30px;
  font-size: 16px;
  margin: 10px;
  color: #662626;
`

const Button = styled.button `
  width: 200px;
  height: 50px;
  border-radius: 60px;
`


const LoginContainer = styled.div `

  display: grid;
  justify-content: center;
`

class SignIn extends Component{

    constructor() {
        super();
        this.state = {
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup',registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })

    }



    render() {
        return(

            <Container>
                <SubContainer>
                    <form onSubmit={this.onSubmit}>
                   <LoginContainer >
                       <Title>Sign Up Page</Title>


                       <InputText
                           type={"text"}
                           onChange={this.changeFullName}
                           value={this.state.fullName}
                           placeholder={"Full Name"}
                       />

                       <InputText
                           type={"text"}
                           onChange={this.changeUsername}
                           value={this.state.username}
                           placeholder={"Username"}
                       />


                       <InputText
                           type={"text"}
                           onChange={this.changeEmail}
                           value={this.state.email}
                           placeholder={"Email"}
                       />

                       <InputText
                           type={"password"}
                           onChange={this.changePassword}
                           value={this.state.password}
                           placeholder={"password"}
                       />


                   </LoginContainer>
                   <Button type='submit' value='Submit' >Sign Up</Button>
                    </form>
                </SubContainer>
            </Container>
        )
    }

}


export default SignIn;
