import { useCounter } from '../hooks/userCounter';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCarritoContext } from '../context/CartContext';



import React from 'react';




const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stok, 1)

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`👍🏼 Producto agregado correctamente`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }

    return (

        <div className='rounded-lg max-w-md bg-green-50 m-10'>
            <Link to={'/'} >
                <button className='bg-green-300 rounded-lg opacity-50'>Cerrar</button>
            </Link>

            <img src={`${item.img}`} alt={`Imagen de ${item.title} `} />

            <div className='m-20'>
                <h2 className="underline decoration-wavy"> {item.title} </h2>
                <p className="font-bold"> {item.description} </p>
                <p>Precio: {item.price} </p>
                <p>Stock: {item.stok} </p>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4">
                        <button className="bg-green-300  px-4 py-2 rounded font-bold" onClick={decrement}>
                            -
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="bg-green-300  px-4 py-2 rounded font-bold" onClick={increment}>
                            +
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ItemDetail;
