import {Navbar,Container} from 'react-bootstrap';

const NavStyle = {
  marginBottom:"40px"
}

function Nav(){
    return(
      <div style={NavStyle}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">To Do App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Kutay Keleş</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
}

export default Nav;