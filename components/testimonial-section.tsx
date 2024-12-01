import Image from "next/image";
import * as React from "react";

const TestimonialSection = () => {
  return (
    <div className="flex overflow-hidden justify-between items-start px-20 py-32 w-full bg-secondary max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[846px] max-md:mb-2.5">
        <div className="self-start text-5xl font-bold text-secondary-foreground max-md:text-4xl">
          Testimonial
        </div>
        <div className="flex flex-col pl-1.5 mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="text-lg text-muted-foreground max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Dignissim ut varius in
            suspendisse. Sed tristique cras ultricies integer felis faucibus
            turpis. Vel volutpat suspendisse ligula turpis adipiscing vitae
            imperdiet amet. Ornare arcu sit non pretium platea nulla risus sed.
            Consectetur enim imperdiet sit et nulla velit metus morbi. Quis
            nulla donec pellentesque lectus ut amet. Sem feugiat at nec
            pellentesque eget. Velit euismod id velit eget gravida tellus montes
            turpis. Est felis vitae est phasellus. Ullamcorper egestas amet
            ipsum a lorem risus quisque. Nec quam amet urna fames laoreet
            pharetra hendrerit ornare. Dui penatibus adipiscing vulputate sapien
            id semper lacus erat. Bibendum nibh id nunc dolor tristique nunc
            molestie sit tortor.\n\nUt adipiscing adipiscing quis amet in id at.
            Rhoncus eu lectus urna nisl sed ac sed id.
          </div>
          <div className="self-start mt-5 text-2xl font-bold text-secondary-foreground">
            -Martin lee
          </div>
        </div>
      </div>
      <Image src="/comment.png" alt="comment" width={199} height={183} />
    </div>
  );
};

export default TestimonialSection;
