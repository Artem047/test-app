import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-xl flex gap-7 justify-end p-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  );
};

export default Navbar;
