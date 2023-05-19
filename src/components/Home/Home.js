import Navbar from "../Navbar/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
const Home = () => {
    return (
        <>
            <Navbar />
            <CartWidget />
            <ItemListContainer 
            greeting="Bienvenido a Zoco Minimarket!"
            />
        </>
    );
};

export default Home;