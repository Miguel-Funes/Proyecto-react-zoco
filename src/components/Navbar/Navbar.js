import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="navbar-logo">Zoco minimarket</h1>
                <CartWidget />
            </nav>
            <ul class="nav-menu"> 
                <li class="nav-item">
                    <a href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="active" href="comprar.html">Comprar</a>
                </li>
                <li class="nav-item">
                    <a href="preguntas.html">Preguntas freguentes</a>
                </li>
            </ul>
        </div>
    
    );
};

export default Navbar;