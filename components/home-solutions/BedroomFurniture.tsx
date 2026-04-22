import SolutionGallary, { SolutionGalleryType } from "../SolutionGallary";

export default function BedroomFurniture () {
    const list : SolutionGalleryType[] = [
        {
            subtitle: "Beds",
            description: "A modern upholstered bed with clean lines and subtle ambient detailing, designed for contemporary bedrooms.",
            images: [
                "/images/home-solution/bedroom-furniture/beds/bed-1.png",
                "/images/home-solution/bedroom-furniture/beds/bed-2.png",
                "/images/home-solution/bedroom-furniture/beds/bed-3.png",
            ],
        },
        {
            subtitle: "Wardrobes",
            description: "A sleek built-in wardrobe with mixed matte and wood textures, highlighted by soft LED-lit open shelves for a clean, modern look.",
            images: [
                "/images/home-solution/bedroom-furniture/wardrobes/wardrobes-1.png",
                "/images/home-solution/bedroom-furniture/wardrobes/wardrobes-2.png",
                "/images/home-solution/bedroom-furniture/wardrobes/wardrobes-3.png",
            ],
        },
        {
            subtitle: "Bedside Tables",
            description: "Modern bedside table with a compact, layered form and contrasting textures, designed to add subtle elegance and everyday functionality to contemporary bedrooms.",
            images: [
                "/images/home-solution/bedroom-furniture/bedside-tables/bedside-table-1.png",
                "/images/home-solution/bedroom-furniture/bedside-tables/bedside-table-2.png",
                "/images/home-solution/bedroom-furniture/bedside-tables/bedside-table-3.png",
            ],
        },
        {
            subtitle: "Dressers & Mirrors",
            description: "Modern dresser with an arched LED mirror, paired with a sleek vanity counter and integrated side shelving. Finished in contrasting textures for a refined, functional look that blends storage, display, and everyday elegance.",
            images: [
                "/images/home-solution/bedroom-furniture/dressers-mirrors/dressers-mirrors-1.png",
                "/images/home-solution/bedroom-furniture/dressers-mirrors/dressers-mirrors-2.png",
                "/images/home-solution/bedroom-furniture/dressers-mirrors/dressers-mirrors-3.png",
            ],
        },
        {
            subtitle: "Chest of Drawers",
            description: "A minimal chest of drawers with a sleek form and a refreshed wood texture, offering clean lines and practical storage.",
            images: [
                "/images/home-solution/bedroom-furniture/chest-of-drawers/chest-of-drawers-1.png",
                "/images/home-solution/bedroom-furniture/chest-of-drawers/chest-of-drawers-2.png",
                "/images/home-solution/bedroom-furniture/chest-of-drawers/chest-of-drawers-3.png",
            ],
        },
        {
            subtitle: "Study Tables",
            description: "A built-in study table with clean lines and refreshed textures, designed for modern, space-efficient bedrooms",
            images: [
                "/images/home-solution/bedroom-furniture/study-tables/study-table-1.png",
                "/images/home-solution/bedroom-furniture/study-tables/study-table-2.png",
                "/images/home-solution/bedroom-furniture/study-tables/study-table-3.png",
            ],
        },
        {
            subtitle: "Seating & Lounge Chairs",
            description: "Classic lounge chairs with soft curves and a rich fabric finish, designed for comfort and a timeless, modern look.",
            images: [
                "/images/home-solution/bedroom-furniture/seating-lounge-chairs/seating-lounge-chairs-1.png",
                "/images/home-solution/bedroom-furniture/seating-lounge-chairs/seating-lounge-chairs-2.png",
                "/images/home-solution/bedroom-furniture/seating-lounge-chairs/seating-lounge-chairs-3.png",
            ],
        },
        {
            subtitle: "TV Units & Storage",
            description: "A sleek floating TV unit designed for bedrooms, featuring a contrasting wood and matte finish, subtle LED backlighting, and a slim console ledge that keeps the look light, elegant, and clutter-free TV Units & Storage",
            images: [
                "/images/home-solution/bedroom-furniture/tv-units-storage/tv-units-storage-1.png",
                "/images/home-solution/bedroom-furniture/tv-units-storage/tv-units-storage-2.png",
                "/images/home-solution/bedroom-furniture/tv-units-storage/tv-units-storage-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="Bedroom Furniture" list={list} />
        </>
    )

}