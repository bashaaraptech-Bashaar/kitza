import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { productImages } from "../data/products";

function ProductCard({ product, priority = false }) {
  const imageSource = productImages[product.image] || product.image;

  return (
    <Link to={`/product/${product.id}`}>

      <div className="h-full bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden group">

        <div className="relative bg-gray-100 p-3 sm:p-6">

          <span className="absolute left-2 top-2 sm:left-4 sm:top-4 bg-green-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
            {product.badge}
          </span>

          <FiHeart className="absolute right-2 top-2 sm:right-4 sm:top-4 text-xl sm:text-2xl cursor-pointer hover:text-red-500 duration-300" />

          <img
            src={imageSource}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            width="320"
            height="320"
            className="h-40 sm:h-64 w-full mx-auto object-contain group-hover:scale-110 duration-300"
          />

        </div>

        <div className="p-3 sm:p-5">

          <h3 className="font-semibold text-sm sm:text-lg leading-tight">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 sm:gap-2 mt-3 text-sm sm:text-base">

            <FaStar className="text-yellow-400" />

            <span className="text-gray-600">
              {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.reviews})
            </span>

          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">

            {product.oldPrice && (
              <span className="line-through text-gray-500">
                Rs {product.oldPrice.toLocaleString()}
              </span>
            )}

            <span className="text-lg sm:text-2xl font-bold">
              Rs {product.price.toLocaleString()}
            </span>

            {product.discount && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs sm:text-sm">
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