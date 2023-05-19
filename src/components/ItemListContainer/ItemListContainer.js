import "./ItemListContainer.css";
export const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="text-item-list">{props.greeting}</h2>
        </div>
    );
}
export default ItemListContainer;