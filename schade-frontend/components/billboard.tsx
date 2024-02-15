import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-3 sm:p-5 lg:p-7 overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="relative aspect-square rounded-3xl md:aspect-[2.4/1.3] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center pb-7 items-center text-center gap-y-3">
          <div className="font-bold text-neutral-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic text-6xl sm:text-8xl lg:text-9xl sm:max-w-5xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;