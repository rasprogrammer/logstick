"use client";

import { Minus, SlidersHorizontal } from "lucide-react";

export default function Filter() {
  return (
    <div className="w-full bg-white p-6 border border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <SlidersHorizontal size={22} className="text-black" />

        <h2 className="text-4xl font-semibold text-black">
          Filters
        </h2>
      </div>

      {/* Ribbons */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-semibold text-black">
            Ribbons
          </h3>

          <Minus size={18} />
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 accent-red-700 cursor-pointer"
            />

            <span className="text-gray-700 group-hover:text-red-700 transition">
              New (8)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 accent-red-700 cursor-pointer"
            />

            <span className="text-gray-700 group-hover:text-red-700 transition">
              On Sale (1)
            </span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-semibold text-black">
            Price
          </h3>

          <Minus size={18} />
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="price"
              className="accent-red-700"
            />
            <span className="text-gray-700">₹0 - ₹10,000</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="price"
              className="accent-red-700"
            />
            <span className="text-gray-700">₹10,000 - ₹25,000</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="price"
              className="accent-red-700"
            />
            <span className="text-gray-700">₹25,000 - ₹50,000</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="price"
              className="accent-red-700"
            />
            <span className="text-gray-700">₹50,000+</span>
          </label>
        </div>
      </div>

      {/* Material */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-semibold text-black">
            Material
          </h3>

          <Minus size={18} />
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="accent-red-700"
            />
            <span className="text-gray-700">Wood</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="accent-red-700"
            />
            <span className="text-gray-700">Metal</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="accent-red-700"
            />
            <span className="text-gray-700">Engineered Wood</span>
          </label>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-3 font-medium hover:bg-red-700 transition-all duration-300">
        Apply Filters
      </button>
    </div>
  );
}