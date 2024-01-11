import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import Item from "./Item";

const MyItems = () => {
    const { data: items, isLoading, error } = useFetchData('/api/my-items');

    const [ totalPrice, setTotalPrice ] = useState(0);

    function calculateTotal()
    {
        let total = 0;

        if (items) {
            items.forEach((item, index) => {
                total += item.cost * item.count;
            })
        }

        total = parseFloat(total).toFixed(2);

        setTotalPrice(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [items])

    return (
        <div className='item-list'>
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && items.map((item) => 
                <div key={ item.id }>
                    <Item item={ item } />
                </div> )}
            <div className="price-div">
                <hr className='price-div'></hr>
                    <p>Your total is: { totalPrice }</p>
            </div>
        </div>
    );
}
 
export default MyItems;