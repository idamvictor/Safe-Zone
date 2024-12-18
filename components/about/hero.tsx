import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center mb-[79px]">
      <p className="text-5xl font-bold mt-[79px]">Safezone</p>
      <p className="mt-1.5 text-xl mb-[79px]">
        Creating a sage environent for everyone
      </p>
      <div className="relative">
        <div className="container absolute bottom-0 mx-auto text-right flex flex-col mb-[48px]">
          <p className="text-5xl font-bold">Mission</p>
          <p className="mt-14 text-lg max-w-[644px] self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea
            officia, tenetur obcaecati eligendi numquam amet earum ipsam est? A,
            et est in officia ullam sequi odit velit praesentium error. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Sunt delectus
            odio adipisci tenetur suscipit qui quibusdam, quod nulla cumque,
            esse distinctio voluptatum omnis atque nostrum veniam. Adipisci
            magnam modi quibusdam.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/hero-about.png"
            alt=""
            width={1440}
            height={750}
            className="w-full h-[622] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
