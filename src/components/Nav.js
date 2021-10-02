import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { CSSTransition } from 'react-transition-group'
import { AiOutlineLogin } from 'react-icons/ai';


export function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [opacity, setOpacity] = useState(0);
    const [menuHeight, setMenuHeight] = useState(2*63);

    function calcHeight(el) {
        setMenuHeight(el.offsetHeight);
    }

    function DropdownMenuItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => setActiveMenu(props.goToMenu || activeMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    useEffect(() => {
        setOpacity(1)
    }, [])

    return (
        <div className="dropdown" style={{height: menuHeight, opacity: opacity}}>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} onEnter={calcHeight} classNames="menu-primary">
                <div className="menu">
                    <DropdownMenuItem goToMenu="settings" leftIcon={<AiOutlineLogin/>}>Login</DropdownMenuItem>
                    <DropdownMenuItem leftIcon={<AiOutlineLogin/>}>Login</DropdownMenuItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} onEnter={calcHeight} classNames="menu-secondary">
                <div className="menu">
                    <DropdownMenuItem goToMenu="main" leftIcon={<AiOutlineLogin/>}>test</DropdownMenuItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export function NavItem(props){
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <a className="icon-button" href="#" onClick={() => setOpen(!open)}>{props.icon}</a>
            {open && props.children}
        </li>

    )
}

export function Nav({children}) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{children}</ul>
        </nav>
    )
}
