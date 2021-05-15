import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { BrowserRouter, NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
// components
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <BrowserRouter>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggle} />
                    <NavbarBrand className="mr-40 ml-3" href="/">
                        <img src="images/logo.png" height="30"  alt='Weather Erudite'/>
                    </NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem> 
                                <NavLink className="nav-link" to="">
                                    <span className="fa fa-home fa-lg"> </span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem> 
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info fa-lg"> </span> About
                                </NavLink>
                            </NavItem>

                            <NavItem> 
                                <NavLink className="nav-link" to="/contact">
                                    <span className="fa fa-address-card fa-lg"> </span> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route exact path='/about'> <About /> </Route>
                <Route exact path='/contact'> <Contact /> </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
        </>
    );
}
