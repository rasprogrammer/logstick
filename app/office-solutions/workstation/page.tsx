import SolutionGallary, { SolutionGalleryType } from "@/components/SolutionGallary";

export default function WorkStationPage() {
    const list: SolutionGalleryType[] = [
        {
            subtitle: "Linear Workstations",
            description:
                "A sleek and space-efficient workstation designed for focused individual work. Features a straight desktop layout with clean lines, ergonomic positioning, and optional privacy partitions—ideal for modern office environments.",
            images: [
                "/images/office-solution/workstation/linear-workstations/linear-workstations-1.webp",
                "/images/office-solution/workstation/linear-workstations/linear-workstations-2.webp",
                "/images/office-solution/workstation/linear-workstations/linear-workstations-3.webp",
            ],
        },
        {
            subtitle: "L-Shaped Workstations",
            description:
                "A functional corner workstation offering extended surface area and better workflow organization. The L-shape design supports multitasking, storage integration, and an ergonomic seating position for enhanced productivity.",
            images: [
                "/images/office-solution/workstation/l-shaped-workstations/l-shaped-workstations-1.webp",
                "/images/office-solution/workstation/l-shaped-workstations/l-shaped-workstations-2.webp",
                "/images/office-solution/workstation/l-shaped-workstations/l-shaped-workstations-3.webp",
            ],
        },
        {
            subtitle: "Cluster / 2–4 Seater Workstations",
            description:
                "A collaborative workstation layout designed for small teams. Arranged in pods or facing units, these clusters optimize space while maintaining individual privacy—perfect for open offices, coworking setups, and shared work zones.",
            images: [
                "/images/office-solution/workstation/cluster-2-4-seater-workstations/cluster-2-4-seater-workstations-1.webp",
                "/images/office-solution/workstation/cluster-2-4-seater-workstations/cluster-2-4-seater-workstations-2.webp",
                "/images/office-solution/workstation/cluster-2-4-seater-workstations/cluster-2-4-seater-workstations-3.webp",
            ],
        },
        {
            subtitle: "Manager / Supervisor Workstations",
            description:
                "A premium workstation with a larger desk footprint and integrated side storage. Designed for supervisors and managers, it combines functionality with a refined executive look while supporting quick meetings and daily leadership tasks.",
            images: [
                "/images/office-solution/workstation/manager-supervisor-workstations/manager-supervisor-workstations-1.webp",
                "/images/office-solution/workstation/manager-supervisor-workstations/manager-supervisor-workstations-2.webp",
            ],
        },
        {
            subtitle: "Height-Adjustable / Standing Desks",
            description:
                "A modern workstation that promotes movement and flexibility throughout the workday. The adjustable height system allows seamless switching between sitting and standing, supporting healthier posture and improved productivity.",
            images: [
                "/images/office-solution/workstation/height-adjustable-standing-desks/height-adjustable-standing-desks-1.png",
                "/images/office-solution/workstation/height-adjustable-standing-desks/height-adjustable-standing-desks-2.png",
                "/images/office-solution/workstation/height-adjustable-standing-desks/height-adjustable-standing-desks-3.png",
            ],
        },
    ];

    return (
        <>
            <SolutionGallary heading="WORKSTATION" list={list} />
        </>
    );
}