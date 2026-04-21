import SolutionGallary, { SolutionGalleryType } from "./SolutionGallary";


export default function CustomInterior () {
    const kitchenTypes : SolutionGalleryType[] = [
        {
            id: "straight",
            title: "Straight Kitchen",
            subtitle: "Single-Wall Elegance",
            description:
            "A space-efficient single-wall kitchen design that delivers a clean look, smart storage, and smooth workflow—ideal for compact and modern homes.",
            tag: "Compact Living",
            images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
            "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
            ],
        },
        {
            id: "l-shaped",
            title: "L-Shaped Kitchen",
            subtitle: "Corner Harmony",
            description:
            "An efficient two-wall kitchen layout that offers smooth workflow, ample counter space, and smart placement of cooking and washing zones—ideal for modern homes of any size.",
            tag: "Most Popular",
            images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
            ],
        },
        {
            id: "u-shaped",
            title: "U-Shaped Kitchen",
            subtitle: "Wraparound Workspace",
            description:
            "A three-sided kitchen layout that offers generous workspace and efficient organization for everyday cooking.",
            tag: "Maximum Storage",
            images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
            ],
        },
        {
            id: "parallel",
            title: "Parallel Kitchen",
            subtitle: "Dual Counter Flow",
            description:
            "A practical layout with two parallel counters that maximizes storage and ensures smooth movement while cooking.",
            tag: "Professional Feel",
            images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
            ],
        },
        {
            id: "island",
            title: "Island Kitchen",
            subtitle: "The Social Hub",
            description:
            "A modern layout featuring a free-standing island that adds extra workspace, storage, and a casual seating area.",
            tag: "Premium Choice",
            images: [
            "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
            ],
        },
        {
            id: "peninsula",
            title: "Peninsula Kitchen",
            subtitle: "Extended Versatility",
            description:
            "A smart kitchen design where the counter extends from the main unit, offering added workspace without occupying extra floor area.",
            tag: "Space-Smart",
            images: [
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary list={kitchenTypes} />
        </>
    )

}