import PropTypes from "prop-types";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../utilities/fontawesome'

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-16 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer>
        <nav className="flex justify-between max-w-4xl p-4 mx-auto md:p-8">
          <p>
            ✍🏻 by Joe Henson
          </p>

          <p>
            <a className="font-medium no-underline p-2" href="https://instagram.com/joehensonn/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a className="font-medium no-underline p-2" href="https://twitter.com/joehensonn/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a className="font-medium no-underline p-2" href="https://www.linkedin.com/in/joehensonn/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a className="font-medium no-underline p-2" href="https://github.com/joehensonn/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
