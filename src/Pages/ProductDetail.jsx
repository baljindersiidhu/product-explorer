import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }

        fetchData();
    }, [id]);

    // Guard: don't render product details until data has loaded
    if (!product) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const inStock = product.stock > 0;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Left: Image */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
                    <img
                        src={product.thumbnail || product.images?.[0]}
                        alt={product.title}
                        className="w-full h-80 object-contain rounded-xl"
                    />
                </div>

                {/* Right: Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        {/* Title + Rating */}
                        <h1 className="text-2xl font-bold text-gray-900">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-2 mt-2">
                            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-sm font-medium px-2 py-0.5 rounded-full">
                                <svg
                                    className="w-4 h-4 text-yellow-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.299.921-.756 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.31 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                                {product.rating}
                            </span>
                            <span className="text-sm text-gray-500">
                                ({product.reviews?.length ?? 0} reviews)
                            </span>
                        </div>

                        {/* Price + Discount */}
                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-3xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    -{Math.round(product.discountPercentage)}% OFF
                                </span>
                            )}
                        </div>

                        {/* Brand / Category / Stock */}
                        <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                            <div>
                                <span className="text-gray-500">Brand</span>
                                <p className="font-medium text-gray-800">{product.brand}</p>
                            </div>
                            <div>
                                <span className="text-gray-500">Category</span>
                                <p className="font-medium text-gray-800 capitalize">
                                    {product.category}
                                </p>
                            </div>
                            <div>
                                <span className="text-gray-500">Stock</span>
                                <p className="font-medium text-gray-800">{product.stock} units</p>
                            </div>
                            <div>
                                <span className="text-gray-500">Status</span>
                                <p
                                    className={`font-medium ${
                                        inStock ? "text-green-600" : "text-red-600"
                                    }`}
                                >
                                    {inStock ? "In Stock" : "Out of Stock"}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-5">
                            <h3 className="text-sm font-semibold text-gray-700 mb-1">
                                Description
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                        <button
                            disabled={!inStock}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                        <button className="flex items-center justify-center w-14 h-14 border border-gray-300 hover:border-red-400 hover:bg-red-50 rounded-xl transition-colors duration-300 group">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                ❤️
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;