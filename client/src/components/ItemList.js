import useFetchData from '../hooks/useFetchData';
import Item from "./Item";

const ItemList = () => {
    const { data: items, isLoading, error } = useFetchData('/api/items');

    return (
        <div className="item-list">
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && <Item items={items} /> }
        </div>
    );
}

export default ItemList;