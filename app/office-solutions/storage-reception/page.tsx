import SolutionGallary, { SolutionGalleryType } from "@/components/SolutionGallary";

export default function StorageReception() {
    const list: SolutionGalleryType[] = [
        {
            subtitle: "Filing Cabinets",
            description:
                "Secure and organized storage for important documents and office files. Designed with smooth drawers and durable construction to keep paperwork safe and easily accessible.",
            images: [
                "/images/office-solution/storage-&-reception/filing-cabinets/filing-cabinets-1.png",
                "/images/office-solution/storage-&-reception/filing-cabinets/filing-cabinets-2.png",
                "/images/office-solution/storage-&-reception/filing-cabinets/filing-cabinets-3.png",
            ],
        },
        {
            subtitle: "Pedestal Drawers",
            description:
                "Compact under-desk storage for daily essentials, stationery, and personal items. A practical addition to any workstation, offering convenience without taking extra space.",
            images: [
                "/images/office-solution/storage-&-reception/pedestal-drawers/pedestal-drawers-1.png",
                "/images/office-solution/storage-&-reception/pedestal-drawers/pedestal-drawers-2.png",
                "/images/office-solution/storage-&-reception/pedestal-drawers/pedestal-drawers-3.png",
            ],
        },
        {
            subtitle: "Tall Storage Units",
            description:
                "Spacious vertical cabinets ideal for storing files, supplies, and office equipment. Their clean design supports maximum storage capacity while maintaining a tidy workspace.",
            images: [
                "/images/office-solution/storage-&-reception/tall-storage-units/tall-storage-units-1.png",
                "/images/office-solution/storage-&-reception/tall-storage-units/tall-storage-units-2.png",
                "/images/office-solution/storage-&-reception/tall-storage-units/tall-storage-units-3.png",
            ],
        },
        {
            subtitle: "Bookshelves / Open Shelving",
            description:
                "Modern open shelving for books, decor, and quick-access items. Adds both storage and visual appeal to cabins, meeting rooms, and workstations.",
            images: [
                "/images/office-solution/storage-&-reception/bookshelves-open-shelving/bookshelves-open-shelving-1.png",
                "/images/office-solution/storage-&-reception/bookshelves-open-shelving/bookshelves-open-shelving-2.png",
                "/images/office-solution/storage-&-reception/bookshelves-open-shelving/bookshelves-open-shelving-3.png",
            ],
        },
        {
            subtitle: "Reception Desks",
            description:
                "A stylish and welcoming front-office desk that creates a strong first impression. Designed with clean lines and functional storage to support reception workflow and visitor interaction.",
            images: [
                "/images/office-solution/storage-&-reception/reception-desks/reception-desks-1.png",
                "/images/office-solution/storage-&-reception/reception-desks/reception-desks-2.png",
                "/images/office-solution/storage-&-reception/reception-desks/reception-desks-3.png",
            ],
        },
        {
            subtitle: "Side Units / Credenzas",
            description:
                "Low-height storage units placed behind desks or along walls, offering both storage and display utility. Ideal for executive cabins, meeting rooms, and premium office spaces.",
            images: [
                "/images/office-solution/storage-&-reception/side-units-credenzas/side-units-credenzas-1.png",
                "/images/office-solution/storage-&-reception/side-units-credenzas/side-units-credenzas-2.png",
                "/images/office-solution/storage-&-reception/side-units-credenzas/side-units-credenzas-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary
                heading="STORAGE & RECEPTION"
                list={list}
            />
        </>
    );
}