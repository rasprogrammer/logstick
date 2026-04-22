import SolutionGallary, { SolutionGalleryType } from "../SolutionGallary";

export default function LivingRoomFurniture () {
    const list : SolutionGalleryType[] = [
        {
            subtitle: "Sofas",
            description: "Designed for everyday comfort with a refined aesthetic, this sofa combines plush seating, elegant proportions, and durable upholstery for modern homes.",
            images: [
                "/images/home-solution/living-room-furniture/sofas/sofa-1.png",
                "/images/home-solution/living-room-furniture/sofas/sofa-2.png",
                "/images/home-solution/living-room-furniture/sofas/sofa-3.png",
            ],
        },
        {
            subtitle: "TV Units",
            description: "modern TV unit designed with a balance of wood textures and subtle detailing. Clean lines, integrated shelving, and a calm material palette create a refined focal point for contemporary living rooms.",
            images: [
                "/images/home-solution/living-room-furniture/tv-units/tv-unit-1.png",
                "/images/home-solution/living-room-furniture/tv-units/tv-unit-2.png",
                "/images/home-solution/living-room-furniture/tv-units/tv-unit-3.png",
            ],
        },
        {
            subtitle: "Coffee Tables",
            description: "A modern coffee table with a solid wood finish, clean lines, and practical open storage, designed to suit contemporary living rooms.",
            images: [
                "/images/home-solution/living-room-furniture/coffee-tables/coffee-table-1.png",
                "/images/home-solution/living-room-furniture/coffee-tables/coffee-table-2.png",
                "/images/home-solution/living-room-furniture/coffee-tables/coffee-table-3.png",
            ],
        },
        {
            subtitle: "Accent Chairs",
            description: "A classic wingback accent chair with soft upholstery, curved arms, and wooden legs, designed to add elegance to any living space.",
            images: [
                "/images/home-solution/living-room-furniture/accent-chairs/accent-chair-1.png",
                "/images/home-solution/living-room-furniture/accent-chairs/accent-chair-2.png",
                "/images/home-solution/living-room-furniture/accent-chairs/accent-chair-3.png",
            ],
        },
        {
            subtitle: "Storage & Shelving Units",
            description: "Modular shelving system designed for both display and everyday storage. Clean proportions, updated textures, and a flexible layout make it a refined addition to modern living spaces.",
            images: [
                "/images/home-solution/living-room-furniture/storage-shelving-units/storage-shelving-unit-1.png",
                "/images/home-solution/living-room-furniture/storage-shelving-units/storage-shelving-unit-2.png",
                "/images/home-solution/living-room-furniture/storage-shelving-units/storage-shelving-unit-3.png",
            ],
        },
        {
            subtitle: "Ottomans & Poufs",
            description: "Modern fabric ottoman with sculpted detailing, designed for versatile use in contemporary living spaces.",
            images: [
                "/images/home-solution/living-room-furniture/ottomans-poufs/ottomans-poufs-1.png",
                "/images/home-solution/living-room-furniture/ottomans-poufs/ottomans-poufs-2.png",
                "/images/home-solution/living-room-furniture/ottomans-poufs/ottomans-poufs-3.png",
            ],
        },
        {
            subtitle: "Side Tables & Console Tables",
            description: "Modern side and console tables with clean forms and refined finishes, designed to complement contemporary interiors.",
            images: [
                "/images/home-solution/living-room-furniture/side-tables-console-tables/side-tables-console-table-1.png",
                "/images/home-solution/living-room-furniture/side-tables-console-tables/side-tables-console-table-2.png",
                "/images/home-solution/living-room-furniture/side-tables-console-tables/side-tables-console-table-3.png",
            ],
        },
        {
            subtitle: "Wall Art & Decor",
            description: "A modern accent wall featuring the same clean vertical-panel layout, updated with a lighter, refined wooden texture to add warmth and softness while keeping the overall structure elegant and balanced.",
            images: [
                "/images/home-solution/living-room-furniture/wall-art-decor/wall-art-decor-1.png",
                "/images/home-solution/living-room-furniture/wall-art-decor/wall-art-decor-2.png",
                "/images/home-solution/living-room-furniture/wall-art-decor/wall-art-decor-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="Living Room Furniture" list={list} />
        </>
    )

}