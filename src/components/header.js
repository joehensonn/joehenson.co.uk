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

  return (
    <header className="text-gray-800">
      <div className="flex flex-wrap items-center justify-between max-w-4xl px-16 py-8 mx-auto md:p-8">
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
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/work`,
              title: `Work`,
            },
          ].map((link) => (
            <Link
              className="hover:bg-gray-200 p-3 rounded-lg block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
