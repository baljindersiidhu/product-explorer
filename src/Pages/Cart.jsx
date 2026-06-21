import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Redux/Slices/CartSlice";
// import { removeFromCart, incrementQty, decrementQty } from "../Redux/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="w-11/12 max-w-4xl mx-auto py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                    <Link
                        to="/"
                        className="bg-indigo-600 text-white px-5 py-2 rounded-2xl hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
                        >
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                            />

                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-800 truncate">{item.title}</p>
                                <p className="text-indigo-600 font-semibold">${item.price.toFixed(2)}</p>
                            </div>

                            {/* Quantity stepper */}
                            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1.5">
                                <button onClick={() => dispatch(decreaseQuantity(item.id))}
                                    aria-label="Decrease quantity"
                                    // onClick={() => dispatch(decrementQty(item.id))}
                                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                                >
                                    <FaMinus size={12} />
                                </button>
                                <span className="w-5 text-center font-medium">{item.quantity}</span>
                                <button onClick={() => {
    console.log("Increase clicked", item.id);
    dispatch(increaseQuantity(item.id));
  }}
                                    aria-label="Increase quantity"
                                    // onClick={() => dispatch(incrementQty(item.id))}
                                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                                >
                                    <FaPlus size={12} />
                                </button>
                            </div>

                            <p className="w-20 text-right font-semibold text-gray-800">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>

                            <button onClick={() => {dispatch(removeFromCart(item.id)
                             );
                             toast.success("Product Removed from Cart") }}
                                aria-label="Remove item"
                                // onClick={() => dispatch(removeFromCart(item.id))}
                                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}

                    <div className="flex justify-end pt-4 border-t border-gray-200">
                        <div className="text-right">
                            <h2 className="text-xl font-bold text-gray-800">
                                Total: ${totalPrice.toFixed(2)}
                            </h2>
                            <button className="mt-3 bg-indigo-600 text-white px-6 py-2.5 rounded-2xl font-medium hover:bg-indigo-700 transition-colors duration-200">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;