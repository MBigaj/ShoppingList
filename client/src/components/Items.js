import { useState, useEffect } from "react";

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/items')
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setItems(data);
        })
    }, [])

    return (
        <div>
            { items ? items.map((item) => <h3>{ item.itemName }</h3>) : '' }
        </div>
    );
}
 
export default Items;