import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export  class TourNavMenu extends Component {
    static displayName = TourNavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    //<NavbarBrand tag={Link} to="/">Intl Grandway Travel</NavbarBrand>
    // < !--{< NavLink tag = { Link } className = "text-dark" to = "/fetch-data" > Cruises</NavLink >} -->
    render() {
        return (
            <header>
                <Navbar style={{ backgroundColor: 'green' }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
                    <Container>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem style={{ float:'left' }}>
                                    <NavLink tag={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }} >Asia & Pacific</NavLink>
                                </NavItem>
                                <NavItem style={{ float: 'left' }}>
                                    <NavLink tag={Link} style={{ color: 'white', fontWeight: 'bold' }} to="/counter">North America</NavLink>
                                </NavItem>
                                <NavItem style={{ float: 'left' }}>
                                    <NavLink tag={Link} style={{ color: 'white', fontWeight: 'bold' }} to="/Cruises">Europe</NavLink>

                                </NavItem>
                                <NavItem style={{ float: 'left' }}>
                                    <NavLink tag={Link} style={{ color: 'white', fontWeight: 'bold' }} to="/about-us">Latin America</NavLink>
                                </NavItem>
                            </ul>
                            </Collapse>
                        </Container>
                </Navbar>
            </header>
        );
    }
}
