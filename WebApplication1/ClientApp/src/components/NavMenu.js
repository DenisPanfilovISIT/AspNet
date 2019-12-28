import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
displayName = NavMenu.name

render() {
return (
    <Navbar inverse fixedTop fluid collapseOnSelect style={{ width: 300, fontFamily: "Helvetica", background: "white"}}>
    <Navbar.Header>
        <Navbar.Brand>
        <Link to={'/'}>IceCreAM</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
        <div className="catalog">
            <Glyphicon glyph='align-justify' />  <text className="textcatalog">Каталог товаров</text>
        </div>


    <Navbar.Collapse>
        <Nav>


                <LinkContainer to={'/order'}>
                    <NavItem>
                        <Glyphicon glyph='th' /> Заказы
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/status'}>
                    <NavItem>
                        <Glyphicon glyph='info-sign' /> Статусы
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/client'}>
                    <NavItem>
                        <Glyphicon glyph='user' /> Клиенты
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/mesto'}>
                    <NavItem>
                        <Glyphicon glyph='th-list' /> Места доставок
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/forma'}>
                    <NavItem>
                        <Glyphicon glyph='gift' /> Форма
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/morozhenoe'}>
                    <NavItem>
                        <Glyphicon glyph='cutlery' /> Мороженое
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/Rozhok'}>
                    <NavItem>
                        <Glyphicon glyph='tower' /> Рожки
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/sharik'}>
                    <NavItem>
                        <Glyphicon glyph='globe' /> Шарики
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/topping'}>
                    <NavItem>
                        <Glyphicon glyph='tint' /> Топпинги
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/ulica'}>
                    <NavItem>
                        <Glyphicon glyph='road' /> Улицы
            </NavItem>
                </LinkContainer>
                <LinkContainer to={'/vkus'}>
                    <NavItem>
                        <Glyphicon glyph='th-large' /> Вкусы
            </NavItem>
                </LinkContainer>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
);
}
}
