import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
     //<NavbarBrand tag={Link} to="/">Intl Grandway Travel</NavbarBrand>
    // < !--{< NavLink tag = { Link } className = "text-dark" to = "/fetch-data" > Cruises</NavLink >} -->
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                       
                        <img src="https://uploads-ssl.webflow.com/5b5f550bd9b73f66ddb448b9/5b9fef85aa89c6389dc0e40c_intl%20Logo%20final.png" alt="logo" />
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link}  to="/" style={{ color: '#228B22', fontWeight: 'bold' }} >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#228B22', fontWeight: 'bold' }} to="/counter">Tour</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#228B22', fontWeight: 'bold' }} to="/Cruises">Cruises</NavLink>
                             
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: '#228B22', fontWeight: 'bold' }} to="/about-us">Contact Us</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }


    //render() {
    //    return (
    //        <Navbar inverse fixedTop fluid collapseOnSelect>
    //            <Navbar.Header>
    //                <Navbar.Brand>
    //                    <Link to={'/'}>WebApplication1</Link>
    //                </Navbar.Brand>
    //                <Navbar.Toggle />
    //            </Navbar.Header>
    //            <Navbar.Collapse>
    //                <Nav>
    //                    <LinkContainer to={'/'} exact>
    //                        <NavItem>
    //                            <Glyphicon glyph='home' /> Home
    //          </NavItem>
    //                    </LinkContainer>
    //                    <LinkContainer to={'/counter'}>
    //                        <NavItem>
    //                            <Glyphicon glyph='education' /> Counter
    //          </NavItem>
    //                    </LinkContainer>
    //                    <LinkContainer to={'/fetchdata'}>
    //                        <NavItem>
    //                            <Glyphicon glyph='th-list' /> Fetch data
    //          </NavItem>
    //                    </LinkContainer>
    //                </Nav>
    //            </Navbar.Collapse>
    //        </Navbar>
    //    );
    //}
}
