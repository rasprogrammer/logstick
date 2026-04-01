// components/ProductCard.jsx
import Image from "next/image";

export default function NewArrivalProduct({ product }: {
    product: any 
}) {
  return (
    <div className="bg-white h-[500px] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-3 group">
      
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl">
        
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-2 py-1 rounded-md">
          {product.discount}
        </span>

        {/* Image Wrapper */}
        <div className="relative w-full h-[385px] overflow-hidden">
          
          {/* Image 1 */}
          <Image
            src={product.img1}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
          />

          {/* Image 2 */}
          <Image
            src={product.img2}
            alt={product.name}
            fill
            className="object-cover translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out absolute top-0 left-0"
          />
        </div>

        {/* Quick View Button */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-black text-white text-sm px-4 py-2 rounded-lg">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 px-1">
        <h3 className="text-md font-bold text-blue-600">
          {product.name}
        </h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-red-600 font-semibold">
            ₹{product.discount}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ₹{product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}