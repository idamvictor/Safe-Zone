import Image from "next/image";

export const MapSection: React.FC = () => {
  return (
    <div>
      <div className="text-center text-4xl md:text-5xl font-bold mb-[79px]">
        Build the future of <br /> public safety <br /> together
      </div>
      <Image
        src="/about-map.png"
        width={1440}
        height={500}
        alt=""
        className="size-full"
      />
    </div>
  );
};
