import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async() => {
    const featuredProducts = await getProducts({ isFeatured: true });
    const trendingProducts = await getProducts({ isTrending: true });
    const billboardMain = await getBillboard("83a4ed33-1eda-4977-8205-8d06a55675f8");
    const billboardOther = await getBillboard("f8fdd4de-95ee-441c-bb68-ecc3743af09b");

    return(
        <Container>
            <div className="space-y-10 pt-10 pb-20">
                <Billboard data={billboardMain}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={featuredProducts}/>
                </div>
                <Billboard data={billboardOther}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Trending Now" items={trendingProducts}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;