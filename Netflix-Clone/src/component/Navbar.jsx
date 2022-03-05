import { Nav, Container, Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar>
          <Container>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">TV Shows</Nav.Link>
            <Nav.Link href="/">Movies</Nav.Link>
            <Nav.Link href="/fav">My List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;