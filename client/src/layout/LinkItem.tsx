import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ to, icons, title, isActive }: ListItemLinkProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`flex items-center px-3 py-2 gap-x-2 text-sm text-grayfont font-medium mb-1 hover:bg-lightblue hover:rounded-md
          ${isActive && "text-white bg-lightblue rounded-md"}`}
      >
        {icons ? (isActive ? icons[1] : icons[0]) : null}
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default LinkItem;

interface ListItemLinkProps {
  icons: React.ReactElement[] | undefined;
  to: string;
  title: string;
  isActive: boolean;
}
