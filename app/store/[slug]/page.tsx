import { categories, flatProducts } from "@/api/category";
import NewArrivalProduct from "@/components/NewarrivalProduct";
import Filter from "@/components/store/Filter";
import Product from "@/components/store/Product";
import ProductNotFound from "@/components/store/ProductNotFound";

export default async function StoreCategoryPage({
  params,
}: {
  params: { slug: keyof typeof categories };
}) {
  const { slug } = await params;

  const products = categories[slug];

  if (!products && flatProducts[slug]) {
    const product = flatProducts[slug];
    return <Product product={product} />;
  } else if (!products) {
    return <ProductNotFound />;
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Heading */}
      <div className="py-14 text-center">
        <h1 className="text-5xl font-serif uppercase tracking-wide text-black">
          {slug}
        </h1>

        {/* underline */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-red-200" />
          <div className="w-10 h-2 rounded-full bg-red-700" />
          <div className="w-2 h-2 rounded-full bg-red-200" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 pb-16 flex gap-10">
        {/* Sidebar */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-24">
            <Filter />
          </div>
        </aside>

        {/* Products */}
        <section className="flex-1">
          {/* Sort */}
          <div className="flex justify-end mb-8">
            <select className="border border-black/30 bg-white px-5 py-3 min-w-[180px] outline-none text-sm">
              <option>Sort By</option>
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <NewArrivalProduct product={product} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}