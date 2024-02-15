"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps{
    data: Product,
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    }
    return(
        <div className="p-5 py-16">
            <h1 className="text-5xl font-semibold text-gray-900">{data.name}</h1>
            <div className="my-7 flex items-end justify-between">
                <p className="text-2xl text-black">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <p className="items-center text-2xl text-gray-900">{data.description}</p>
            <div className="my-7 flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-xl text-black">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-2xl text-black">Colour:</h3>
                    <div className="h-6 w-6 rounded-full border border-black" style={{ backgroundColor: data?.colour?.value}}/>
                </div>
            </div>
            <div className="py-2">
                <Button onClick={onAddToCart} className="text px-6 rounded-full">
                    ADD TO CART
                </Button>
            </div>
        </div>
    )
}

export default Info;