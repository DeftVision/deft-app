import { useState, useContext } from "react";
import UserContext from '../components/UserContext';
import cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { Container, Offcanvas, Nav } from 'react-bootstrap';



export default function Sidebar () {
    const [show, setShow] =useState(false)
    const {user, setUser} = useContext(UserContext);


    function logout() {
        setUser(null);
        cookies.remove("userCookie");
    }

    const menuClose = () => setShow(false);
    const menuOpen = () => setShow(true);


    return (
        <>
            <Container fluid style={{marginLeft: "30px", marginTop: "30px"}}>
            <FaIcons.FaBars onClick={menuOpen} className="me-auto"  style={{fontSize: "1.75rem"}}/>
            </Container>
            <Offcanvas show={show} onHide={menuClose}
                       style={{maxWidth: "250px", overflow: "hidden", backgroundColor: "rgba( 0, 0, 0, 0.75"}}>
                <Offcanvas.Header closeButton className="sidebar-header" style={{backgroundColor: "#fff"}}>
                    {user &&
                        <Offcanvas.Title>{user.firstName} {user.lastName} </Offcanvas.Title>}
                </Offcanvas.Header>
                <Offcanvas.Body style={{background: "transparent", marginTop: "15px"}}>
                    <Nav style={{display: "flex", flexDirection: "column"}}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/announcement">Announcement</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/evaluation">Evaluation</Nav.Link>
                        {user && user.role === 'Admin' && (
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>)}
                    </Nav>
                        {user && <Nav.Link as={Link} onClick={logout} className="logout-button">Logout</Nav.Link>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}