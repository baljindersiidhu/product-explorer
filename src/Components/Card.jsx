import { useNavigate } from "react-router-dom";
function Card({ product }) {
    const navigate=useNavigate();
    return (
        <div onClick={()=>{
            navigate(`/product/${product.id}`)
        }} className="group  bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full max-w-xs">
            <div className="relative overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48   transition-transform duration-500 group-hover:scale-110"
                />
                {product.discountPercentage > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                        -{Math.round(product.discountPercentage)}%
                    </span>
                )}
            </div>

            <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 truncate group-hover:text-indigo-600 transition-colors duration-300">
                    {product.title}
                </p>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-3">
                    <p className="text-xl font-bold text-gray-900">
                        ${product.price}
                    </p>

                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-sm font-medium px-2 py-0.5 rounded-full">
                        <svg
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.299.921-.756 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.31 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                        {product.rating}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;