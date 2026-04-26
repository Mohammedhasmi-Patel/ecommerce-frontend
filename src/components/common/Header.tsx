import { Link, NavLink } from "react-router-dom"
import CustomNavLink from "./CustomNavLink"

const Header = () => {


  return (

    <nav className="flex justify-between items-center p-2">
        <div className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-bold text-2xl cursor-pointer">The Digital Creator</div>
        <ul className="flex gap-4">
            <CustomNavLink to="/new-arrivals">New Arrivals</CustomNavLink>
            <CustomNavLink to="/designers">Designers</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/contact-us">Contact Us</CustomNavLink>
        </ul>
        <div>
            User Icon
        </div>
    </nav>
  )
}

export default Header