

import React from 'react';




const ItemDetail = ( {item} ) => {
    return (
        <div className='bg-white p-8 rounded-lg max-w-md'>
            <img src={`../img/${item.img} `} alt={`Imagen de ${item.title} `} />
            <div className='class-center'></div>
            <h2> {item.title} </h2>
            <p> {item.description} </p>
            <p>Precio: {item.price} </p>
            <p>Stock: {item.stok} </p>
        </div>
    );
}

export default ItemDetail;
