import React from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface CustomNavLinkProps extends NavLinkProps {
  children: React.ReactNode;
}

const CustomNavLink = ({ to, children, ...props }: CustomNavLinkProps) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        `font-medium transition-all pb-1 ${
          isActive
            ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
            : "text-gray-500 hover:text-gray-900"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
