import "./CartWidget.css";
import { RiShoppingCartLine } from 'react-icons/ri';
const CartWidget = () => {
  return (
    <div className="seeCarrito">
      <span className="badge text-bg-secondary contador">{3}</span>
      <RiShoppingCartLine />
    </div>
  );
};

export default CartWidget;
