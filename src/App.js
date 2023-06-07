import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
const App = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                    <Route path="/container" element={<ItemListContainer />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
};

export default App;
