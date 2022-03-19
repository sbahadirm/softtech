import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this)

    }

    handleLogout(){
        this.props.logout();
    }

    render() {

        return (
            <div className="col-md-6 offset-md-3 ">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Softtech</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/accounts">Hesaplar</Nav.Link>
                                <Nav.Link href="/add-account">Hesap Ekle</Nav.Link>
                                <Nav.Link href="/activities">Hesap Hareketleri</Nav.Link>

                                <NavDropdown title="Hesabım" id="basic-nav-dropdown">

                                    <NavDropdown.Item href="/product/add">Hesap Ekle</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    {!this.props.isLoggedOn && < NavDropdown.Item href="/login">Giriş</NavDropdown.Item>}
                                    {this.props.isLoggedOn && <NavDropdown.Item href="/" onClick={this.handleLogout}>Çıkış</NavDropdown.Item>}

                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Menu;