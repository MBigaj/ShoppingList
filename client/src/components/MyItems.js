import useFetchData from '../hooks/useFetchData';
import Item from "./Item";

const MyItems = () => {
    const { data: items, isLoading, error } = useFetchData('/api/my-items');

    return (
        <div className="item-list">
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && items.map((item) => 
                <div key={ item.id }>
                    <Item item={ item } />
                </div> )}
        </div>
    );
}
 
export default MyItems;