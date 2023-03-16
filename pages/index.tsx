import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import SiteHeader from '../components/SiteHeader';

const Home: NextPage = () => {
  const [showNav, setNavShow] = React.useState<boolean>(false);

  const handleNav = () => {
    setNavShow(!showNav);
  };

  return (
    <>
      <Head>
        <title>Jaclyn and Jimmy</title>
        <meta name="description" content="Jaclyn and Jimmy are getting hitched!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader showNav={showNav} handleNav={() => handleNav()} />
      <main className="flex justify-center my-20 leading-relaxed">
        <div className="max-w-screen-xl">
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="lg:py-24">
                  <h1 className="text-4xl md:text-6xl mb-6 text-center md:text-left">
                    Jaclyn & Jimmy Are Getting Hitched!
                  </h1>
                  <div className="flex flex-col md:flex-row justify-between md:justify-start gap-4 md:gap-12">
                    <div className="md:py-4">
                      <h2 className="font-bold text-base md:text-lg">When?</h2>
                      <p className="text-lg md:text-xl">
                        Saturday
                        <br />
                        October 21, 2023
                      </p>
                    </div>
                    <div className="md:py-4">
                      <h2 className="font-bold text-base md:text-lg">Where?</h2>
                      <p className="text-lg md:text-xl">
                        The Ritz-Carlton, Georgetown
                        <br />
                        Washington, DC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full">
                  <img
                    alt="Party"
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <article className="inline-block my-8 md:my-32 w-full p-4">
            <p className="max-w-prose mx-auto mt-4 text-xl sm:text-xxl md:text-3xl">
              We&apos;re so excited to celebrate our wedding with you. Find all the details you need
              to know about our big day here!
            </p>
          </article>
          <article id="details" className="inline-block my-4 p-4">
            <h2 className="mb-4">Event Details</h2>
            <section className="my-8">
              <p className="text-xl">
                <strong>Welcome Drinks</strong>
              </p>
              <p className="text-lg">
                <em>Friday, October 20, 2023</em>
              </p>
              <p className="mb-4">
                <strong>TBD Details</strong>
              </p>
              <p className="mb-4">
                We plan to hang out at The Ritz-Carlton lobby after our rehearsal dinner if
                you&apos;d like to swing by for a drink and say hello!
              </p>
            </section>
            <section className="my-8">
              <p className="text-xl">
                <strong>Wedding Ceremony & Reception</strong>
              </p>
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
          </article>
          <article id="travel" className="inline-block my-4 p-4">
            <h2 className="mb-4">Stay & Travel</h2>
            <section>
              <p>
                Fall is a very busy season for Washington, D.C., so we encourage you to make your
                reservations as soon as possible.
              </p>
              <p>
                We have room blocks at the hotels listed below at or nearby our venue in Georgetown,
                but you are welcome to sleep wherever you can find a warm bed. There are several
                other hotels, inns, hostels, and Airbnbs nearby in the Georgetown, Foggy Bottom,
                Dupont Circle, Embassy Row, and Glover Park neighborhoods of Washington, D.C., or
                right across the river in Arlington, Virginia. The choice is yours!
              </p>
            </section>
            <section className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <h3 className="leading-snug mb-3">The Ritz-Carlton, Georgetown</h3>
              <p>
                <a
                  href="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y"
                  target="_blank"
                >
                  3100 South Street NW, Washington, D.C. 20007
                </a>
              </p>
              <p>
                All of the festivities will be held at this location. We have a limited number of
                guest rooms available at a discount. Please use the provided link, or our discount
                code “Randolph/Morris Wedding” to book. Our wedding and reception will take place at
                this hotel. The last day to book this rate is Thursday, September 21.
              </p>
              <a
                href="https://www.marriott.com/events/start.mi?id=1673629374426&key=GRP"
                target="_blank"
                className="inline-block rounded bg-slate-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Check Availability
              </a>
            </section>
            <section>
              <h3>The Westin Georgetown</h3>
              <p>
                <a
                  href="https://www.google.com/maps/place/The+Westin+Georgetown,+Washington+D.C./@38.9050757,-77.0532733,17z/data=!3m1!4b1!4m11!3m10!1s0x89b7b7b42f52fbeb:0x30be0e1124521c84!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9050757!4d-77.05109!16s%2Fm%2F0122wgj_"
                  target="_blank"
                >
                  2350 M Street NW, Washington, D.C. 20037
                </a>
              </p>
              <p>
                We have a limited number of guest rooms available at a discount. Please use the
                provided link, or our discount code “Randolph/Morris Wedding” to book.
              </p>
              <p>
                The Westin Georgetown is about a mile from The Ritz-Carlton, Georgetown. We
                recommend your car service of choice like Uber or Lyft.
              </p>
              <p>
                The last day to book this rate is: <strong>Thursday, September 21</strong>
              </p>
              <a
                href="https://www.marriott.com/events/start.mi?id=1677609881802&key=GRP"
                target="_blank"
              >
                Check Availability
              </a>
            </section>
            <section>
              <h3>Nearby Airports & Train Stations</h3>
              <p>
                There are many ways to access downtown Washington, D.C., but below are all of the
                nearby major airports and train stations.
              </p>
              <p>
                Most airline and travel websites will search all three airports when using the
                airport code <em>WAS</em>.
              </p>
              <ul>
                <li>DCA: Ronald Reagan Washington National Airport</li>
                <li>IAD: Washington Dulles International Airport</li>
                <li>BWI: Baltimore/Washington International Thurgood Marshall Airport</li>
                <li>Amtrak: Union Station</li>
                <li>Amtrak: Alexandria Station</li>
              </ul>
              <p>
                All airports and train stations are now accessible by public transportation, but
                rideshare services such as Uber and Lyft are great ways to navigate your way to
                downtown Washington, D.C. and Georgetown, specifically.
              </p>
              <p>
                For more information on how to get to and around Washington, D.C, visit
                <a href="https://washington.org/" target="_blank">
                  Washington.org
                </a>
              </p>
            </section>
          </article>
          <article className="block my-4 p-4">
            <h2 className="mb-4">Q & A</h2>

            <FAQ
              questions={[
                {
                  question: 'When is the RSVP deadline?',
                  answer: [
                    'Please RSVP by XXXX, so we can have an accurate headcount and your preferred menu selections.',
                  ],
                },
                {
                  question: `Can I bring a date?`,
                  answer: [`Please check your invitation. Plus ones will be noted.`],
                },
                {
                  question: `Are kids welcome?`,
                  answer: [
                    `Unfortunately, no; children are not able to attend. With a more intimate venue comes a smaller guest list, so the ceremony and reception will be adults only.`,
                  ],
                },
                {
                  question: `I have dietary restrictions. What's the best way to let you know?`,
                  answer: [`Please denote any dietary restrictions on your response card`],
                },
                {
                  question: `Where should I park?`,
                  answer: [
                    `We will have discounted event valet parking ($25 + tax) at the hotel available for our guests. There are also a number of nearby parking garages in Georgetown. More parking information can be found <a href="https://www.georgetowndc.com/explore/getting-here/" target="_blank">here</a>`,
                  ],
                },
                {
                  question: `What should I wear?`,
                  answer: [
                    `Formal or black tie optional. (Because life is black tie optional!) We suggest formal attire that's comfortable, but elegant. That means suit and tie, tuxedo if you're feeling fancy, cocktail dress, floor-length dresses, or gowns, or a stylish combination of suiting pieces. No shirt, no shoes, no entry`,
                  ],
                },
                {
                  question: `What time should I arrive?`,
                  answer: [
                    `Please arrive between 4:30 and 4:45pm as the ceremony will start promptly at 5:00pm.`,
                  ],
                },
                {
                  question: `Is the wedding indoors or outdoors?`,
                  answer: [
                    `The ceremony is outdoors (weather permitting), but cocktail hour and the reception will be indoors.`,
                  ],
                },
                {
                  question: `I'm coming from out of town. Where should I stay?`,
                  answer: [
                    `We have room blocks at The Ritz-Carlton Georgetown and Westin Georgetown as noted on the Travel page, but you are welcome to rest your head wherever works best for you!`,
                  ],
                },
                {
                  question: `What health and safety measures will you be taking during the event?`,
                  answer: [
                    `We are following Washington, D.C. government guidelines. Masks are not required, but you're welcome to wear one if you feel more comfortable doing so. The ceremony will take place outdoors (weather permitting), and cocktail hour and the reception will be indoors.`,
                  ],
                },
                {
                  question: `Is it okay to take pictures with our phones and cameras during the wedding?`,
                  answer: [
                    `We put a lot of time and effort working with our photographer to make sure they capture all the special moments. Please do not use your phone during the ceremony.`,
                    `However, we would love for you to take photos and share them during cocktail hour and reception!`,
                  ],
                },
                {
                  question: `What's your wedding hashtag?`,
                  answer: [
                    `We don't have one, but we'd love for you to tag our profiles on Facebook or Instagram pages with your photos (@<a href="https://www.instagram.com/abcdefghijaclyn/" target="_blank">abcdefghijaclyn</a> & @<a href="https://www.instagram.com/jimmymorris/" target="_blank">jimmymorris</a>)!`,
                  ],
                },
                {
                  question: `What can I do while I'm in Washington, D.C.`,
                  answer: [
                    `We're excited for you to explore our city! Check out the <a href="#travel">Travel</a> section for some recommendations.`,
                  ],
                },
              ]}
            />
          </article>
        </div>
      </main>
    </>
  );
};

export default Home;
