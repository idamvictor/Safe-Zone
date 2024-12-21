import Image from "next/image";

interface StoreButtonProps {
  storeName: string;
  subtitle: string;
  iconSrc: string;
  iconAlt: string;
}

const StoreButton: React.FC<StoreButtonProps> = ({
  storeName,
  subtitle,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div
      className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-3 py-2 my-auto rounded-lg border border-secondary-foreground border-solid w-[219px]"
      role="button"
      tabIndex={0}
    >
      <div className="flex gap-1 items-start self-stretch my-auto w-[30px]">
        <Image
          src={iconSrc}
          alt={iconAlt}
          className="object-contain aspect-[0.91] w-[30px]"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col self-stretch my-auto font-medium text-secondary-foreground ">
        <div className="py-px text-xs w-[98px] max-md:pr-5">{subtitle}</div>
        <div className="max-w-full text-2xl tracking-tighter ">{storeName}</div>
      </div>
    </div>
  );
};

export default StoreButton;