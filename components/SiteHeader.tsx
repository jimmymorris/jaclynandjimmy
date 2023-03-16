type Props = {
  showNav: boolean;
  handleNav: () => void;
};

const SiteHeader = ({ showNav, handleNav }: Props) => {
  return (
    <header className="fixed w-full bg-slate-50 top-0 shadow-xl flex justify-center py-4 px-4 sm:px-6 lg:px-8 z-50">
      <div className="w-full flex max-w-screen-xl justify-between items-center">
        <div
          id="#id"
          className="font-serif text-2xl md:text-4xl flex-1 md:flex md:items-center md:gap-12"
        >
          J & J
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <nav
            aria-label="Site Nav"
            className={`${
              showNav ? 'md:block' : 'hidden md:block'
            } absolute md:static left-0 p-4 bg-slate-100 md:bg-transparent w-full top-[100%]`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-6 text-md">
              <li>
                <a href="#details">Event Details</a>
              </li>
              <li>
                <a href="#travel">Stay & Travel</a>
              </li>
              <li>
                <a href="#qa">Q & A</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="block md:hidden">
        <button
          className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          onClick={handleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
