import React from "react"
import Header from "./components/Header"
import Home from './pages/Home'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import UserApartmentIndex from './pages/UserApartmentIndex'
import NotFound from './pages/NotFound'
import PropTypes from "prop-types"
import { Nav, NavItem } from 'reactstrap'
//import users from './MockUsers.js'
//import apartments from './MockApartments.js'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments:[],
    };
  }

  componentDidMount() {
    this.apartmentIndex();
  }

  apartmentIndex = () => {
    fetch('http://localhost:3000/apartments')
      .then((response) => {
        return response.json();
      })
      .then((arrayOfApartments) => {
        this.setState({ apartments: arrayOfApartments });
      })
      .catch((errors) => {
        console.log('index errors:', errors);
      });
  };

  createNewApartment = (newApartment) => {
    fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(newApartment),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    .then((response) => {
        if (response.status === 422) {
          alert('Something went wrong here');
        } else {
          return response.json();
        }
      })
      .then((payload) => {
        this.apartmentIndex();
      })
      .catch((errors) => {
        console.log('create errors', errors);
      });
  }

  editApartment = (editedApartment, id) => {
    fetch(`http//localhost:3000/apartments/${id}`, {
      body: JSON.stringify(editedApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteApartment = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 422){
        alert("Something is wrong with your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.apartmentIndex()
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
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
            path='/userApartmentIndex'
            render={(props) => {
              const usersApartments = this.state.apartments.filter(apartment => {
                return apartment.user_id === current_user.id
              })
              return <UserApartmentIndex usersApartments={usersApartments} />
            }}
          />
          <Route
            path='/apartmentShow/:id'
            render={(props) => {
              const id = parseInt(props.match.params.id);
              const foundapartment = this.state.apartments.find((apartment) => apartment.id === id);
              return <ApartmentShow
              apartment={foundapartment}
              current_user={ current_user }
              deleteApartment={this.deleteApartment}/>;
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
          <Route
            path='/apartmentEdit/:id'
            render={(props) => {
              const id = parseInt(props.match.params.id);
              const foundApartment = this.state.apartments.find((apartment) => apartment.id === id);
              return <ApartmentEdit
                      current_user={ current_user }
                      apartment={foundApartment}
                      editApartment={this.editApartment} />;
            }}
            />
          <Route component={ NotFound } />
        </Switch>
      </Router>
      </React.Fragment>
    )
  }
}

export default App
