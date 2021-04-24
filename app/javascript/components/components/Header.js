import React, { useState } from "react"
import PropTypes from "prop-types"
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
NavbarText
} from 'reactstrap';


class Header extends React.Component {



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

        <div>
          <Navbar style={{backgroundColor:'#1eb7ea'}} light expand="sm">
            <NavbarBrand href="/">Palm Breeze Apartments</NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/apartmentIndex/">All Apartments</NavLink>
                </NavItem>
              </Nav>
              <Nav>
                { logged_in &&
                  <>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href='/apartmentNew'>Add Listing</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href='/userApartmentIndex'>My Apartments</NavLink>
                    </NavItem>
                  </Nav>
                  <NavItem>
                    <NavbarText>{current_user.email}</NavbarText>
                  </NavItem>
                  <NavItem>
                    <a href={sign_out_route}>Sign Out</a>
                  </NavItem>
                  </>
                }
                { !logged_in &&
                  <NavItem>
                    <a href={ sign_in_route }>Sign In</a>
                  </NavItem>
                }
              </Nav>
          </Navbar>
        </div>
      </React.Fragment>
    )
  }
}

export default Header
