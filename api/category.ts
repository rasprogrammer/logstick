export interface ProductType {
    id: string;
    name: string;
    price: number;
    currency: string;
    discount?: string; 
    originalPrice?: number;
    label?: string;
    description?: string;
    img1: string;
    img2: string;
}

export const categories = {
    "bed": [
        {
            id: "bordwin",
            name: "Bordwin",
            price: 120,
            currency: "INR",
            label: "New",
            description: "A lovely turquoise dress to look fabulous in while enjoying a night on the town.",
            img1: "/images/bordwin-bed.jpg",
            img2: "/images/bordwin-bed-2.jpg"
        },
        {
            id: "braric",
            name: "Braric",
            price: 89,
            currency: "INR",
            label: "New",
            img1: "/images/braric-bed.jpg",
            img2: "/images/braric-bed-2.jpg"
        },
        {
            id: "mozage",
            name: "Mozage",
            price: 8750,
            originalPrice: 10000,
            currency: "INR",
            discount: "12.5%",
            img1: "/images/mozage-bed.jpg",
            img2: "/images/mozage-bed-2.jpg"
        },
        {
            id: "mozage",
            name: "Mozage",
            price: 8750,
            originalPrice: 10000,
            currency: "INR",
            discount: "12.5%",
            img1: "/images/mozage-bed.jpg",
            img2: "/images/mozage-bed-2.jpg"
        },
        {
            id: "mozage",
            name: "Mozage",
            price: 8750,
            originalPrice: 10000,
            currency: "INR",
            discount: "12.5%",
            img1: "/images/mozage-bed.jpg",
            img2: "/images/mozage-bed-2.jpg"
        }
        
    ], 
    "wardrobe": [
        {
            id: "mozage",
            name: "Mozage",
            price: 8750,
            originalPrice: 10000,
            currency: "INR",
            discount: "12.5%",
            img1: "/images/mozage-bed.jpg",
            img2: "/images/mozage-bed-2.jpg"
        }
    ]
}


export const flatProducts = Object.values(categories)
  .flat()
  .reduce<Record<string, ProductType>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});