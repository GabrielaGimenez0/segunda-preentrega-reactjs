import Item from './Item';
import React from 'react';

const ItemList = ( {products}) => {
    return (
        <>
          {products.map(prod => <Item product= {prod} />)}  
        </>
    );
}

export default ItemList;
