import SiteNav from './SiteNav';

type Props = {
  showNav: boolean;
  handleNav: Function;
};

const SiteHeader = ({ showNav, handleNav }: Props) => {
  return (
    <header className="fixed w-full bg-secondary text-secondary-content top-0 flex justify-center py-4 px-4 sm:px-6 lg:px-8 z-50">
      <div className="w-full flex max-w-screen-xl justify-between items-center">
        <div className="font-serif text-2xl md:text-4xl flex-1 md:flex md:items-center md:gap-12">
          <a href="#" className="p-4 pl-0">
            <em>J & J</em>
          </a>
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <SiteNav showNav={showNav} handleNav={handleNav} />
        </div>
      </div>
      <div className="block md:hidden">
        <label className="btn btn-outline btn-secondary btn-circle border-secondary-content hover:border-secondary-content hover:background-secondary-focus swap swap-rotate">
          <input type="checkbox" checked={showNav} onChange={() => handleNav(!showNav)} />
          <svg
            className="swap-off fill-secondary-content hover:fill-secondary-content"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-secondary-content hover:fill-secondary-content"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </header>
  );
};

export default SiteHeader;
