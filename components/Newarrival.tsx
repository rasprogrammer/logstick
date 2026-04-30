"use client";

import NewArrivalProduct from "./NewarrivalProduct";
import new_arrival_1 from "../public/Images/New-Arrival/new-arrival-1.png";
import new_arrival_11 from "../public/Images/New-Arrival/new-arrival-1-1.png";
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

import { ProductType } from "@/api/category";

const PRODUCTS: ProductType[] = [
    {
        id: "vikoz",
        name: "Vikoz",
        price: 14500,
        originalPrice: 17000,
        currency: "USD",
        discount: "-14.71%",
        img1: new_arrival_1.src,
        img2: new_arrival_11.src,
    },
    {
        id: "neim",
        name: "Neim",
        price: 13500,
        originalPrice: 16500,
        currency: "USD",
        discount: "-18.18%",
        img1: new_arrival_2.src,
        img2: new_arrival_22.src,
    },
    {
        id: "dreween",
        name: "Dreween",
        price: 13500,
        originalPrice: 15000,
        currency: "USD",
        discount: "-10%",
        img1: new_arrival_3.src,
        img2: new_arrival_33.src,
    },
    {
        id: "amequi",
        name: "Amequi",
        price: 8000,
        originalPrice: 10000,
        currency: "USD",
        discount: "-15%",
        img1: new_arrival_4.src,
        img2: new_arrival_44.src,
    },
    {
        id: "enreet",
        name: "Enreet",
        price: 8750,
        originalPrice: 11000,
        currency: "USD",
        discount: "-20.45%",
        img1: new_arrival_5.src,
        img2: new_arrival_55.src,
    },
    {
        id: "colure",
        name: "Colure",
        price: 7500,
        originalPrice: 10000,
        currency: "USD",
        discount: "-25%",
        img1: new_arrival_6.src,
        img2: new_arrival_66.src,
    },
    {
        id: "artibre",
        name: "Artibre",
        price: 7000,
        originalPrice: 9500,
        currency: "USD",
        discount: "-26.32%",
        img1: new_arrival_7.src,
        img2: new_arrival_77.src,
    },
    {
        id: "asene",
        name: "Asene",
        price: 14500,
        originalPrice: 18000,
        currency: "USD",
        discount: "-19.44%",
        img1: new_arrival_8.src,
        img2: new_arrival_88.src,
    }
];

export default function NewArrival() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <NewArrivalProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
