import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import Item from "./Item";
import refresh from "../icons/refresh-icon.svg";

const MyItems = () => {
    const { data: items, isLoading, error } = useFetchData('/api/my-items');

    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        let total = 0;

        if (items) {
            items.forEach((item, index) => {
                total += item.cost * item.count;
            })
        }

        total = parseFloat(total).toFixed(2);

        setTotalPrice(total);
    }, [items])

    return (
        <div className='item-list'>
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && items.map((item) => 
                <div key={ item.id } className='item-grid'>
                    <Item item={ item } />
                </div> )}
            <div className="price-div">
                <hr></hr>
                <div className="total-price">
                    <h2>Your total is: { totalPrice } PLN</h2>
                    <button 
                        className='refresh'
                        onClick={ () => window.location.reload(false) }>
                        <img src={ refresh } alt='refresh' className='refresh-icon'/>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default MyItems;