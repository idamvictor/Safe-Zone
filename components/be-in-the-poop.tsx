import Image from "next/image";
import * as React from "react";

const BeInTheLoop = () => {
  const infoCards = [
    {
      icon: "/record.svg",
      title:
        "See incidents unfold and get the real story from people on the scene.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
    },
    {
      icon: "/fast.svg",
      title:
        "Fast, accurate information makes a meaningful difference in emergencies.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
    },
    {
      icon: "/contribution.svg",
      title: "When you can, contribute to help resolve a situation.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc vestibulum elit.",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-48 w-full bg-primary-foreground max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1072px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full font-bold text-center max-md:max-w-full">
          <div className="self-center text-sm leading-8 text-blue-600">
            BE IN THE LOOP
          </div>
          <div className="mt-2.5 text-5xl leading-none text-primary max-md:max-w-full max-md:text-4xl">
            Know the real story faster.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6bead6180ebd174903f7fc2b0156fc05b798453494ff8582d6a37ca7e80b2b?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0"
            alt=""
            className="my-auto rounded-2xl aspect-[0.45] min-w-[240px] shadow-[14px_14px_58px_rgba(0,0,0,0.18)] w-[223px]"
            width={278}
            height={522}
          />
          <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[527px] max-md:max-w-full">
            {infoCards.map((card, index) => (
              <div key={index} className={index > 0 ? "mt-24" : ""}>
                <div className="flex gap-5 md:gap-7 items-start w-full max-md:mt-10 max-md:max-w-full">
                  <Image
                    src={card.icon}
                    alt=""
                    className="object-contain shrink-0 aspect-square rounded-[388px]"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col grow shrink min-w-[240px] w-[481px] max-md:max-w-full">
                    <div className="text-xl font-bold text-primary max-md:max-w-full">
                      {card.title}
                    </div>
                    <div className="mt-6 text-base leading-8 text-muted-foreground max-md:max-w-full">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeInTheLoop;
