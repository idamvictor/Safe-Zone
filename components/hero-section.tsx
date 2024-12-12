import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto md:flex items-center justify-center gap-8 self-center p-4">
        <div className="flex flex-col mb-0 max-w-full w-[552px] max-md:mb-2.5">
          <h1 className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
            We have your back any time, anywhere{" "}
          </h1>
          <p className="mt-14 text-xl leading-8 max-md:mt-10 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Rhoncus at turpis in
            tincidunt sagittis sit. Mattis aliquet a turpis at vestibulum nunc
            vestibulum elit. Tristique felis lacus dignissim tortor accumsan
            vitae non viverra. Dapibus elementum et sit pretium vehicula.
          </p>
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
