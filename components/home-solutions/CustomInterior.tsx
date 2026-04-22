import SolutionGallary, { SolutionGalleryType } from "../SolutionGallary";

export default function CustomInterior () {
    const list : SolutionGalleryType[] = [
        {
            subtitle: "MODERN",
            description: "Clean lines, minimalistic decor, and functional furniture. Neutral color palettes with materials like glass, steel, and wood",
            images: [
                "/images/home-solution/bedroom-furniture/beds/bed-1.png",
                "/images/home-solution/bedroom-furniture/beds/bed-2.png",
                "/images/home-solution/bedroom-furniture/beds/bed-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="Custom Interior" list={list} />
        </>
    )

}