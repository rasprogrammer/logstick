"use client";
import { ProductType } from "@/api/category";
import { useState } from "react";

interface ProductProps {
  product: ProductType;
}

export default function Product({ product }: ProductProps) {
  const [count, setCount] = useState(1); // Start with 1 instead of 0

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => Math.max(1, prev - 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setCount(isNaN(num) ? 0 : num);
  };

  const handleWhatsAppBuy = () => {
    const phoneNumber = "1234567890"; // Replace with your number
    const message = `Hello, I'd like to buy ${count} x ${product.name}`;
    const url = `https://wa.me{phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h2 className="text-4xl text-center font-semibold mb-10">{product.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="min-h-[400px] bg-blue-100 flex items-center justify-center rounded-xl">
          <img src={product.img1 || "/placeholder.png"} alt={product.name} className="max-h-full" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-md font-semibold text-gray-600">{product.description}</p>
          
          <div className="border-y-2 my-5 flex flex-col py-10">
            <h5 className="text-3xl font-bold">${product.price}</h5>
            <span className="bg-red-700 text-white font-semibold text-sm inline-block w-fit mt-2 py-1 px-3 rounded-lg">
              Free Shipping
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={handleDecrement}
                className="bg-red-800 text-white font-bold py-4 px-6 hover:bg-red-900 transition"
              >
                -
              </button>
              <input
                type="number"
                value={count}
                onChange={handleChange}
                className="w-16 outline-none text-center font-semibold"
              />
              <button 
                onClick={handleIncrement}
                className="bg-red-800 text-white font-bold py-4 px-6 hover:bg-red-900 transition"
              >
                +
              </button>
            </div>

            <button
              onClick={handleWhatsAppBuy}
              className="bg-green-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-700 transition"
            >
              BUY VIA WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
