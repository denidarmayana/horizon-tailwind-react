import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"; // Import icons for arrows

export function SidebarLinks(props) {
  let location = useLocation();

  const { routes } = props;

  // State to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Toggle menu when clicked
  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Create menu links and handle submenus
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      // Handle routes with children (submenu)
      if (route.children) {
        return (
          <div key={index}>
            <div
              className="relative flex items-center px-4 py-2 cursor-pointer font-medium text-gray-600 hover:text-brand-500 dark:text-white"
              onClick={() => handleMenuClick(index)}
            >
              <span>{route.icon ? route.icon : <DashIcon />}</span>
              <p className="ml-3">{route.name}</p>

              {/* Arrow icon for dropdown */}
              <span className="ml-auto">
                {openMenu === index ? (
                  <MdKeyboardArrowDown className="h-5 w-5" />
                ) : (
                  <MdKeyboardArrowRight className="h-5 w-5" />
                )}
              </span>
            </div>

            {/* Submenu */}
            {openMenu === index && (
              <ul className="ml-6">
                {route.children.map((childRoute, childIndex) => (
                  <Link
                    key={childIndex}
                    to={childRoute.layout + "/" + childRoute.path}
                  >
                    <li
                      className={`relative mb-1 flex cursor-pointer items-center px-4 py-2 ${activeRoute(
                        childRoute.path
                      )
                        ? "font-bold text-brand-500 dark:text-white"
                        : "font-medium text-gray-600"
                      }`}
                    >
                      <p className="ml-3">{childRoute.name}</p>
                      {activeRoute(childRoute.path) ? (
                        <div className="absolute right-0 top-0 h-full w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
                      ) : null}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        );
      }

      // Regular route without children
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-1 flex hover:cursor-pointer">
              <li className="my-[2px] flex cursor-pointer items-center px-4 py-2">
                <span
                  className={`${
                    activeRoute(route.path)
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                <p
                  className={`ml-3 flex ${
                    activeRoute(route.path)
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-0 h-full w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
      return null;
    });
  };

  return createLinks(routes);
}

export default SidebarLinks;
