import Image from 'next/image';
import fancyImage from '../public/images/looking-fancy.jpg';

const Hero = () => (
  <section className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16 place-items-center">
      <div className="w-full lg:col-span-2 lg:py-24">
        <h1 className="font-special text-4xl md:text-5xl xl:text-6xl mb-12 md:mb-10 text-center md:text-left leading-relaxed md:leading-relaxed">
          Jaclyn & Jimmy are
          <br />
          <em className="text-primary">getting hitched!</em>
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          <div className="md:basis-1/2">
            <h2 className="font-bold text-base md:text-lg">When</h2>
            <p className="text-lg md:text-xl">
              Saturday,
              <br />
              October 21, 2023
            </p>
          </div>
          <div className="md:basis-1/2">
            <h2 className="font-bold text-base md:text-lg">Where</h2>
            <p className="text-lg md:text-xl">
              <a className="text-base-content no-underline" href="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y">
                The Ritz-Carlton Georgetown
              </a>
              <br />
              Washington, DC
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 rounded-lg overflow-hidden mx-auto aspect-square lg:aspect-auto object-fill">
        <Image src={fancyImage} alt="Jaclyn and Jimmy lookin' fancy" priority />
      </div>
    </div>
  </section>
);

export default Hero;
