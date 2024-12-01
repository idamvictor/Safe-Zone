import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex items-center justify-between self-center">
        <div>
          <h1>We have your back any time, anywhere </h1>
          <p>
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
        />
      </div>
    </section>
  );
};

export default HeroSection;
