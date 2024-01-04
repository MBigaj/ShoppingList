import { useState, useEffect } from "react";

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Fetching data');

        fetch('/api/items')
        .then((res) => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setItems(data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <div>
            { items ? items.map((item) => <h3 key={ item.id }>{ item.itemName }</h3>) : '' }
        </div>
    );
}
 
export default Items;