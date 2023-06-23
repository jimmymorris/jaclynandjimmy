type Props = {
  showNav: boolean;
  handleNav: Function;
};

const SiteNav = ({ showNav, handleNav }: Props) => (
  <nav
    aria-label="Site Nav"
    className={`${
      showNav ? 'md:block' : 'hidden md:block'
    } absolute md:static left-0 p-4 bg-secondary md:bg-transparent border-t-secondary-content md:border-0 border-t w-full top-[100%]`}
  >
    <ul className="menu menu-vertical bg-secondary md:menu-horizontal flex flex-col md:flex-row md:items-center gap-6">
      <li>
        <a
          onClick={() => handleNav(false)}
          href="#details"
          className="hover:text-secondary hover:bg-secondary-content"
        >
          Event Details
        </a>
      </li>
      <li>
        <a
          onClick={() => handleNav(false)}
          href="#travel"
          className="hover:text-secondary hover:bg-secondary-content"
        >
          Stay & Travel
        </a>
      </li>
      <li>
        <a
          onClick={() => handleNav(false)}
          href="#registry"
          className="hover:text-secondary hover:bg-secondary-content"
        >
          Registry
        </a>
      </li>
      <li>
        <a
          onClick={() => handleNav(false)}
          href="#qa"
          className="hover:text-secondary hover:bg-secondary-content"
        >
          Q & A
        </a>
      </li>
    </ul>
  </nav>
);

export default SiteNav;
