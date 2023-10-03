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
            <strong>
              <a href="https://www.degreesbistro.com/" target="_blank" className="underline">
                Degrees Bistro
              </a>{' '}
              / Lobby Bar
            </strong>
            <br />
            <a
              href="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y"
              target="_blank"
              className="underline"
            >
              3100 South Street NW, Washington, D.C. 20007
            </a>
          </p>
          <ol>
            <li className="mb-4">
              <strong>8:00 - 10:00pm</strong>
            </li>
          </ol>
          <p className="mb-4">
            The bride, groom, and their families will be hanging around the hotel lobby
            post-rehearsal dinner. We'd love to see you if you're able to swing by! For menu and
            pricing, please visit{' '}
            <a href="https://www.degreesbistro.com/" target="_blank" className="underline">
              degreesbistro.com
            </a>
          </p>
        </section>
        <section>
          <h3>Wedding Ceremony & Reception</h3>
          <p className="text-lg">
            <em>Saturday, October 21</em>
          </p>
          <p className="mb-4">
            <a
              href="https://www.ritzcarlton.com/en/hotels/wasgo-the-ritz-carlton-georgetown-washington-d-c/overview/"
              target="_blank"
              className="underline"
            >
              <strong>The Ritz-Carlton Georgetown</strong>
            </a>
            <br />
            <a
              href="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y"
              target="_blank"
              className="underline"
            >
              3100 South Street NW, Washington, D.C. 20007
            </a>
          </p>
          <p>
            There are two Ritz-Carlton hotels in this part of town. Please ensure you come to{' '}
            <a
              href="https://www.ritzcarlton.com/en/hotels/wasgo-the-ritz-carlton-georgetown-washington-d-c/overview/"
              target="_blank"
              className="underline"
            >
              The Ritz-Carlton Georgetown
            </a>{' '}
            at the address listed above.
          </p>
          <p>
            <strong>Attire</strong>
            <br />
            Cocktail
          </p>
          <ol>
            <li className="mb-4">
              <strong>4:30 - 4:45pm</strong>
              <br />
              Guest Arrival
            </li>
            <li className="mb-4">
              <strong>5:00 - 5:30pm</strong>
              <br />
              Ceremony
            </li>
            <li className="mb-4">
              <strong>5:30 - 6:30pm</strong>
              <br />
              Cocktail Hour
            </li>
            <li className="mb-4">
              <strong>6:30 - 10:30pm</strong>
              <br />
              Dinner & Jubilation
            </li>
          </ol>
        </section>
      </div>
      <section>
        <h3>After Party</h3>
        <p className="text-lg">
          <em>Saturday, October 21</em>
        </p>
        <p className="mb-4">
          <a href="https://www.clubhousedc.co/" target="_blank" className="underline">
            <strong>Clubhouse: Cocktails & Coffee</strong>
          </a>
          <br />
          <a href="https://goo.gl/maps/2u95GgqZC6TB3pjY9" target="_blank" className="underline">
            1070 Wisconsin Ave NW, Washington, DC
          </a>
          <br />
          (Take the elevator or stairs downstairs.)
        </p>
        <p className="mb-4">
          The newlyweds will grab celebratory drinks following the reception here. You're welcome to
          join!
        </p>
        <p className="mb-4">
          For menu and pricing, please visit{' '}
          <a href="clubhousedc.co" target="_blank" className="underline">
            clubhousedc.co
          </a>
        </p>
      </section>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/2 xl:1/3 rounded-lg overflow-hidden mx-auto aspect-square md:aspect-auto object-fill">
      <Image alt="feature" className="w-full h-auto" src={imgSrc} />
    </div>
  </section>
);

export default EventDetails;
