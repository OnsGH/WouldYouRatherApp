import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

 class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
      
    if (name ==='logout')
    {
        e.preventDefault();
        this.props.setAuthedUser(null);

    }
    this.setState({ activeItem: name })
}

  render() {
    const { activeItem } = this.state
    const { authedUser, users } = this.props;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={NavLink} to="/" exact 
          />
          <Menu.Item
            name='new question'
            active={activeItem === 'new question'}
            onClick={this.handleItemClick}
            as={NavLink} to="/add" exact 
          />
          <Menu.Item
            name='leader board'
            active={activeItem === 'leader board'}
            onClick={this.handleItemClick}
            as={NavLink} to="/leaderboard" exact 
          />
           <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src={users[authedUser].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {users[authedUser].name}
              </span>
            </Menu.Item>
            </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser }) {
    return {
      authedUser,
      users
    };
  }
  
  export default connect(
    mapStateToProps,
    { setAuthedUser }
  )(Nav);