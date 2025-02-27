import React from "react"
import { Row, Col, Container, List, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class ApartmentShow extends React.Component {

  render() {
    const {
      street,
      city,
      state,
      manager,
      email,
      price,
      bedrooms,
      bathrooms,
      pets,
      user_id,
    } = this.props.apartment
    return (
      <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
          <List type="unstyled">
            <li style={{fontSize:'30px'}} >{street}, {city}, {state}
              <ul>
                <li style={{fontSize:'20px'}}>{price} per month</li>
              </ul>
            </li>
          </List>
          </Col>
        </Row>
        <Row>
          <Col>
            <List type="unstyled">
              <li style={{fontSize:'30px'}} >Amenities:
                <ul>
                  <li style={{fontSize:'20px'}}>Bedrooms:{bedrooms}</li>
                  <li style={{fontSize:'20px'}}>Bathrooms:{bathrooms}</li>
                  <li style={{fontSize:'20px'}}>Pets:{pets}</li>

                </ul>
              </li>
            </List>
          </Col>
        </Row>
        <Row>
          <Col>
            <List type="unstyled">
              <li style={{fontSize:'30px'}} >Contact:
                <ul>
                  <li style={{fontSize:'20px'}}>Manager:{manager}</li>
                  <li style={{fontSize:'20px'}}>Bathrooms:{bathrooms}</li>
                  <li style={{fontSize:'20px'}}>E-mail:{email}</li>

                </ul>
              </li>
            </List>
          </Col>
        </Row>
        {user_id === this.props.current_user.id &&
          <>
            <NavLink to={`/apartmentEdit/${this.props.apartment.id}`}>
              <Button style={{backgroundColor:'#d8c1aa',color:'#fc7173'}}>
                  Edit this apartment
              </Button>
            </NavLink>
            <NavLink to={"/userApartmentIndex"}>
              <Button
                style={{backgroundColor:'#d8c1aa',color:'#fc7173'}}
                onClick={ () => this.props.deleteApartment(this.props.apartment.id) }>
                  Delete this apartment
              </Button>
            </NavLink>
          </>
        }
      </Container>
      </React.Fragment>
    )
  }
}

export default ApartmentShow
