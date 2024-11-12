import { useLocation } from "react-router-dom";
import { getActiveRouteDetails } from "../../route";
import { Role } from "../../utils/types";
import { useMemo } from "react";

const roles: Role[] = [Role.SUPER_ADMIN];

const Header = () => {
  const { pathname } = useLocation();

  const pathTitle = useMemo(() => {
    return getActiveRouteDetails(roles).find((p) => p.path === pathname)?.text;
  }, [pathname]);

  return (
    <div className="fixed flex w-[calc(100%-15rem)] bg-darkblack items-center justify-between px-5 h-16">
      <span className="text-sm font-medium text-grayfont">{pathTitle}</span>

      <div className="flex gap-x-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Arun Deshan</span>
          <span className="text-xs font-normal text-grayfont self-end">Super Admin</span>
        </div>
        <img
          className="inline-block h-10 w-1h-10 rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
