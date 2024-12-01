import Image from "next/image";
import * as React from "react";

export interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[369px] text-primary-foreground">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="object-contain z-10 self-center max-w-full rounded-none aspect-square"
        width={106}
        height={106}
      />
      <div className="flex overflow-hidden z-10 flex-col items-center px-6 pt-14 pb-6 w-full rounded-lg max-md:px-5">
        <div className="text-lg font-bold text-muted-foreground">{title}</div>
        <div className="flex gap-0.5 items-start mt-4 w-[19px]">
          <div className="bg-blue-600 border-2 border-blue-600 border-solid min-h-[2px] w-[19px]" />
        </div>
        <div className="mt-4 text-sm text-center text-muted-foreground text-opacity-50">
          {description}
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const featuresData: FeatureCardProps[] = [
    {
      imageSrc: "/svg/recorder.svg",
      imageAlt: "Live incidence streams icon",
      title: "Live incidence streams",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sem aliquam nullam malesuada scelerisque velit massa ligula viverra. Nulla mauris enim blandit vel pellentesque phasellus mauris viverra. Quis amet euismod sollicitudin tincidunt nullam donec sed tellus. Morbi molestie.",
    },
    {
      imageSrc: "/svg/loved-ones.svg",
      imageAlt: "Track your Loved ones icon",
      title: "Track your Loved ones",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam ipsum urna mi ullamcorper integer vestibulum vitae. Aenean amet laoreet nibh sed justo felis. Nullam eu orci urna nunc faucibus praesent phasellus dui. Malesuada sit sed nulla odio viverra platea egestas tincidunt. Id sapien.",
    },
    {
      imageSrc: "/svg/location.svg",
      imageAlt: "Track Locations icon",
      title: "Track Locations",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id id semper interdum urna. Sit tellus suspendisse cursus euismod velit. Mauris habitant sapien proin vitae at cursus. Vulputate consectetur quam quis feugiat sed turpis consequat. Id ac rhoncus tempus eu id eget.",
    },
    {
      imageSrc: "/svg/sos.svg",
      imageAlt: "SOS & Emergency icon",
      title: "SOS & Emergency",
      description:
        "Lorem ipsum dolor sit amet consectetur. Aliquet non egestas nam eget ut in gravida nulla aliquam. Est eget diam et amet maecenas. Semper accumsan tristique tortor ornare odio amet ultrices egestas. Ipsum vestibulum nisl pellentesque nibh cum risus a vitae.",
    },
    {
      imageSrc: "/svg/connections.svg",
      imageAlt: "Make connections icon",
      title: "Make connections",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur a integer purus arcu. Tincidunt commodo elit condimentum imperdiet. Proin tortor faucibus nibh aliquet varius placerat facilisis euismod habitasse. Massa imperdiet mattis cras luctus lectus id ultrices sed maecenas.",
    },
    {
      imageSrc: "/svg/guard.svg",
      imageAlt: "Estate Guard icon",
      title: "Estate Guard",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt at vitae malesuada egestas sit tristique augue porttitor donec. Lectus consectetur sit donec maecenas sed amet tempus aliquam. Nisl nulla mauris tincidunt velit pharetra in. Varius pellentesque tincidunt scelerisque non.",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-primary-foreground max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1140px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[427px]">
          <div className="text-sm text-blue-600 tracking-[2.8px]">FEATURES</div>
          <div className="mt-4 text-5xl font-medium leading-none text-center text-primary max-md:text-4xl">
            Best Features
          </div>
          <div className="mt-4 text-base text-center text-muted-foreground text-opacity-50 max-md:max-w-full">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
        <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex z-10 flex-wrap gap-5 justify-between self-center max-w-full w-[877px]" />
            <div className="flex z-10 flex-col -mb-8 max-md:mb-2.5 max-md:max-w-full">
              <div className="grid grid-cols-3 gap-4">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                  >
                    <FeatureCard {...feature} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
