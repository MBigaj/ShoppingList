import { useState } from 'react';
import plus from '../icons/plus_icon.svg';

const Item = ({ item }) => {
    const mapHidden = { true: 'hidden', false: ''}

    const [ isHidden, setIsHidden ] = useState(Boolean(item.count));
    const [ itemCount, setItemCount ] = useState(item.count);

    const handleSend = (e) => {
        const addedItem = { id: item.id, name: item.name, cost: item.cost, count: itemCount }

        fetch('/api/new-item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addedItem)
        }).then(() => {
            console.log('Item sent', addedItem);
        })
    }

    function swapVisibility()
    {
        let newCount = 1;
        setIsHidden(!isHidden);
        setItemCount(newCount);
        handleSend(newCount);
    }

    function addCount()
    {
        if (itemCount === 99)
            return;

        let newCount = itemCount + 1;
        setItemCount(newCount);
        handleSend(newCount);
    }

    function substractCount()
    {
        let newCount = itemCount - 1;
        setItemCount(newCount);

        if (newCount === 0)
            setIsHidden(!isHidden);

        handleSend(newCount);
    }

    return (
        <div key={ item.id }>
            <p className='label'>{ item.name }</p>

            <button 
                id={ item.id }
                style={{ visibility: mapHidden[isHidden] }}
                className="item-button"
                onClick={ swapVisibility }>
                <img src={ plus } alt='plus' className='plus-icon'/>
            </button>

            <div className="counter-block" style={{ visibility: mapHidden[!isHidden] }}>
                <button className="substract" onClick={ substractCount }>-</button>
                <p>{ itemCount }</p>
                <button className="add" onClick={ addCount }>+</button>
            </div>
        </div>
    );
}
 
export default Item;