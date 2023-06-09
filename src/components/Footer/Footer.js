import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="pie-pagina">
        <div className="contenedor-grupo-1">
            <div className="grupo-1"> 
                <p>SITIO EXCLUSIVO PARA CLIENTES</p>
            </div>
        </div>
        <div className="grupo-2">
            <div className="box">
                <h3>ENCONTRANOS EN</h3> 
                <p>Av. Rio de janeiro 1624 - Villa allende, Cordoba, Argentina</p>
                <p>CUIT: 20-12345678-6</p>
            </div>
            <div className="box">
                <h3>SOBRE NOSOTROS</h3> 
                <a href="#">Terminos y Condiciones</a>
                <a href="#">Politica Comercial</a>
                <a href="#">Politica de Privacidad</a>
            </div>
            <div className="box">
                <h3>CONTACTANOS</h3> 
                <div className="red-social">
                    <a href="#" className="fa-solid fa-phone" target="_blank"></a>
                    <span>0800-888-0000</span>
                </div>
                <div className="red-social">
                    <a href="#" className="fa-brands fa-whatsapp" target="_blank"></a>
                    <span>+54 9 351-762-0775</span>
                </div>
                <div className="red-social">
                    <a href="#" className="fa-solid fa-envelope" target="_blank"></a>
                    <span>admzoco@outlook.com</span>
                </div>
            </div>
        </div>
        <div className="contenedor-grupo-3">
            <div className="grupo-3">
                <small>&copy; 2023 <b>ZOCO MINIMARKET</b> - Todos los derechos reservados.</small>
            </div>
        </div>
    </div>
    );
};

export default Footer;