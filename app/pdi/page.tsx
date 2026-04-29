

export default function pdiPage() {

    const pdiData = [
        {
            title: "Pre Delivery Inspection (PDI)",
            description:
            "Ensure your home is defect-free before possession. Logstick’s expert-led inspection identifies construction and finishing issues."
        },
        {
            title: "What is a Pre-Delivery Inspection?",
            description:
            "A Pre-Delivery Inspection (PDI) is a sectioned quality check of your new flat or villa before you take possession. Our experts identify issues in civil work, electricals, plumbing, and finishing — ensuring your home is truly move-in ready."
        },
        {
            title: "Why PDI Matters Before You Move In?",
            features: [
                "💧 Detect hidden dampness or seepage",
                "⚡ Identify unsafe switches or loose wiring",
                "🚪 Check alignment of doors & windows",
                "🧱 Catch poor plaster or tile leveling",
                "📏 Verify carpet area accuracy using laser measurement",
                "💰 Save 3–5× in future repair costs"
            ]
        },
        {
            title: "What We Check",
            features: [
                "Civil & Finishing: cracks, paint, plaster, dampness",
                "Doors & Windows: alignment, sealing, locks",
                "Electrical: sockets, switches, breakers",
                "Plumbing: slope, leakage, pressure",
                "Kitchen & Bathroom: joints, fittings, sealing",
                "Flooring: hollow tiles, leveling",
                "Carpet Area: verified with laser measurement"
            ]
        },
        {
            title: "Professional Tools for Reliable Results",
            description:
            "We use advanced, non-invasive tools for accurate moisture and level checks without damaging the wall or surface.",
            features: [
                "Non-pin Moisture Meter (detects moisture up to 19 mm deep)",
                "Laser Distance Meter (for carpet area verification)",
                "Spirit Level & Flashlight (for alignment & visibility)"
            ]
        },
        {
            title: "How It Works",
            steps: [
                "1️⃣ Book Your PDI — Schedule online or via call",
                "2️⃣ On-Site Inspection — Comprehensive checks across rooms",
                "3️⃣ sectioned Report — Photo-based findings within 48 hours",
                "4️⃣ Fix Before Handover — Builder corrects issues before possession"
            ]
        },
        {
            title: "Why Choose Logstick for PDI?",
            features: [
                "12+ years of construction & interior experience",
                "Over 100 quality checkpoints",
                "Transparent, photo-based reports",
                "Delivered within 48 hours",
                "Trusted by homeowners & interior clients"
            ]
        },
        {
            title: "Transparent Pricing",
            pricing: [
                { type: "1 BHK", price: "₹4,999" },
                { type: "2 BHK", price: "₹6,499" },
                { type: "3 BHK", price: "₹7,999" },
                { type: "Revisit", price: "₹1,000" }
            ],
            note: "Transparent fixed rates — no hidden charges."
        },
        {
            title: "Did You Know?",
            facts: [
                "60% of new flats show moisture or seepage within a year.",
                "1 in 3 homes are handed over with electrical defects.",
                "Fixing after possession costs 3–5× more."
            ]
        },
        {
            title: "Book Your PDI Now",
            description:
            "Get your home inspected before you move in — avoid hidden costs and ensure perfect finishing. Book your PDI with Logstick today."
        },
        {
            title: "Frequently Asked Questions (FAQ)",
            faqs: [
                {
                    question: "How long does inspection take?",
                    answer: "2–3 hours, depending on flat size."
                },
                {
                    question: "Do you fix the issues found?",
                    answer:
                    "We report them for the builder to fix before handover."
                },
                {
                    question: "Is this only for apartments?",
                    answer:
                    "No, we inspect any residential property."
                },
                {
                    question: "Can I request a re-inspection after the builder fixes the issues?",
                    answer:
                    "Yes, we offer a revisit service for ₹1,000 to verify all reported defects have been corrected."
                },
                {
                    question: "What areas do you cover in the inspection?",
                    answer:
                    "We check every room for civil, plumbing, electrical, and finishing issues — including kitchen, bathrooms, and balconies."
                }
            ]
        }
    ];

    return (
        <>
            {pdiData.map((section, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-center p-20">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl font-bold mb-4">{section.title}</h2>
                        <div className="w-40 h-2 bg-red-800 mb-4"></div>
                        <p className="text-gray-600">{section.description}</p>
                        {section.features && (
                            <ul className="mt-4 space-y-2">
                                {section.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.steps && (
                            <ul className="mt-4 space-y-2">
                                {section.steps.map((steps, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {steps}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.pricing && (
                            <ul className="mt-4 space-y-2">
                                {section.pricing.map((pricing, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {pricing.type}: {pricing.price}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.facts && (
                            <ul className="mt-4 space-y-2">
                                {section.facts.map((fact, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {fact}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {section.faqs && (
                            <ul className="mt-4 space-y-2">
                                {section.faqs.map((faq, i) => (
                                    <li key={i} className="flex flex-col ">
                                        <p className="text-xl font-bold">Q. {faq.question}</p>
                                        <p>Ans: {faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Add any images or additional content here if needed */}
                    
                </div>
            ))}
        </>
    );
}