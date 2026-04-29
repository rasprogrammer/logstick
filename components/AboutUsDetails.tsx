import Image from "next/image";

export default function AboutUsDetails () {

    const aboutData = [
        {
            title: "Who We Are",
            description: "Logstick provides complete furniture and interior design solutions for homes and offices — from concept to installation. Drawing on over 12 years of experience in civil engineering and interior design, we bring together technical precision and creative vision to shape spaces that are functional, refined, and built to last. Our commitment to design precision, craftsmanship, and on-time delivery makes every Logstick project a perfect blend of style and reliability.",
            image: "/images/about-us/who-we-are.webp"
        },
        {
            title: "Our Mission",
            description: "To design and deliver spaces that combine aesthetic elegance with everyday functionality, ensuring every project reflects quality, comfort, and thoughtful craftsmanship. At Logstick, our mission is to turn ideas into enduring spaces that truly enhance the way people live and work.",
            image: "/images/about-us/mission.webp"
        },
        {
            title: "Our Vision",
            description: "To be recognized as a trusted and innovative interior and furniture brand, known for blending design excellence with engineering precision. We aim to redefine modern living and workspace design through creativity, reliability, and a commitment to timeless quality.",
            image: "/images/about-us/vision.webp"
        },
        {
            title: "Why Choose Logstick",
            description: "",
            image: "/images/about-us/why-choose-us.jpg",
            features: [
            "✔️ 12+ Years of Experience",
            "✔️ End-to-End Design & Execution",
            "✔️ In-House Manufacturing for Quality Control",
            "✔️ Custom Design Options for Every Space",
            "✔️ Expert Team of Engineers & Designers",
            "✔️ Timely Delivery & Hassle-Free Service"
            ]
        }
    ];
    return <>
        <div className="flex flex-col gap-12">
            {aboutData.map((detail, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-center p-20">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl font-bold mb-4">{detail.title}</h2>
                        <div className="w-40 h-2 bg-red-800 mb-4"></div>
                        <p className="text-gray-600">{detail.description}</p>
                        {detail.features && (
                            <ul className="mt-4 space-y-2">
                                {detail.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <Image 
                        src={detail.image} 
                        alt={detail.title} 
                        className="w-full md:w-1/2 rounded-lg object-cover" 
                        width={600}
                        height={400}
                    />
                </div>
            ))}
        </div>
    </>
}