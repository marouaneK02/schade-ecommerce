import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps{
    image: ImageType,

}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return(
        <Tab className="relative flex aspect-square cursor-pointer hover:brightness-75 transition-all duration-300 items-center justify-center">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square rounded-lg inset-0 overflow-hidden">
                        <Image fill src={image.url} alt="" className="object-cover object-center"/>
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-lg ring-2 ring-offset-2", selected ? "ring-gray-500" : "ring-transparent"
                    )}/>
                </div>
            )}
        </Tab>
    )
}

export default GalleryTab;