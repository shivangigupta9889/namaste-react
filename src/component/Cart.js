import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{

    const cartitems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(clearCart())};


    return <div className="m-4 p-4 text-center">
        <h1 className="text-2xl font-bold"> Cart</h1>
        <div className="w-6/12 m-auto">
        <ItemList items={cartitems} />
        <button className="m-4 p-4 bg-black text-white rounded-lg " 
        onClick={handleClick}
        >Clear Cart</button>
        </div>
    </div>
}
export default Cart