import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
const App = () => {
    return (
        <DataProvider>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/container" element={<ItemListContainer />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </DataProvider>
    );
};

export default App;
