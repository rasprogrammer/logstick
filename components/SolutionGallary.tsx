"use client";

import { useState } from "react";
import ArrowRight from "./icons/ArrowRight";

export interface SolutionGalleryType {
    id: string;
    title: string;
    subtitle: string;
    description: string; 
    tag: string;
    images: string[];
}

export default function SolutionGallary ({ list }: { list: SolutionGalleryType[] }) {

    const [activeImg, setActiveImg] = useState(0);

    return (
        <>
            {list.map((item, i__) => (

            <article key={i__} className="relative bg-white border border-[#e8e0d8] overflow-hidden
            transition-all duration-300 hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] group">
        
            {/* Tag badge */}
            <span className="absolute top-4 left-4 z-10 bg-[#c8a96e] text-white
                font-['Cormorant_Garamond',Georgia,serif] text-[10px] tracking-[0.14em]
                uppercase px-3 py-1 pointer-events-none">
                {item.tag}
            </span>
        
            {/* Main image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                src={item.images[activeImg]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out
                    group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
        
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
        
            {/* Card body */}
            <div className="px-7 pt-6 pb-7">
                <span className="font-['Cormorant_Garamond',Georgia,serif] text-[12px]
                tracking-[0.1em] uppercase text-[#c8a96e]">
                {item.subtitle}
                </span>
        
                <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-[28px] font-semibold
                text-[#1a1108] mt-1 mb-3 leading-tight">
                {item.title}
                </h2>
        
                <p className="text-sm text-[#6b5e52] leading-relaxed mb-5">
                {item.description}
                </p>
        
                <button className="inline-flex items-center gap-2 bg-[#1a1108] text-white
                px-[22px] py-[10px] text-[11px] tracking-[0.1em] uppercase cursor-pointer
                border-none transition-all duration-200
                hover:bg-[#c8a96e] hover:gap-4">
                <span>Get a Quote</span>
                <ArrowRight />
                </button>
            </div>
            </article>
            )
            )}
        </>
    )
}