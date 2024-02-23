import { Link} from "react-router-dom"

import React from 'react';

const Item = ({product}) => {
    return (
        <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
            <img src= {`../imagen/${product.img}`}  alt= {`Imagen de ${product.title}` }/>
            <h2> {product.title} {product.description} </h2>
            
            
            <div>
                <span>Precio:${product.price} </span>
                <Link to= {`/product/${product.id}` } >
                    <button className='bg-yellow-900 rounded-full text-gray-200 px-8 py-5 mx-8 my-8'>
                    ver producto
                </button>
                </Link>
                
            </div>
        </div>
    );
}

export default Item;
