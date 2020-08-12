import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../utilities/fontawesome'

import EngineShedLogo from "../images/es-logo.png";
import SUMSLogo from "../images/sums-logo.png";
import BargeLogo from "../images/thebarge-logo.png";
import StudentOrdersLogo from "../images/student-orders-logo.png";

import CumulusLogo from "../images/cumulus-logo.png";
import JHPLogo from "../images/jhp-logo.png";
import CulinaryCraftLogo from "../images/culinarycraft-logo.png";

function WorkPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Joe Henson`, `Henson`, `Design`, `Development`]}
        title="Work"
      />

      <section>

        <h1 className="text-4xl font-semibold">
            Pinned Projects
            <p className="pt-3 text-base text-gray-700 float-right"><span className="bg-gray-200 p-5 rounded-lg buttons-key"><FontAwesomeIcon icon="code" className="mr-1 text-gray-600"/> Built <span className="ml-5"><FontAwesomeIcon icon="paint-brush" className="mr-1 text-gray-600"/> Designed</span> </span></p>
        </h1>
        <p className="pt-3 text-xl font-normal text-gray-700">Below is a variety of work I&apos;ve completed over the past couple years.</p>

      </section>

      <section className="projects mt-10">

        <div className="each">
            <h2>
                <a className="project-link justify-content-center" href="https://engineshed.co.uk" target="_blank" rel="noopener noreferrer">
                <img
                    alt="Words"
                    className="work-image"
                    src={EngineShedLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">Designed & built the website for Lincolnshire’s largest live music and entertainment facility</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" className="mb-4" />
                <FontAwesomeIcon icon="paint-brush" size="lg" />
            </div>
        </div>

        <div className="each">
            <h2>
                <a className="project-link justify-content-center" href="https://sums.su" target="_blank" rel="noopener noreferrer">
                <img
                    alt="Words"
                    className="work-image"
                    src={SUMSLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">Customer facing website for the Students&apos; Union Management System</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" className="mb-4" />
                <FontAwesomeIcon icon="paint-brush" size="lg" />
            </div>
        </div>

        <div className="each">
            <h2>
                <a className="project-link justify-content-center" href="https://thebargelincoln.co.uk" target="_blank" rel="noopener noreferrer">
                <img
                    alt="Words"
                    className="work-image"
                    src={BargeLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">Main customer website for Lincoln&apos;s only on the water cocktail bar</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" className="mb-4" />
                <FontAwesomeIcon icon="paint-brush" size="lg" />
            </div>
        </div>

        <div className="each">
            <h2>
                <a className="project-link justify-content-center" href="https://studentorders.co.uk" target="_blank" rel="noopener noreferrer">
                <img
                    alt="Words"
                    className="work-image"
                    src={StudentOrdersLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">Customer facing website for the Student Orders iPhone/Android App</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" className="mb-4" />
                <FontAwesomeIcon icon="paint-brush" size="lg" />
            </div>
        </div>

      </section>

        <section className="mt-16">
            <h1 className="text-3xl font-semibold">Other Work</h1>
            <p className="pt-3 text-lg font-normal text-gray-700">Some other small projects I&apos;ve worked on. Links coming soon...</p>
        </section>


        <section className="projects mt-10">

        <div className="each smaller-project">
            <h2>
                <a className="project-link justify-content-center" href="https://github.com/joehensonn/jhp-framework" target="_blank" rel="noopener noreferrer">
                <img
                    alt="Words"
                    className="work-image"
                    src={JHPLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">My own MVC PHP framework, ready to be taken to the next level</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" className="mb-4" />
            </div>
        </div>

        <div className="each smaller-project">
            <h2>
                <a className="project-link justify-content-center">
                <img
                    alt="Words"
                    className="work-image"
                    src={CumulusLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">My own laravel-powered CMS. This is currently a work in progress.</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="code" size="lg" />
            </div>
        </div>

        <div className="each smaller-project">
            <h2>
                <a className="project-link justify-content-center">
                <img
                    alt="Words"
                    className="work-image"
                    src={CulinaryCraftLogo}
                />
                </a>
            </h2>
            <div><p className="text-gray-700">Website design concept, content and rough layout in under 2 hours</p></div>
            <div className="buttons text-gray-600">
                <FontAwesomeIcon icon="paint-brush" size="lg" className="mb-4" />
            </div>
        </div>

        </section>

    </Layout>
  );
}

export default WorkPage;
