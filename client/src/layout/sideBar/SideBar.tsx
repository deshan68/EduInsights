import { matchPath, NavLink, useLocation, useMatches } from "react-router-dom";
import { getActiveRouteDetails } from "../../route";
import { Role } from "../../utils/types";
import LinkItem from "../LinkItem";
import { APP_NAME } from "../../config/config";
import logo from "../../assets/icons/logo.svg";
const roles: Role[] = [Role.SUPER_ADMIN];

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  let matches = useMatches();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return patterns.indexOf(possibleMatch.pattern.path);
    }
  }
  for (let i = 0; i < matches.length; i += 1) {
    if (patterns.indexOf(matches[i].pathname) !== -1) {
      return patterns.indexOf(matches[i].pathname);
    }
  }

  return null;
}

const SideBar = () => {
  const currentIndex = useRouteMatch([
    ...getActiveRouteDetails(roles).map((r) => r.path),
  ]);
  
  return (
    <aside className="flex h-screen w-60 px-3 py-6 flex-col overflow-y-hidden bg-darkblue border-r-[1px] border-lightbluestroke">
      {/* logo and app name */}
      <NavLink to={"/"} className="flex gap-x-2 mb-9">
        <img alt="EduInsights Logo" src={logo} height="30" width="30" />
        <span className="font-extrabold text-2xl">{APP_NAME}</span>
      </NavLink>

      {/* link items */}
      <ul>
        {getActiveRouteDetails(roles).map((r, idx) => (
          <div key={idx}>
            {!r.bottomNav && (
              <LinkItem
                key={idx}
                to={r.path}
                icons={r.icons}
                title={r.text}
                isActive={currentIndex === idx}
              />
            )}
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
