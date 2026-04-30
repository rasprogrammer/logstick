import { categories, flatProducts } from "@/api/category";
import NewArrivalProduct from "@/components/NewarrivalProduct";
import Filter from "@/components/store/Filter";
import Product from "@/components/store/Product";
import ProductNotFound from "@/components/store/ProductNotFound";


export default async function StoreCategoryPage({ params }: { params: { slug: keyof typeof categories } }) {
    const { slug } = await params;

    const products = categories[slug];
    
    if (!products && flatProducts[slug]) {
        const product = flatProducts[slug];
        return <><Product product={product} /></>;
    } else if (!products) {
        return <><ProductNotFound /></>;
    }

    return <>
        <div>
            <h2 className="text-5xl text-center font-bold py-15 uppercase">{slug}</h2>
            <div className="flex grap-10">
                <Filter />

                <div className="grid grid-cols-3 gap-5 w-full p-5">
                    {products.map((product, index) => {
                        return <div className="min-h-40 bg-red-100 " key={index}>
                            <NewArrivalProduct product={product} />
                        </div>;
                    })}
                </div>
            </div>
        </div>
    </>
}