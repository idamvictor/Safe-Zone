// const Highlights = () => {
//   return (
//     <section>
//       <div className="container mx-auto"></div>
//     </section>
//   );
// };

// export default Highlights;

import * as React from "react";
import Image from "next/image";

interface HighlightCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

export default function Highlights() {
  const highlights: HighlightCardProps[] = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a79f753a753f9dca615dd47b28f3c85f29b3f8c7af323aff2acedaac1379b7d8?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0",
      description: "Man Rescued from House fire outbreak",
      alt: "House fire rescue operation",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a79f753a753f9dca615dd47b28f3c85f29b3f8c7af323aff2acedaac1379b7d8?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0",
      description: "Man Rescued from House fire outbreak",
      alt: "House fire rescue operation",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a79f753a753f9dca615dd47b28f3c85f29b3f8c7af323aff2acedaac1379b7d8?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0",
      description: "Man Rescued from House fire outbreak",
      alt: "House fire rescue operation",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a79f753a753f9dca615dd47b28f3c85f29b3f8c7af323aff2acedaac1379b7d8?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0",
      description: "Man Rescued from House fire outbreak",
      alt: "House fire rescue operation",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a79f753a753f9dca615dd47b28f3c85f29b3f8c7af323aff2acedaac1379b7d8?placeholderIfAbsent=true&apiKey=6fa44ce921db4247b418bfc7505f2ef0",
      description: "Man Rescued from House fire outbreak",
      alt: "House fire rescue operation",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-secondary max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[904px] max-md:mb-2.5">
        <div className="flex flex-col items-center font-bold max-md:mr-1.5 max-md:max-w-full">
          <div className="text-lg leading-loose text-center text-blue-600">
            REAL-TIME HIGHLIGHTS
          </div>
          <div className="mt-6 text-5xl leading-none text-secondary-foreground max-md:max-w-full max-md:text-4xl">
            Safezone is a force for good in the world.
          </div>
        </div>
        <div className="flex flex-wrap gap-9 items-center mt-11 text-base leading-8 text-center text-muted-foreground max-md:mt-10">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col justify-center self-stretch my-auto w-[152px]"
            >
              <Image
                src={highlight.imageUrl}
                alt={highlight.alt}
                width={130}
                height={130}
                className="object-contain self-center max-w-full aspect-square rounded-[5000px]"
              />
              <div className="mt-5">{highlight.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}