import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSwr from 'swr';

import EventDetails from '../components/EventDetails';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SiteHeader from '../components/SiteHeader';
import Tagline from '../components/Tagline';

import photoBooth from '../public/images/photobooth.jpg';
import nats from '../public/images/nats.jpg';
import fetcher from '../utils/fetcher';
import TravelDetails from '../components/TravelDetails';
import Registry from '../components/Registry';

const Home: NextPage = () => {
  const [showNav, setNavShow] = React.useState<boolean>(false);
  const { data: faqData, isLoading: isFAQLoading } = useSwr('/api/faq', fetcher);
  const handleNav = (override: boolean) => {
    setNavShow(override === undefined ? !showNav : override);
  };

  return (
    <>
      <Head>
        <title>Jaclyn and Jimmy</title>
        <meta name="description" content="Jaclyn and Jimmy are getting hitched!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader showNav={showNav} handleNav={handleNav} />
      <main className="flex justify-center my-20 md:my-32 lg:my-22 leading-relaxed">
        <div className="max-w-screen-xl">
          <Hero />
          <article className="inline-block my-8 md:my-32 w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <Tagline />
          </article>
          <article
            id="details"
            className="inline-block w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 scroll-my-24"
          >
            <h2 className="mb-12">Event Details</h2>
            <EventDetails imgSrc={nats} />
          </article>
          <article
            id="travel"
            className="inline-block px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 scroll-my-24"
          >
            <h2 className="mb-8">Stay & Travel</h2>
            <TravelDetails />
          </article>
          <article
            id="registry"
            className="inline-block w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 scroll-my-24"
          >
            <h2 className="mb-12">Registry Information</h2>
            <Registry />
          </article>
          <article
            id="qa"
            className="inline-block w-full px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 scroll-my-24"
          >
            <h2 className="mb-8">Q & A</h2>
            <div className="w-full mx-auto flex flex-col md:flex-row justify-items-center items-center gap-4">
              <div className="w-full md:w-2/3">
                <FAQ questions={faqData} isLoading={isFAQLoading} />
              </div>
              <div className="w-full md:w-1/3 mb-10 lg:mb-0 overflow-hidden mx-auto object-fill">
                <Image
                  src={photoBooth}
                  alt="Jaclyn and Jimmy being goofballs in a photobooth"
                  className="object-cover object-center w-full h-auto"
                />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
