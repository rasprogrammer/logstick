import SolutionGallary, { SolutionGalleryType } from "@/components/SolutionGallary";

export default function SoftSeatingOfficeChairsPage() {
    const list: SolutionGalleryType[] = [
        {
            subtitle: "Reception Sofas",
            description:
                "Elegant and comfortable seating designed for reception and waiting areas, creating a welcoming first impression for visitors and clients.",
            images: [
                "/images/office-solution/soft-seating-&-office-sofas/reception-sofas/reception-sofas-1.png",
                "/images/office-solution/soft-seating-&-office-sofas/reception-sofas/reception-sofas-2.png",
                "/images/office-solution/soft-seating-&-office-sofas/reception-sofas/reception-sofas-3.png",
            ],
        },
        {
            subtitle: "Office Lounge Sofas",
            description:
                "Premium sofas crafted for breakout zones and informal meeting spaces—offering relaxation, comfort, and a sophisticated corporate vibe.",
            images: [
                "/images/office-solution/soft-seating-&-office-sofas/office-lounge-sofas/office-lounge-sofas-1.png",
                "/images/office-solution/soft-seating-&-office-sofas/office-lounge-sofas/office-lounge-sofas-2.png",
                "/images/office-solution/soft-seating-&-office-sofas/office-lounge-sofas/office-lounge-sofas-3.png",
            ],
        },
        {
            subtitle: "Visitor Couches",
            description:
                "Compact two-seater and three-seater sofas ideal for cabins, discussion spaces, and client seating areas—balancing comfort and professionalism.",
            images: [
                "/images/office-solution/soft-seating-&-office-sofas/visitor-couches/visitor-couche-1.png",
                "/images/office-solution/soft-seating-&-office-sofas/visitor-couches/visitor-couche-2.png",
                "/images/office-solution/soft-seating-&-office-sofas/visitor-couches/visitor-couche-3.png",
            ],
        },
        {
            subtitle: "Accent & Lounge Chairs",
            description:
                "Stylish single-seater chairs that add character to executive cabins, reception zones, and office lounges, perfect for premium modern workspaces.",
            images: [
                "/images/office-solution/soft-seating-&-office-sofas/accent-&-lounge-chairs/accent-&-lounge-chair-1.png",
                "/images/office-solution/soft-seating-&-office-sofas/accent-&-lounge-chairs/accent-&-lounge-chair-2.png",
                "/images/office-solution/soft-seating-&-office-sofas/accent-&-lounge-chairs/accent-&-lounge-chair-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary
                heading="SOFT SEATING & OFFICE SOFAS"
                list={list}
            />
        </>
    );
}