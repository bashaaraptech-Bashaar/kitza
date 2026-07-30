import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

function TopSelling(){

const topProducts = products.filter(
product=>product.section==="top"
);

return(

<section className="py-24 bg-[#fafafa]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-black text-center mb-4">
      TOP SELLING
    </h2>

    <div className="w-24 h-1 bg-[#4CAF50] mx-auto rounded-full mb-16"></div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
     {products
  .filter(product => product.section.includes("top"))
  .map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
))}
      
    </div>
     <div className="flex justify-center mt-14">

         <Link to="/shop">
  <button className="border-2 border-black rounded-full px-10 py-3 font-semibold hover:bg-[#4CAF50] hover:border-[#4CAF50] hover:text-white duration-300">
    View All
  </button>
</Link>

        </div>

  </div>
</section>
)

}

export default TopSelling;