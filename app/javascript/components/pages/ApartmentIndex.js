import React, { Component } from "react"
import {
  Card,
  Button,
  CardTitle,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {

  render() {
    return (
      <React.Fragment>
        <h2>ApartmentIndex</h2>
        <Row sm='4'>
          {this.props.apartments.map((apartment) => {
            return (
              <Col key={apartment.id} sm='4'>
                <Card>
                  <CardBody>
                    <CardTitle tag='h5'>{apartment.street}, {apartment.city}, {apartment.state}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>
                      {apartment.price}
                    </CardSubtitle>
                    <NavLink to={`/apartmentShow/${apartment.id}`}>More Info</NavLink>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </React.Fragment>
    )
  }
}

export default ApartmentIndex
