import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function Header() {
  return (
    <Nav style={{backgroundColor:"lightgray",borderEndEndRadius:10,borderBottomLeftRadius:10}}>
       <Nav.Item>
        <Nav.Link eventKey="disabled" disabled style={{color:'red'}}>
          NETFLIX
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="fav">Favorites</Nav.Link>
      </Nav.Item>
      
    </Nav>
  )
}