import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="navbar-logo">Zoco minimarket</h1>
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
            <CartWidget />
        </div>
    );
};

export default Navbar;