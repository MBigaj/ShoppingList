import { useState } from 'react';
import plus from '../icons/plus_icon.svg';
import ItemImageArr from './auxilary/ItemImages';

const Item = ({ item }) => {
    const mapHidden = { true: 'hidden', false: ''}
    const [ isHidden, setIsHidden ] = useState(Boolean(item.count));
    const [ itemCount, setItemCount ] = useState(item.count);

    const handleSend = (e) => {
        const addedItem = { 
            id: item.id,
            name: item.name,
            type: item.type,
            cost: item.cost,
            count: itemCount,
            imageId: item.imageId 
        }

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
        let newCount = itemCount ? 0 : 1;
        setIsHidden(!isHidden);
        setItemCount(newCount);
        handleSend();
    }

    function addCount()
    {
        if (itemCount === 99)
            return;

        let newCount = itemCount + 1;
        setItemCount(newCount);
    }

    function substractCount()
    {
        let newCount = itemCount - 1;
        setItemCount(newCount);

        if (newCount === 0)
            setIsHidden(!isHidden);
    }

    return (
        <div key={ item.id }>
            <div className="item-name">
                { item.name }
            </div>

            <div className="item-name">
                { item.cost } PLN
            </div>

            <div>
                <img 
                src={ ItemImageArr[item.imageId] }
                alt={ item.name }
                className='item-image' 
                />
            </div>

            <button 
                id={ item.id }
                style={{ visibility: mapHidden[isHidden] }}
                className="item-button"
                onClick={ swapVisibility }>
                <img src={ plus } alt='plus' className='plus-icon'/>
            </button>

            <div className="counter-block" style={{ visibility: mapHidden[!isHidden] }}>
                <button className="substract" onClick={ substractCount } onMouseLeave={ handleSend }>-</button>
                <p>{ itemCount }</p>
                <button className="add" onClick={ addCount } onMouseLeave={ handleSend }>+</button>
            </div>
        </div>
    );
}
 
export default Item;