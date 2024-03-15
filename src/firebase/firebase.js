import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFukn2IbVj8fEyFNuXw_nuLqIxvE2A4lk",
    authDomain: "react-2024-4b2d5.firebaseapp.com",
    projectId: "react-2024-4b2d5",
    storageBucket: "react-2024-4b2d5.appspot.com",
    messagingSenderId: "542954875677",
    appId: "1:542954875677:web:6e7afb126adc55d9030ff4"
};


const app = initializeApp(firebaseConfig);

//consultar bbd
const bdd = getFirestore()

const prods = [
    {
        "title": "Caja cartón Marrón",
        "price": 100,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/1.jpg?alt=media&token=80672753-cfec-4db7-a2b7-bff6299adb55",
        "description": "Caja 30cm x 40cm x 5cm",
        "category": "category1"

    },

    {
        "title": "Caja cartulina banca",
        "price": 150,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/2.jpg?alt=media&token=8119f4db-5ec9-4652-ba7f-bc998893e718",
        "description": "Caja frente cristal 20cm x 20cm x 30cm",
        "category": "category1"
    },

    {
        "title": "Caja cartón Marrón",
        "price": 200,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/3.jpg?alt=media&token=d051b962-3e35-41a5-8f9c-e2a13647563e",
        "description": "Caja pizza 50cm x 50cm x 5cm",
        "category": "category1"
    },

    {
        "title": "Caja cartón Marrón",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/4.jpg?alt=media&token=eeb43553-0a08-4c08-8d32-86735bd1a717",
        "description": "Caja contenedora 20cm x 20cm x 30cm",
        "category": "category1"
    },

    {
        "title": "Caja cartulina multicolor",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/5.jpg?alt=media&token=935cb695-6cac-42d4-9193-be9958cde01b",
        "description": "Caja cartulina 30cm x 30cm x 20cm",
        "category": "category1"
    },

    {
        "title": "Caja cartulina roja",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/6.jpg?alt=media&token=89fb962e-649c-4f1f-bec4-747b9a8be37c",
        "description": "Caja contenedora 10cm x20cmx 5cm",
        "category": "category1"
    },

    {
        "title": "Caja cartulina dorada",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/7.jpg?alt=media&token=26988d40-83a1-433f-86b5-dd1a39ccf318",
        "description": "Caja contenedora 10cm x10cmx 6cm",
        "category": "category1"
    },

    {
        "title": "Caja cartulina roja",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/8.jpg?alt=media&token=e0f297ab-65c6-4d9c-b02e-7363321eb08d",
        "description": "Caja contenedora 20cm x20cmx 30cm",
        "category": "category1"
    },

    {
        "title": "Caja cartulina banca",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/9.jpg?alt=media&token=b7ef58a6-bf98-44b6-a640-f1fb1df84ac1",
        "description": "Caja contenedora 24cm x24cmx 30cm",
        "category": "category1"
    },


    {
        "title": "Caja cartulina banca",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/10.jpg?alt=media&token=66f0674d-8968-40c0-ae0e-30c171de3f4f",
        "description": "Caja contenedora 30cm x 20cm x 15cm",
        "category": "category1"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/11.jpg?alt=media&token=3cd5c79e-9025-409f-84d2-d2a2afc0f657",
        "description": "Frasco de mermelada 360cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/12.jpg?alt=media&token=38900174-57cb-4f56-9ea3-d40f1d2bbd1a",
        "description": "Frasco de mermelada 60cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/13.jpg?alt=media&token=3887a4dd-48ad-4cf8-a72c-b27de316ad0f",
        "description": "Botella 360cc",
        "category": "category2"

    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/14.jpg?alt=media&token=6b3a1f37-e25b-414a-9308-909f91ac837f",
        "description": "Botella 350cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/15.jpg?alt=media&token=bead9b67-3cad-414a-bcfa-233f66cbced7",
        "description": "Frasco de mermelada hexagonal 360cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/16.jpg?alt=media&token=9741310f-42a0-4195-b9b1-eaf1f5fb0a52",
        "description": "Frasco de mermelada 250cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/17.jpg?alt=media&token=9f11994a-e848-4b77-96f6-a4e506955cd5",
        "description": "Botella ámbar 250cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/18.jpg?alt=media&token=68bae8ab-2cd6-43e1-a774-807e0c43344f",
        "description": "Botella con asa 750cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/19.jpg?alt=media&token=708d730b-fe14-4695-895d-93e8a247628d",
        "description": "Botella  360cc",
        "category": "category2"
    },

    {
        "title": "Frasco vidrio",
        "price": 250,
        "stok": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-4b2d5.appspot.com/o/20.jpg?alt=media&token=b41ed7c4-9c88-4d4c-a0bc-6b87838bfd07",
        "description": "Botella 250cc",
        "category": "category2"
    }
]

//crear producto
export const createProducts = async () => {
    prods.forEach(async (prod) => {
        const rta = await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            price: prod.price,
            stok: prod.stok,
            img: prod.img,
            description: prod.description,
            category: prod.category
        })
    })

}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}


export const updateProduct = async (id, info) => {
    await updateDoc(doc, (bdd, "productos", id), info)
}


export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

// Create and read ordenes de compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordennesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })

    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
