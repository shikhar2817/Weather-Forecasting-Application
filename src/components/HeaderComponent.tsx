import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


export function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar color="dark" dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand className="mr-40 ml-3" href="/">
                    <img src="images/logo.png" height="30"  alt='Weather Erudite'/>
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem> 
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"> </span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem> 
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"> </span> About
                            </NavLink>
                        </NavItem>

                        <NavItem> 
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg"> </span> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                        </Collapse>
            </div>
        </Navbar>
        </>
    );
}
