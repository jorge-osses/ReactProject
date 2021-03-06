import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import LogoProduct from '../../assets/img/logo.ico'
import CartWidget from '../CartWidget/CartWidget'
import { LinkContainer } from 'react-router-bootstrap'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const NavBar = () => {
    const { countItems } = useContext(CartContext)
    let count = countItems()
    
    return (
        <Navbar bg="danger" expand="md">
            <Container>
                <LinkContainer to={'/'}>
                    <Navbar.Brand>
                        <img
                        alt="ecotomito"
                        src={LogoProduct}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}Ecotomito
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to={'/'}>
                        <Nav.Link>Productos</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <LinkContainer to={`/category/pañales de tela`}>
                            <Nav.Link>Pañales</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/category/absorbentes`}>
                            <Nav.Link>Absorbentes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={`/category/covertores`}>
                            <Nav.Link>Covertores</Nav.Link>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to={`/category/higiene femenina`}>
                            <Nav.Link>Higiene femenino</Nav.Link>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <LinkContainer to={'/cart'}>
                    {count === 0 ? <div></div> : <Button variant='danger'><CartWidget number={count} /></Button>}
                </LinkContainer>
            </Container>
        </Navbar>
    )
}
export default NavBar;