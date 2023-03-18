import HotelCard from './HotelCard';

const TravelDetails = () => (
  <>
    <section className="inline-block">
      <p>
        Fall is a very busy season for Washington, D.C., so we encourage you to make your
        reservations as soon as possible.
      </p>
      <p>
        We have room blocks at the hotels listed below at or nearby our venue in Georgetown, but you
        are welcome to sleep wherever you can find a warm bed. There are several other hotels, inns,
        hostels, and Airbnbs nearby in the Georgetown, Foggy Bottom, Dupont Circle, Embassy Row, and
        Glover Park neighborhoods of Washington, D.C., or right across the river in Arlington,
        Virginia. The choice is yours!
      </p>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
      <HotelCard
        name="The Ritz-Carlton, Georgetown"
        address="3100 South Street NW, Washington, D.C. 20007"
        mapLink="https://www.google.com/maps/place/The+Ritz-Carlton+Georgetown,+Washington,+D.C./@38.9029838,-77.0639205,17z/data=!3m2!4b1!5s0x89b7b64c1b993003:0x5bcd719f7c6e2191!4m11!3m10!1s0x89b7b64c1b65ffc1:0x50f48f3cd9383f34!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9029838!4d-77.0617318!16s%2Fm%2F0k28y5y"
        description={
          <>
            <p>All of the festivities will be held at this location.</p>
            <p>
              We have a limited number of guest rooms available at a discount. Please use the
              provided link, or our discount code “Randolph/Morris Wedding” to book. Our wedding and
              reception will take place at this hotel.
            </p>
            <p>
              The last day to book this rate is <strong>Thursday, September 21, 2023</strong>.
            </p>
          </>
        }
        bookingLink="https://www.marriott.com/events/start.mi?id=1673629374426&key=GRP"
      />
      <HotelCard
        name="The Westin Georgetown"
        address="2350 M Street NW, Washington, D.C. 20037"
        mapLink="https://www.google.com/maps/place/The+Westin+Georgetown,+Washington+D.C./@38.9050757,-77.0532733,17z/data=!3m1!4b1!4m11!3m10!1s0x89b7b7b42f52fbeb:0x30be0e1124521c84!5m4!1s2023-07-02!2i6!4m1!1i2!8m2!3d38.9050757!4d-77.05109!16s%2Fm%2F0122wgj_"
        description={
          <>
            <p>
              We have a limited number of guest rooms available at a discount. Please use the
              provided link, or our discount code “Randolph/Morris Wedding” to book.
            </p>
            <p>
              The last day to book this rate is <strong>Thursday, September 21, 2023.</strong>
            </p>
          </>
        }
        bookingLink="https://www.marriott.com/events/start.mi?id=1677609881802&key=GRP"
      />
    </div>
    <section className="inline-block">
      <h3 className="my-4">Nearby Airports & Train Stations</h3>
      <p>
        There are many ways to access downtown Washington, D.C., but below are all of the nearby
        major airports and train stations.
      </p>
      <p>
        Most airline and travel websites will search all three airports when using the airport code{' '}
        <em>WAS</em>.
      </p>
      <ul className="list-disc mb-4 ml-4 pl-4">
        <li>
          <strong>DCA</strong>: Ronald Reagan Washington National Airport
        </li>
        <li>
          <strong>IAD</strong>: Washington Dulles International Airport
        </li>
        <li>
          <strong>BWI</strong>: Baltimore/Washington International Thurgood Marshall Airport
        </li>
        <li>
          <strong>Amtrak</strong>: Union Station
        </li>
        <li>
          <strong>Amtrak</strong>: Alexandria Station
        </li>
      </ul>
      <p>
        All airports and train stations are now accessible by public transportation, but rideshare
        services such as Uber and Lyft are great ways to navigate your way to downtown Washington,
        D.C. and Georgetown, specifically.
      </p>
      <p>
        For more information on how to get to and around Washington, D.C, visit{' '}
        <a href="https://washington.org/" target="_blank" className="underline">
          Washington.org
        </a>
      </p>
    </section>
  </>
);

export default TravelDetails;
