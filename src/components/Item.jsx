import { Link } from "react-router-dom"

import React from 'react';

const Item = ({ product }) => {
    return (
        <div className=" max-w-xs mx-auto bg-green-100 p-3 rounded-md shadow-md">
            <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
            <h2 className="underline decoration-wavy"> {product.title}  </h2>
            <p className="font-bold"> {product.description}</p>


            <div>
                <span>Precio: ${product.price} </span>
                <Link to={`/product/${product.id}`} >
                    <button className='bg-green-500 rounded-full text-gray-200 px-8 py-5 mx-8 my-8'>
                        ver producto
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Item;
