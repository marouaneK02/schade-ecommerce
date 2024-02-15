import getCategory from "@/actions/get-category";
import getColours from "@/actions/get-colours";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";

export const revalidate = 0;

interface CategoryPageProps{
    params: {
        categoryId: string, 
    },
    searchParams: {
        colourId: string,
        sizeId: string,
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colourId: searchParams.colourId,
        sizeId: searchParams.sizeId,
    });
    const sizes = await getSizes();
    const colours = await getColours();
    const category = await getCategory(params.categoryId);

    return(
        <Container>
            <div className="py-20 sm:px-5 lg:px-7 pb-24">
                <div className="mx-auto space-x-4 lg:space-x-6">
                    <h1 className="text-center py-10 pb-16 text-8xl text-black">{category.name}</h1>
                </div>
                <div className="mt-16 lg:grid lg:grid-cols-5 lg:gap-x-8">
                    <MobileFilter sizes={sizes} colours={colours} />
                    <div className="hidden lg:block">
                        <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
                        <Filter valueKey="colourId" name="Colours" data={colours}/>
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                        {products.length === 0 && <NoResults/>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-9">
                            {products.map((item) => (
                                <ProductCard key={item.id} data={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CategoryPage;