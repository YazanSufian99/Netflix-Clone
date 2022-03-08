import { Nav, Container, Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar >
          <Container style={{backgroundColor:'red'}} >
            <Nav>
              <Nav.Link href="/" style={{color:'white' ,fontSize:'larger'}}>Home</Nav.Link>
            
            <Nav.Link href="/fav" style={{color:'white' ,fontSize:'larger'}}>My List</Nav.Link>
        </Nav>
        <p style={{color:'white' ,fontSize:'larger', marginTop:'10px'}}>&copy; NETFLIX</p>
      </Container>
    </Navbar>
  );
};

export default NavBar;