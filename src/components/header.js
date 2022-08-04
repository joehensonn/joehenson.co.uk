import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdjust} from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logo.png"
import darkModeLogo from "../images/logo_darkmode.png"
import {useTheme} from '@skagami/gatsby-plugin-dark-mode'

function Header() {
  const [theme, toggleTheme] = useTheme()

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
    <header className="container mx-auto px-16 md:px-0 text-gray-800">
      <div className="flex flex-wrap items-center justify-between max-w-4xl py-8 mx-auto md:p-10">
        <img
          alt={site.siteMetadata.title}
          className="block w-6"
          src={theme === 'dark' ? darkModeLogo : logo}
        />

        <div className="text-left">
          <FontAwesomeIcon icon={faAdjust} size="lg" className="pointer dark:text-gray-100" onClick={() => 
            toggleTheme(theme === 'dark' ? 'light' : 'dark')} />
        </div>
      </div>
    </header>
  );
}

export default Header;
