const HotelCard = ({ name, location, mapLink, description, bookingLink }) => (
  <section className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
    <h3 className="leading-snug mb-3">{name}</h3>
    <p>
      <a href={mapLink} target="_blank">
        {location}
      </a>
    </p>
    <p>{description}</p>
    <a
      href={bookingLink}
      target="_blank"
      className="inline-block rounded bg-slate-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
    >
      Check Availability
    </a>
  </section>
);

export default HotelCard;
