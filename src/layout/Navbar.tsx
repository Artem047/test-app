import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="text-xl flex gap-7 justify-end p-6">
        <NavLink to='/work'>Work</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default Navbar