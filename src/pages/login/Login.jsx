
import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import meal from "../../assets/meal.svg";

const Login = () => {

  const user = {
    username: "user"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "/home";
  }

  return (
    <div>
      <LoginContainer>
        <FormContainer>
          
          <StyledImg src={meal}/>

          <Header>{"<Clarusway/>"} Recipe</Header>

          <StyledForm onSubmit={handleSubmit}>

            <StyledInput type="text" placeholder="Username" required/>
            <StyledInput type="password" placeholder="Password" required/>
            <StyledButton>Login</StyledButton>

          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </div>
  )
}

export default Login