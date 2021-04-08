import React from "react"
import { Button } from 'reactstrap'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h1>Palm Breeze Apartments</h1>
      <img
        src='https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80'
        style={{ width: '100%' }}
      />
        <Button style={{backgroundColor:'#d8c1aa',color:'#fc7173'}} size='lg' block href='/apartmentIndex'>
            Look at the available apartments.
          </Button>
      </React.Fragment>
    )
  }
}

export default Home
