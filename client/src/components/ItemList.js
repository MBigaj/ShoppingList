import useFetchData from '../hooks/useFetchData';
import Item from "./Item";

const ItemList = () => {
    const { data: items, isLoading, error } = useFetchData('/api/items');

    return (
        <div className="item-list">
            { console.log(items) }
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && items.map((item) => 
                <div key={ item.id }>
                    <Item item={ item } />
                </div> )}
        </div>
    );
}

export default ItemList;