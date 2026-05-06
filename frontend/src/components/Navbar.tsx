import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-5">
      <ul className="navbarLi flex justify-center gap-8 bg-purple-200 h-fit px-4 py-2 rounded-lg border-purple-500 border text-zinc-700 text-sm">
        <NavLink to="/" end>
          <li>Url-Shortener</li>
        </NavLink>
        <NavLink to="/" end>
          <li>Home</li>
        </NavLink>
        <NavLink to="/pricing">
          <li>Pricing</li>
        </NavLink>
        <NavLink to="/faqs">
          <li>FAQs</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
