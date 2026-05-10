import SolutionGallary, { SolutionGalleryType } from "@/components/SolutionGallary";

export default function OfficeChairsPage() {
    const list: SolutionGalleryType[] = [
        {
            subtitle: "Task Chairs",
            description:
                "A comfortable and ergonomically designed chair made for everyday office use. Features adjustable height, smooth mobility, and proper back support for long working hours.",
            images: [
                "/images/office-solution/office-chairs/task-chairs/task-chair-1.png",
                "/images/office-solution/office-chairs/task-chairs/task-chair-2.png",
                "/images/office-solution/office-chairs/task-chairs/task-chair-3.png",
            ],
        },
        {
            subtitle: "Executive Chairs",
            description:
                "A premium, high-comfort chair crafted for senior professionals. Offers plush cushioning, superior back support, and a luxury finish that enhances any executive cabin.",
            images: [
                "/images/office-solution/office-chairs/executive-chairs/executive-chair-1.png",
                "/images/office-solution/office-chairs/executive-chairs/executive-chair-2.png",
                "/images/office-solution/office-chairs/executive-chairs/executive-chair-3.png",
            ],
        },
        {
            subtitle: "Visitor Chairs",
            description:
                "A simple and welcoming seating option for guests and clients. Designed with a stable frame and clean aesthetics to complement reception areas, meeting rooms, and cabins.",
            images: [
                "/images/office-solution/office-chairs/visitor-chairs/visitor-chair-1.png",
                "/images/office-solution/office-chairs/visitor-chairs/visitor-chair-2.png",
                "/images/office-solution/office-chairs/visitor-chairs/visitor-chair-3.png",
            ],
        },
        {
            subtitle: "Conference Room Chairs",
            description:
                "Lightweight, sleek chairs made for meeting and discussion spaces. Built for comfort during long sessions, with a clean design that maintains a professional conference room look.",
            images: [
                "/images/office-solution/office-chairs/conference-room-chairs/conference-room-chair-1.png",
                "/images/office-solution/office-chairs/conference-room-chairs/conference-room-chair-2.png",
                "/images/office-solution/office-chairs/conference-room-chairs/conference-room-chair-3.png",
            ],
        },
        {
            subtitle: "High-Back Chairs",
            description:
                "An ergonomically advanced chair with extended lumbar and neck support. Ideal for long-duration tasks, providing comfort, posture correction, and a premium executive feel.",
            images: [
                "/images/office-solution/office-chairs/high-back-chairs/high-back-chair-1.png",
                "/images/office-solution/office-chairs/high-back-chairs/high-back-chair-2.png",
                "/images/office-solution/office-chairs/high-back-chairs/high-back-chair-3.png",
            ],
        },
        {
            subtitle: "Mid-Back Chairs",
            description:
                "A versatile office chair offering balanced support for daily operations. The mid-height backrest keeps the posture aligned while maintaining a compact, modern appearance.",
            images: [
                "/images/office-solution/office-chairs/mid-back-chairs/mid-back-chair-1.png",
                "/images/office-solution/office-chairs/mid-back-chairs/mid-back-chair-2.png",
                "/images/office-solution/office-chairs/mid-back-chairs/mid-back-chair-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="OFFICE CHAIRS" list={list} />
        </>
    );
}