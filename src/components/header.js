import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const navItems = [
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/work`,
      title: `Work`,
    },
  ];

  return (
    <header className="container mx-auto px-16 md:px-0 text-gray-800">
      <div className="flex flex-wrap items-center justify-between max-w-4xl py-8 mx-auto md:p-10">
        <Link to="/">
          <img
            alt={site.siteMetadata.title}
            className="block w-5"
            src={logo}
          />
        </Link>

        <button
          className="flex items-center block px-3 py-2 md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {navItems.map((link) => (
            <div className="p-3 text-center sm:text-left md:text-left lg:text-left" key={link.title}>
              <Link
                className="main-nav-hover hover:text-black mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                to={link.route}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
