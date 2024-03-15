import { useCarritoContext } from '../context/CartContext';
import { useCounter } from '../hooks/userCounter.js';


import React from 'react';

const ItemCart = ({ product }) => {
    const { removeItem, addItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stok, 1)
    return (
        <div className='flex items-center p-4 border-green-300'>
            <div className='mr-4'>
                <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className='w-24 h-24 object-cover' />
            </div>
            <div className='flex-1'>
                <h3 className='text-lg font-semibold'>{product.title}  </h3>
                <h3 className='text-lg '> {product.description}</h3>
                <p className='text-gray-500'> ${product.price} </p>
            </div>
            <div className='flex items-center'>

                <button className="bg-green-300 text-white px-4 py-2 rounded" onClick={() => {
                    decrement()
                    addItem(product, count)
                }}>
                    -
                </button>
                <span className="text-xl font-bold mx-5">{count}</span>
                <button className="bg-green-300 text-white px-4 py-2 rounded" onClick={() => {
                    increment()
                    addItem(product, count)
                }}>
                    +
                </button>
            </div>
            <div className='ml-4 mx-8'>
                <p className='text-lg font-semibold'>Subtotal: ${product.price * count} </p>
            </div>
            <div className=''>
                <button className='bg-red-500 text-white px4 py-2 rounded opacity-75' onClick={() => removeItem(product.id)}>
                    eliminar
                </button>
            </div>
        </div>
    );
}

export default ItemCart;
