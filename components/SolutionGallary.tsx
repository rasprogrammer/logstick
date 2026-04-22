"use client";

import { useState } from "react";
import ArrowRight from "./icons/ArrowRight";
import { BASE_URL } from "@/config";

export interface SolutionGalleryType {
    subtitle: string;
    description: string; 
    images: string[];
}

export default function SolutionGallary ({ heading, list }: { 
    heading: string;
    list: SolutionGalleryType[] 
}) {

    const [activeImg, setActiveImg] = useState(0);

    return (
        <>
            <div>
                <h2 className="text-4xl text-center p-5 text-red-900 font-semibold">{heading}</h2>
            </div>

            {list.map((item, i__) => (

                <article key={i__} className="relative bg-white border border-[#e8e0d8] overflow-hidden
                transition-all duration-300 hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] group pt-5 mt-5">

                    {/* Sub Title  */}
                    <h5 className="text-center text-xl font-bold p-2">{item.subtitle}</h5>

                    {/* Description */}
                    <p className="text-center p-2">{item.description}</p>
            
                    {/* Thumbnails */}
                    <div className="flex gap-1 p-1.5 bg-[#f5f1ec]">
                        {item.images.map((src, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImg(i)}
                            aria-label={`View image ${i + 1}`}
                            className={`flex-1 aspect-[4/3] overflow-hidden border-2 p-0
                            bg-transparent cursor-pointer transition-all duration-200
                            ${activeImg === i ? "border-[#c8a96e]" : "border-transparent hover:border-[#c8a96e]/40"}`}
                        >
                            <img src={src} alt="" className="w-full h-full object-cover" />
                        </button>
                        ))}
                    </div>
                </article>
            ))}
        </>
    )
}