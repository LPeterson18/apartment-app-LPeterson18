import React from "react"
import { Row, Col, Container, List } from 'reactstrap'



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
      </Container>
      </React.Fragment>
    )
  }
}

export default ApartmentShow
