import { useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import Item from "./Item";

const ItemList = () => {
    const { data: items, isLoading, error } = useFetchData('/api/items')
    const { data: objectTypes } = useFetchData('/api/object-types')

    const [ type, setType ] = useState('');
    const [ filter, setFilter ] = useState('');
    const [ searchQuery, setSearchQuery ] = useState('');

    function filterChange(e)
    {
        setType(e.target.value)
        setFilter(e.target.value)
    }

    return (
        <div className="item-list">
            <div className="filter-options">
                <div className="search">
                    <input
                        type='text'
                        placeholder='Search...'
                        className='search'
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="filter">
                    <h3>Filter options</h3>
                    { objectTypes && 
                    <select
                        value={ type }
                        onChange={ filterChange }
                    >
                        <option value={ '' }>no filter</option>

                        { objectTypes && objectTypes.map((objectType, index) => (
                            <option key={ index } value={ objectType }>{ objectType }</option>
                        )) }
                    </select> }
                </div>
            </div>
            { error && <div>Could not fetch resource</div> }
            { isLoading && <div className="loading">Loading...</div> }
            { items && items.filter((item) => {
                if (!filter)
                    return item.name.toLowerCase().includes(searchQuery)
                else
                    return item.type === filter && item.name.toLowerCase().includes(searchQuery)
            }).map((item) =>
                <div key={ item.id } className='item-grid'>
                    <Item item={ item } />
                </div> )}
        </div>
    );
}

export default ItemList;