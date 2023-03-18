import Image, { StaticImageData } from 'next/image';

type EventDetailsType = {
  imgSrc: StaticImageData | string;
};

const EventDetails = ({ imgSrc }: EventDetailsType) => (
  <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
    <div className="flex flex-col w-full md:w-1/3 lg:w-1/2 xl:2/3 order-last">
      <div className="flex-grow">
        <section>
          <h3>Welcome Drinks</h3>
          <p className="text-lg">
            <em>Friday, October 20</em>
          </p>
          <p className="mb-4">
            Details TBD
          </p>
        </section>
        <section>
          <h3>Wedding Ceremony & Reception</h3>
          <p className="text-lg">
            <em>Saturday, October 21</em>
          </p>
          <p className="mb-4">
            <strong>The Ritz-Carlton, Georgetown</strong>
            <br />
            <a
              href="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y"
              target="_blank"
              className="underline"
            >
              3100 South Street NW, Washington, D.C. 20007
            </a>
          </p>
          <p className="mb-4">
            <em>Times are subject to change.</em>
          </p>
          <ol>
            <li className="mb-4">
              <strong>4:30pm - 4:45 PM</strong>
              <br />
              Guest Arrival
            </li>
            <li className="mb-4">
              <strong>5:00pm - 5:30 PM</strong>
              <br />
              Ceremony
            </li>
            <li className="mb-4">
              <strong>5:30pm - 6:30 PM</strong>
              <br />
              Cocktail Hour
            </li>
            <li className="mb-4">
              <strong>6:30pm - 10:30 PM</strong>
              <br />
              Dinner & Jubilation
            </li>
          </ol>
        </section>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/2 xl:1/3 rounded-lg overflow-hidden mx-auto aspect-square md:aspect-auto object-fill">
      <Image alt="feature" className="w-full h-auto" src={imgSrc} />
    </div>
  </section>
);

export default EventDetails;
