import Item from './Item';
import ItemCart from './ItemCart';

import React from 'react';

const ItemList = ({ products, plantilla }) => {
  return (
    <>
      {
        plantilla === 'Item'
          ?
          products.map(prod => <Item key={prod.id} product={prod} />)
          :
          products.map(prod => <ItemCart key={prod.id} product={prod} />)
      }

    </>
  );
}

export default ItemList;
