import SolutionGallary, { SolutionGalleryType } from "@/components/SolutionGallary";

export default function TablesMeetingFurniturePage() {
    const list: SolutionGalleryType[] = [
        {
            subtitle: "Executive Tables",
            description:
                "A premium work desk designed for leaders and senior professionals. Features a spacious surface, elegant finishes, and integrated storage options to create a refined executive workspace.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/executive-tables/executive-tables-1.png",
                "/images/office-solution/tables-&-meeting-furniture/executive-tables/executive-tables-2.png",
                "/images/office-solution/tables-&-meeting-furniture/executive-tables/executive-tables-3.png",
            ],
        },
        {
            subtitle: "Conference Tables",
            description:
                "A large, professional table crafted for group meetings, presentations, and decision-making sessions. Its clean design and cable-management options ensure an organized, productive environment.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/conference-tables/conference-tables-1.png",
                "/images/office-solution/tables-&-meeting-furniture/conference-tables/conference-tables-2.png",
                "/images/office-solution/tables-&-meeting-furniture/conference-tables/conference-tables-3.png",
            ],
        },
        {
            subtitle: "Meeting Tables",
            description:
                "A compact and versatile table ideal for team discussions and quick brainstorming sessions. Perfectly sized for collaboration without overwhelming the room.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/meeting-tables/meeting-tables-1.png",
                "/images/office-solution/tables-&-meeting-furniture/meeting-tables/meeting-tables-2.png",
                "/images/office-solution/tables-&-meeting-furniture/meeting-tables/meeting-tables-3.png",
            ],
        },
        {
            subtitle: "Director Tables",
            description:
                "A bold and sophisticated table built to reflect authority and presence. Premium materials, strong lines, and ample workspace make it the centerpiece of any director’s cabin.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/director-tables/director-tables-1.png",
                "/images/office-solution/tables-&-meeting-furniture/director-tables/director-tables-2.png",
                "/images/office-solution/tables-&-meeting-furniture/director-tables/director-tables-3.png",
            ],
        },
        {
            subtitle: "Collaboration / Discussion Table",
            description:
                "A modern, flexible table designed for group work, creative sessions, and shared tasks. Encourages open communication and team engagement in dynamic office environments.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/collaboration-discussion-table/collaboration-discussion-table-1.png",
                "/images/office-solution/tables-&-meeting-furniture/collaboration-discussion-table/collaboration-discussion-table-2.png",
                "/images/office-solution/tables-&-meeting-furniture/collaboration-discussion-table/collaboration-discussion-table-3.png",
            ],
        },
        {
            subtitle: "Round Meeting Tables",
            description:
                "A circular meeting table that promotes equal participation and easy conversation flow. Ideal for client discussions, interviews, and small group meetings.",
            images: [
                "/images/office-solution/tables-&-meeting-furniture/round-meeting-tables/round-meeting-tables-1.png",
                "/images/office-solution/tables-&-meeting-furniture/round-meeting-tables/round-meeting-tables-2.png",
                "/images/office-solution/tables-&-meeting-furniture/round-meeting-tables/round-meeting-tables-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary
                heading="TABLES & MEETING FURNITURE"
                list={list}
            />
        </>
    );
}