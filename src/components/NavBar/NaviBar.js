import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import LogoProduct from '../../assets/img/logo.ico'
import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NaviBar = () => {
    
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><img
                    alt="ecotomito"
                    src={LogoProduct}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}Ecotomito</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>Productos</Link></Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/pañales de tela`}>Pañales</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/absorbentes`}>Absorbentes</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/covertores`}>Covertores</NavLink></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/category/higiene femenina`}>Higiene femenino</NavLink></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

            <CartWidget number={0} />
            </Container>
        </Navbar>
    )
}
export default NaviBar;