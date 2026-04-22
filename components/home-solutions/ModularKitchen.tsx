import SolutionGallary, { SolutionGalleryType } from "../SolutionGallary";

export default function ModularKitchen () {
    const list : SolutionGalleryType[] = [
        {
            subtitle: "Straight Kitchen",
            description: "A space-efficient single-wall kitchen design that delivers a clean look, smart storage, and smooth workflow—ideal for compact and modern homes",
            images: [
                "/images/home-solution/modular-kitchen/straight-kitchen/straight-kitchen-1.png",
                "/images/home-solution/modular-kitchen/straight-kitchen/straight-kitchen-2.png",
                "/images/home-solution/modular-kitchen/straight-kitchen/straight-kitchen-3.png",
            ],
        },
        {
            subtitle: "L-Shaped Kitchen",
            description: "An efficient two-wall kitchen layout that offers smooth workflow, ample counter space, and smart placement of cooking and washing zones—ideal for modern homes of any size.",
            images: [
                "/images/home-solution/modular-kitchen/l-shaped-kitchen/l-shaped-kitchen-1.png",
                "/images/home-solution/modular-kitchen/l-shaped-kitchen/l-shaped-kitchen-2.png",
                "/images/home-solution/modular-kitchen/l-shaped-kitchen/l-shaped-kitchen-3.png",
            ],
        },
        {
            subtitle: "U-Shaped Kitchen",
            description: "A three-sided kitchen layout that offers generous workspace and efficient organization for everyday cooking.",
            images: [
                "/images/home-solution/modular-kitchen/u-shaped-kitchen/u-shaped-kitchen-1.png",
                "/images/home-solution/modular-kitchen/u-shaped-kitchen/u-shaped-kitchen-2.png",
                "/images/home-solution/modular-kitchen/u-shaped-kitchen/u-shaped-kitchen-3.png",
            ],
        },
        {
            subtitle: "Parallel Kitchen",
            description: "A practical layout with two parallel counters that maximizes storage and ensures smooth movement while cooking.",
            images: [
                "/images/home-solution/modular-kitchen/parallel-kitchen/parallel-kitchen-1.png",
                "/images/home-solution/modular-kitchen/parallel-kitchen/parallel-kitchen-2.png",
                "/images/home-solution/modular-kitchen/parallel-kitchen/parallel-kitchen-3.png",
            ],
        },
        {
            subtitle: "Island Kitchen",
            description: "A modern layout featuring a free-standing island that adds extra workspace, storage, and a casual seating area",
            images: [
                "/images/home-solution/modular-kitchen/island-kitchen/Island-kitchen-1.webp",
                "/images/home-solution/modular-kitchen/island-kitchen/Island-kitchen-2.webp",
                "/images/home-solution/modular-kitchen/island-kitchen/Island-kitchen-3.webp",
            ],
        },
        {
            subtitle: "Peninsula Kitchen",
            description: "A smart kitchen design where the counter extends from the main unit, offering added workspace without occupying extra floor area",
            images: [
                "/images/home-solution/modular-kitchen/peninsula-kitchen/peninsula-kitchen-1.webp",
                "/images/home-solution/modular-kitchen/peninsula-kitchen/peninsula-kitchen-2.webp",
                "/images/home-solution/modular-kitchen/peninsula-kitchen/peninsula-kitchen-3.webp",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="Modular Kitchen" list={list} />
        </>
    )

}