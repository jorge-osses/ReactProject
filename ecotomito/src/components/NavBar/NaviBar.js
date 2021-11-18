import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import LogoProduct from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NaviBar = () => {
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand href="/#"><img
                    alt="ecotomito"
                    src={LogoProduct}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}Ecotomito
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#">Inicio</Nav.Link>
                    <Nav.Link href="/#">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/#">Pañales</NavDropdown.Item>
                    <NavDropdown.Item href="/#">Absorbentes</NavDropdown.Item>
                    <NavDropdown.Item href="/#">Covertores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/#">Higiene femenino</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

            <CartWidget />
            </Container>
        </Navbar>
    )
}
export default NaviBar;