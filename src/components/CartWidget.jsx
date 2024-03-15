import { FaShoppingCart } from "react-icons/fa";
import { useCarritoContext } from "../context/CartContext";
import { Link } from "react-router-dom";




export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <li className="text-white">
            <Link to={'/cart'}>
                <button className="text-white h-20 w-20 flex items-center justify-evenly">
                    <FaShoppingCart />
                    <span> {getItemQuantity()} </span>
                </button>
            </Link>
        </li>
    )
}