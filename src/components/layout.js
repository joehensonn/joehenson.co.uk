import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from '../components/footer';

import { ThemeProvider } from './theme-context';

function Layout({ children }) {
  return (
    <>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen font-sans dark:bg-gray-900">
          <Header />

          <main className="main-content flex-1 justify-center w-full max-w-4xl px-16 py-8 mx-auto md:px-8 md:py-16">
            {children}
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
    
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
