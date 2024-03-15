import { Link } from 'react-router-dom';
import { useCarritoContext } from "../context/CartContext";
import ItemList from './ItemList';



import React from 'react';

const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacío</h1>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                            <Link to={'/'} >
                                volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<ItemList products={carrito} plantilla="itemCart" />}
                        <div>
                            <p>Resumen de la compra: {totalPrice()} </p>
                            <button className="bg-green-500 text-white px-4 py-2 rounded m-2" onClick={emptyCart}>
                                vaciar carrito
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded m-2">
                                <Link to={'/'} >
                                    continuar comprando
                                </Link>
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded m-2">
                                <Link to={'/checkout'} >
                                    finalizar compra
                                </Link>
                            </button>

                        </div>
                    </div>





            }
        </>
    );
}

export default Cart;
