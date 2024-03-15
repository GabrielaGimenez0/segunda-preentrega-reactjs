import { useRef } from 'react';
import { useCarritoContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../firebase/firebase.js';


import React from 'react';

const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate()
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)

        //generar orden de compra

        //modificar stok
        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stok >= prodCarrito.quantity) {
                    prodBDD.stok -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`✨ El producto con el nombre ${prod.title} no puede ser comprado porque no tiene stock`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id)
                }
            })
        })

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Gracias por su compra. Su ID de compra es: ${ordenCompra.id}. Su total de compra es: $ ${totalPrice()}. Nos contataremos con usted para realizar el envío`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`😭 Error al generar la orden de compra: ${e}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })


    }

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2 className='text-2xl' >Para finalizar compra debe agregar productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className='bg-green-300 rounded-lg my-5 m-8'>
                                volver al inicio
                            </button>
                        </Link>
                    </>
                    :

                    <div className='max-w-md mx-auto p-6 mt-2 bg-green-300 rounded-md shadow-md'>
                        <form action="" ref={formRef} onSubmit={handleSubmit} >
                            <label className='block mb-1 text-gray-700'>Nombre:</label>
                            <input type="text" className='w-full p-2 mb-3 border rounded-md' name='nombre' />
                            <label className='block mb-1 text-gray-700'>Apellido: </label>
                            <input type="text" className='w-full p-2 mb-3 border rounded-md' name='apellido' />
                            <label className='block mb-1 text-gray-700'>Direccion: </label>
                            <input type="text" className='w-full p-2 mb-3 border rounded-md' name='direccion' />
                            <label className='block mb-1 text-gray-700'>DNI: </label>
                            <input type="number" className='w-full p-2 mb-3 border rounded-md' name='dni' />
                            <label className='block mb-1 text-gray-700'>Email: </label>
                            <input type="email" className='w-full p-2 mb-3 border rounded-md' name='email' />
                            <label className='block mb-1 text-gray-700'>Telefono</label>
                            <input type="number" className='w-full p-2 mb-3 border rounded-md' name='telefono' />
                            <button type='submit' className='w-full p-2 bg-green-500 text-white rounded-md'>Finalizar compra</button>

                        </form>
                    </div>
            }

        </>

    );
}

export default Checkout;
