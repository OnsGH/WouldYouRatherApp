import React, {Component} from 'react'
import {  Header,Form} from 'semantic-ui-react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

export class LoginForm extends Component {
   
    state = {
        value : '',
        toHome: false,
    };
    
  
    handleOnChange = (e, { value }) => {
      this.setState({ value });
      this.setState({ toHome : false });
    }
    
    handleSubmit = e => {
      e.preventDefault();
      const {toHome} = this.props;
      const authedUser = this.state.value;
      console.log("Hello ", authedUser)
      this.setState(() => ({
       toHome: true
      }))
      
    
      setAuthedUser(authedUser);
      
      
       if (toHome === true) {
        return <Redirect to="/Home" />;
      }
    };


    loadDropdownData = () => {
      const { users } = this.props;
  
      return users.map(user => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL }
      }));
    };
    render() {
      const { value,toHome } = this.state;
      const disabled = value === '' ? true : false;
       console.log('==== toHome =====',toHome)
     
      
      return (
        <Form onSubmit={this.handleSubmit}>
          <Header as="h2" color="green">
            Sign In
          </Header>
          <Form.Dropdown
            placeholder="Select a user"
            fluid
            selection
            scrolling
            options={this.loadDropdownData()}
            value={value}
            onChange={this.handleOnChange}
            required
          />
          <Form.Button content="Login" positive disabled={disabled} fluid />
        </Form>
      );
    }
  }

  
function mapStateToProps({ users, authedUser }) {
    return {
      authedUser,
      users: Object.values(users)
    };
  }
  export default  connect(mapStateToProps)(LoginForm)
  