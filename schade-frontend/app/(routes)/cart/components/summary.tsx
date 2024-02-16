"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if(searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        };

        if(searchParams.get("cancelled")) {
            toast.error("Something went wrong.")
        };

    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = response.data.url;
    };

    return(
        <div className="mt-20 px-3 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-4xl font-medium text-gray-900 ">Order Summary</h2>
            <div className="mt-6 space-y-10">
                <div className="flex items-center justify-between border-t border-gray-500 pt-4">
                    <div className="text-2xl font-medium text-gray-900">
                        Order Total
                    </div>
                    <div className="text-2xl">
                        <Currency value={totalPrice}/>
                    </div>
                </div>
            </div>
            <Button disabled={items.length === 0} onClick={onCheckout} className="w-full rounded-full mt-6">
                Checkout
            </Button>
        </div>
    )
};

export default Summary;