import { ReactElement } from 'react';
import classNames from 'classnames';

type HotelCardTypes = {
  name: string;
  address: string;
  mapLink: string;
  description: string | ReactElement;
  bookingLink: string;
  className?: string;
};

const HotelCard = ({
  address,
  bookingLink,
  className = '',
  description,
  mapLink,
  name,
}: HotelCardTypes) => (
  <section
    className={classNames([
      'flex',
      'flex-col',
      'rounded-lg',
      'border',
      'border-primary',
      'p-4',
      'shadow-sm',
      'transition',
      'hover:shadow-lg',
      'sm:p-6',
      ...className.split(' '),
    ])}
  >
    <h3 className="leading-snug mb-3">{name}</h3>
    <p>
      <a href={mapLink} target="_blank">
        {address}
      </a>
    </p>
    {typeof description === 'string' ? <p>{description}</p> : description}
    <div className="mt-auto">
      <a
        href={bookingLink}
        target="_blank"
        className="btn btn-primary hover:text-primary-content btn-wide md:btn-md"
      >
        Check Availability
      </a>
    </div>
  </section>
);

export default HotelCard;
