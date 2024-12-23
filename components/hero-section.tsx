import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto md:flex items-center justify-center gap-8 self-center p-4">
        <div className="flex flex-col mb-0 basis-1/2">
          <div className="max-w-[552px] mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">
              We have <br /> your back any <br /> time, anywhere{" "}
            </h1>
            <p className="mt-14 text-[16px] md:text-xl md:leading-8 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in
              tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc
              vestibulum elit. Tristique felis lacus dignissim tortor accumsan
              vitae non viverra. Dapibus elementum et sit pretium vehicula.
            </p>
          </div>
        </div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={392}
          height={882}
          className="mx-auto my-0"
        />
      </div>
    </section>
  );
};

export default HeroSection;
