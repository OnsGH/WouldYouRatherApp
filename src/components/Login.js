import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {  Container, Header, Grid, Image} from 'semantic-ui-react'
import LoginForm from '../components/LoginForm'
import '../index.css';

class Login extends Component {

    render(){
      return (

        <div>
        <LoginContainer>
         <LoginGrid 
             logo = {<AppLogo />}
            form ={<LoginForm  />}
            />
          </LoginContainer>

</div>

 )
}

}

const LoginContainer = ({ children })  => (
    <Container style={{ margin: 20 }}>
    <Header as="h3" block attached="top" textAlign="center">
      <Header.Content>Welcome to the Would You Rather App!</Header.Content>
      <Header.Subheader>Please sign in to continue</Header.Subheader>
    </Header>
     {children}
    </Container>
  );


  const LoginGrid= ({ logo, form }) => (
    <div>
      <Grid padded textAlign="center">
        <Grid.Row >
          <Grid.Column className='grid-login-col'width={20}>
          {logo}
         </Grid.Column>
         </Grid.Row>
         <Grid.Row >
          <Grid.Column width={20}>
            {form}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

  const AppLogo = () => (
    <Image src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' size="medium" centered />
  );
export default Login