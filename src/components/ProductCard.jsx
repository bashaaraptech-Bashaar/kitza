import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>

    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">

      <div className="relative bg-gray-100 p-6">

        <span className="absolute left-4 top-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>

        <FiHeart className="absolute right-4 top-4 text-2xl cursor-pointer hover:text-red-500 duration-300" />

        <img
          src={product.image}
          alt={product.name}
          className="h-64 mx-auto object-contain group-hover:scale-110 duration-300"
        />

      </div>

      <div className="p-5">

        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-3">

          <FaStar className="text-yellow-400" />

          <span className="text-gray-600">
            {product.rating}
          </span>

          <span className="text-gray-400">
            ({product.reviews})
          </span>

        </div>

        <div className="flex items-center gap-3 mt-4">

  {product.oldPrice && (
            <span className="line-through text-gray-400">
            Rs {product.oldPrice.toLocaleString()}
            </span>
          )}
          <span className="text-2xl font-bold">
           Rs {product.price.toLocaleString()}
          </span>

        

          {product.discount && (
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">
              {product.discount}
            </span>
          )}

        </div>

      </div>

    </div>
    </Link>
  );
}

export default ProductCard;