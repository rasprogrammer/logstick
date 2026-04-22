import SolutionGallary, { SolutionGalleryType } from "../SolutionGallary";

export default function Wardrobes () {
    const list : SolutionGalleryType[] = [
        {
            subtitle: "Shutter Wardrobes",
            description: "A hinged-door wardrobe design that offers easy access, flexible storage, and works well with lofts for maximum space utilization.",
            images: [
                "/images/home-solution/wardrobes/shutter-wardrobes/shutter-wardrobes-1.png",
                "/images/home-solution/wardrobes/shutter-wardrobes/shutter-wardrobes-2.png",
                "/images/home-solution/wardrobes/shutter-wardrobes/shutter-wardrobes-3.png",
            ],
        },
        {
            subtitle: "Sliding Door Wardrobe",
            description: "A space-saving wardrobe with smooth sliding shutters, ideal for modern bedrooms. It offers a clean, clutter-free look while maximizing storage without requiring extra swing space.",
            images: [
                "/images/home-solution/wardrobes/sliding-door-wardrobe/sliding-door-wardrobe-1.png",
                "/images/home-solution/wardrobes/sliding-door-wardrobe/sliding-door-wardrobe-2.png",
                "/images/home-solution/wardrobes/sliding-door-wardrobe/sliding-door-wardrobe-3.png",
            ],
        },
        {
            subtitle: "Walk-in Wardrobe",
            description: "A spacious wardrobe designed for easy organization and everyday comfort. Open storage, hanging sections, and drawers come together to create a functional yet refined dressing space.",
            images: [
                "/images/home-solution/wardrobes/walk-in-wardrobe/walk-in-wardrobe-1.png",
                "/images/home-solution/wardrobes/walk-in-wardrobe/walk-in-wardrobe-2.png",
                "/images/home-solution/wardrobes/walk-in-wardrobe/walk-in-wardrobe-3.png",
            ],
        },
        {
            subtitle: "L-Shaped Wardrobe:",
            description: "A smart wardrobe layout that utilizes corner space efficiently. Customized storage and clean design lines make it both practical and visually balanced for modern bedrooms.",
            images: [
                "/images/home-solution/wardrobes/l-shaped-wardrobe/l-shaped-wardrobe-1.png",
                "/images/home-solution/wardrobes/l-shaped-wardrobe/l-shaped-wardrobe-2.png",
                "/images/home-solution/wardrobes/l-shaped-wardrobe/l-shaped-wardrobe-3.png",
            ],
        },
        {
            subtitle: "Free-standing Wardrobe",
            description: "A solid-shutter wardrobe with a warm wood finish, designed to stand independently and blend seamlessly into any bedroom.",
            images: [
                "/images/home-solution/wardrobes/free-standing-wardrobe/free-standing-wardrobe-1.png",
                "/images/home-solution/wardrobes/free-standing-wardrobe/free-standing-wardrobe-2.png",
                "/images/home-solution/wardrobes/free-standing-wardrobe/free-standing-wardrobe-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="Wardrobes" list={list} />
        </>
    )

}