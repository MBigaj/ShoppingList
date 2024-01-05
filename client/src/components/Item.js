const Item = ({ items }) => {

    return (
        <div className='item'>
            { items.map((item) => <h3 key={ item.id }>{ item.itemName }</h3>) }
        </div>
    );
}
 
export default Item;