import React, {Component} from 'react'
import {  Header,Form} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
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
      //const setAuthedUser  = this.props;
      const authedUser = this.state.value;
      this.setState(() => ({
       toHome: true
      }))
      
      console.log('authedUser', authedUser)
      setAuthedUser(authedUser);
     
      
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
      if (toHome === true) {
        return <Redirect to="/" />;
      }
      
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

function mapStateToProps({ users }) {
    return {
      users: Object.values(users)
    };
  }
  export default  connect(mapStateToProps)(LoginForm)
  