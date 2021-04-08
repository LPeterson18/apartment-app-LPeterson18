import React from "react"
import Header from "./components/Header"
import Home from './pages/Home'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'
import PropTypes from "prop-types"
import { Nav, NavItem } from 'reactstrap'
import users from './MockUsers.js'
import apartments from './MockApartments.js'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments:apartments,
    };
  }

  createNewApartment = (newApartment) => {
    console.log(newApartment);
  }



  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
      <Router>
        <Header
        logged_in={ logged_in }
        current_user={ current_user }
        new_user_route={ new_user_route }
        sign_in_route={ sign_in_route }
        sign_out_route={ sign_out_route }
        />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route
            path='/apartmentIndex'
            render={() => <ApartmentIndex apartments={this.state.apartments} />}
          />
          <Route
            path='/apartmentShow/:id'
            render={(props) => {
              const id = parseInt(props.match.params.id);
              const foundapartment = this.state.apartments.find((apartment) => apartment.id === id);
              return <ApartmentShow apartment={foundapartment} />;
            }}
          />
          <Route
            path='/apartmentNew'
            render={(props) => {
             if (logged_in === true){
                return <ApartmentNew
                current_user={ current_user }
                createNewApartment={ this.createNewApartment }
                />;
            } else if(logged_in === false){
                return <Redirect to="/" />
            }
            }}
          />
          <Route path='/apartmentEdit' component={ ApartmentEdit } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
      </React.Fragment>
    )
  }
}

export default App
