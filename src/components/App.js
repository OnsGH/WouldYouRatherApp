import logo from '../logo.svg';
import '../App.css';
import { Component , Fragment} from 'react'
import { handleInitilData } from '../actions/shared'
import { connect } from 'react-redux'
import Login from '../components/Login'
import authedUser from '../actions/authedUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav'
import Home from '../components/Home'
import { Grid } from 'semantic-ui-react';
class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitilData())
      
    }
  
    render() {
      const { authedUser } = this.props;
     
      return (
        <Router>
           <Fragment>
          <div className="App">
           
          {authedUser === null ? (
            <Route
              render={() => (
                
                  <Login />
              
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Fragment>
          )}
           
          </div>
          </Fragment>
        </Router>
      );
    
   
   
   
   
   
   
   
    /*
    return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}
}
const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}
export default  connect(mapStateToProps)(App)
