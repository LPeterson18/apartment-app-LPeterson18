import React from "react"
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class ApartmentEdit extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        form: {
          street: '',
          city: '',
          state: '',
          manager:'',
          email:'',
          price:'',
          bedrooms:0,
          bathrooms:0,
          pets:'',
        },

        submitted: false,
      };
    }

    handleChange = (e) => {
      let { form } = this.state;
      form[e.target.name] = e.target.value;
      this.setState({ form: form });
    }

    handleSubmit = () => {
      this.props.editApartment(this.state.form, this.props.apartment.id);
      this.setState({ submitted: true });
    }

  render() {
    return (
      <React.Fragment>
        <h1>ApartmentEdit</h1>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 3 }}>
            <h2>List a new apartment:</h2>
            <Form>
              <FormGroup>
                <Label for='street'>Street</Label>
                <Input
                  type='text'
                  name='street'
                  value={this.state.street}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='city'>City</Label>
                <Input
                  type='text'
                  name='city'
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='state'>State</Label>
                <Input
                  type='text'
                  name='state'
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='manager'>Manager Name</Label>
                <Input
                  type='text'
                  name='manager'
                  value={this.state.manager}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Manager Email</Label>
                <Input
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='price'>Rent Rate Per Month</Label>
                <Input
                  type='text'
                  name='price'
                  value={this.state.price}
                  onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup>
                  <Label for='bedrooms'>Number of Bedrooms</Label>
                  <Input
                    type='number'
                    name='bedrooms'
                    value={this.state.bedrooms}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='bathrooms'>Number of Bathrooms</Label>
                  <Input
                    type='number'
                    name='bathrooms'
                    value={this.state.bathrooms}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='pets'>Pets Allowed?</Label>
                  <Input
                    type='text'
                    name='pets'
                    value={this.state.pets}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              <Button onClick={this.handleSubmit}>Submit Apartment</Button>
            </Form>
          </Col>
        </Row>
        {this.state.submitted && (
          <Redirect to={`/apartmentShow/${this.props.apartment.id}`} />
        )}
      </React.Fragment>
    )
  }
}

export default ApartmentEdit
