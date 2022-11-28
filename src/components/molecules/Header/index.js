import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.scss";

function Header() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-top">
          <Container className="header">
            <Navbar.Brand className="navbar-brand">
              Cakra<span className="navbar-brand-span">wala.</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Item className="nav-item">
                    <Nav.Link href="/" className="nav-link">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link eventKey="link-1" className="nav-link">
                      Browse by
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link eventKey="link-2" className="nav-link">
                      Stories
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link eventKey="link-3" className="nav-link">
                      Agents
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
