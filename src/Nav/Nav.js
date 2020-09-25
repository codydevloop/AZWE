import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../Nav/Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
 
  render() {
    const container = { height: 1300 }
    const navColor = { backgroundColor: '#150082' }
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar style={navColor} dark expand="md">
              <MDBNavbarBrand href="/">
                <strong>AZWE</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav>
                  {/* <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem> */}
                  {/* <MDBNavItem>
                    <MDBNavLink to="#">Calendar</MDBNavLink>
                  </MDBNavItem> */}
                  <MDBNavItem>
                    <MDBNavLink to="#">Tryouts</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Community Events</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                {/* <MDBNavbarNav center>
                  <h1 className="whiteFont">AZWE</h1>
                </MDBNavbarNav> */}
                <MDBNavbarNav>
                <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Calendar</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBIcon fab icon="facebook-square" size='3x' className="white-text"/>
                  </MDBNavItem>
             
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>

      </div>
      
    );
  }
}

export default Nav;