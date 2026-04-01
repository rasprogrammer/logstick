"use client";

import NewArrivalProduct from "./NewarrivalProduct";
import new_arrival_1 from "../public/Images/New-Arrival/new-arrival-1.png";
import new_arrival_11 from "../public/Images/New-Arrival/new-arrival-1-1.png";
import executiveChair1 from "../public/Images/New-Arrival/new-arrival-1-1.png";
import new_arrival_2 from "../public/Images/New-Arrival/new-arrival-2.png";
import new_arrival_22 from "../public/Images/New-Arrival/new-arrival-2-2.png";
import new_arrival_3 from "../public/Images/New-Arrival/new-arrival-3.png";
import new_arrival_33 from "../public/Images/New-Arrival/new-arrival-3-3.png";
import new_arrival_4 from "../public/Images/New-Arrival/new-arrival-4.png";
import new_arrival_44 from "../public/Images/New-Arrival/new-arrival-4-4.png";
import new_arrival_5 from "../public/Images/New-Arrival/new-arrival-5.png";
import new_arrival_55 from "../public/Images/New-Arrival/new-arrival-5-5.png";
import new_arrival_6 from "../public/Images/New-Arrival/new-arrival-6.png"; 
import new_arrival_66 from "../public/Images/New-Arrival/new-arrival-6-6.png";
import new_arrival_7 from "../public/Images/New-Arrival/new-arrival-7.png";
import new_arrival_77 from "../public/Images/New-Arrival/new-arrival-7-7.png";
import new_arrival_8 from "../public/Images/New-Arrival/new-arrival-8.png";
import new_arrival_88 from "../public/Images/New-Arrival/new-arrival-8-8.png";

import executiveChair2 from "../public/Images/New-Arrival/new-arrival-1-1.png";
import conferenceChair1 from "../public/Images/New-Arrival/new-arrival-1-1.png";
import conferenceChair2 from "../public/Images/New-Arrival/new-arrival-1-1.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Vikoz",
    originalPrice: 17000,
    salePrice: 14500,
    discount: -14.71,
    isNew: false,
    href: "/products/vikoz",
    img1: new_arrival_1,
    img2: new_arrival_1,
  },
  {
    id: 2,
    name: "Neim",
    originalPrice: 16500,
    salePrice: 13500,
    discount: -18.18,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_2,
    img2: new_arrival_22,
  },
   {
    id: 3,
    name: "Dreween",
    originalPrice: 15000,
    salePrice: 13500,
    discount: -10,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_3,
    img2: new_arrival_33,
  },
     {
    id: 4,
    name: "Amequi",
    originalPrice: 10000,
    salePrice: 8000,
    discount: -15,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_4,
    img2: new_arrival_44,
  },
   {
    id: 5,
    name: "Enreet",
    originalPrice: 11000,
    salePrice: 8750,
    discount: -20.45,
    isNew: false,
    href: "/products/vikoz",
    img1: new_arrival_5,
    img2: new_arrival_55,
  },
  {
    id: 6,
    name: "Colure",
    originalPrice: 10000,
    salePrice: 7500,
    discount: -25,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_6,
    img2: new_arrival_66,
  },
   {
    id: 7,
    name: "Artibre",
    originalPrice: 9500,
    salePrice: 7000,
    discount: -26.32,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_7,
    img2: new_arrival_77,
  },
     {
    id: 8,
    name: "Asene",
    originalPrice: 18000,
    salePrice: 14500,
    discount: -19.44,
    isNew: false,
    href: "/products/dreween",
    img1: new_arrival_8,
    img2: new_arrival_88,
  }

];

export default function NewArrival() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-gray-900 mb-4">
            New Arrival
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-10 h-1 bg-red-700 rounded" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <NewArrivalProduct key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}