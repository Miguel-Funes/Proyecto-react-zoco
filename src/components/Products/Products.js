import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
const { data } = useContext(dataContext);
console.log(data)
    return(
        <div className="cardContainer">
            { data.map((product)=> {
        return (
            <div className="card">
                <img className="photo" src={product.img}/>
                <h3 className="text">{product.nombre}</h3>
                <h4 className="price">{product.valor + product.precio}</h4>
                <button className="button">Agregar al carrito</button>
            </div>
        )
    })}
        </div>
    )
};

export default Products;