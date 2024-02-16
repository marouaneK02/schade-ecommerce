"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";
import { useEffect, useState } from "react";

const CartPage = () =>{
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return(
        <Container >
            <div className="px-4 py-20 sm:px-6 lg:px-8 pb-24">
                <div className="mx-auto space-x-4 lg:space-x-6">
                    <h1 className="text-6xl py-16 text-black">Shopping Cart</h1>
                </div>
                <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-7">
                        {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
                        <ul>
                            {cart.items.map((item) => (
                                <CartItem key={item.id} data={item}/>
                            ))}
                        </ul>
                    </div>
                    <Summary/>
                </div>
            </div>
        </Container>
    )
};

export default CartPage;