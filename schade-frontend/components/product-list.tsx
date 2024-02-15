import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps{
    title: string,
    items: Product[],
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items,
}) => {
    return(
        <div className="pt-16 pb-10 space-y-12">
           <h3 className="py-6 text-6xl">{title}</h3>
           {items.length === 0 && <div className="py-10"><NoResults/></div>}
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.map((item) => (
                    <ProductCard key={item.id} data={item}/>
                ))}
           </div>
        </div>
    )
}

export default ProductList;