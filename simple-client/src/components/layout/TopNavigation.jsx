import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const TopNavigation = () => {
    return ( 
    <>
        <Navbar sticky="top" bg="light" variant="light" className='mb-4'>
        <Container>
          <Navbar.Brand as={NavLink} to="/">Simple Client</Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-end">
            {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
            <Nav.Link as={NavLink} to="/create" className="badge bg-primary text-wrap text-white">Create User</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
     
    
    </>  
    )
}

export default TopNavigation;