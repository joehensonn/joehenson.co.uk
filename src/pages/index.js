import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CurrentlyListening from "../components/currently-playing";
import Project from "../components/project";
import {ME_API} from '../utilities/settings';

import EngineShedLogo from "../images/es-logo.png";
import SUMSLogo from "../images/sums-logo.png";
import BargeLogo from "../images/thebarge-logo.png";
import StudentOrdersLogo from "../images/student-orders-logo.png";

function IndexPage() {
  const [loading, setLoading] = useState(true);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    fetch(`${ME_API}/home/outside`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setLoading(false);
        setInformation(json)
      })
      .catch(() => {})
  }, []);

  return (
    <Layout>
      <SEO
        keywords={[`joe henson`, `henson`, `development`, `developer`]}
        title="Portfolio"
      />

      <section>
        <div className="flex-wrap object-contain dark:text-gray-100">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Joe 👋🏻</h1>
          <p className="text-xl md:text-2xl font-normal text-gray-700 dark:text-gray-300">Software Developer & Freelance Digital Designer</p>

          <section>
            <h3 className="text-3xl font-semibold pt-10">Who am I?</h3>

            <p className="pt-3 text-xl font-normal text-gray-700 dark:text-gray-300">I currently work as a Senior Software Developer at Lincoln Students&apos; Union, leading a team of developers working on the <a target="_blank" rel="noopener noreferrer" href="https://sums.su">SUMS</a> project.</p>
            <p className="pt-3 text-xl font-normal text-gray-700 dark:text-gray-300">My passion is to design and develop websites and apps so hit me up for any freelance work.</p>
          </section>

          <section className="pt-10">
            <h3 className="text-3xl font-semibold">Facts</h3>

            <ul className="list-none pt-5 text-xl">
                {!loading && <li className="pb-2">🏠 Live in {`${information?.location?.city}, ${information?.location?.country}`}</li>}
                <li className="pb-2">💻 Senior Software Developer at Lincoln Students&apos; Union</li>
                <li className="pb-2">👨🏻‍💻 Full Stack Developer</li>
                <li className="pb-2">🎨 Freelance Digital Designer</li>
                <li className="pb-2">🍎 Apple fanboy</li>
                <li className="pb-2">🚇 Tube obssessed</li>
            </ul>
          </section>

          <section className="pt-10">
            <h3 className="text-3xl font-semibold">My Music</h3>

            <p className="pt-3 text-xl font-normal text-gray-700 dark:text-gray-300">What I&apos;m currently listening to</p>
            <CurrentlyListening /> 
          </section>

          <section className="pt-10">
            <h3 className="text-3xl font-semibold">Work</h3>

            <p className="pt-3 text-xl font-normal text-gray-700 dark:text-gray-300">Below is an example of projects I&apos;ve worked on the past few years.</p>

            <div className="flex mt-5 gap-7 flex-wrap">
              <Project 
                name="The Engine Shed"
                logo={EngineShedLogo}
                description="Designed & built the website for Lincolnshire’s largest live music and entertainment facility."
                link="https://engineshed.co.uk"
              />
              <Project 
                name="Students' Union Management System"
                logo={SUMSLogo}
                description="Customer facing website for the Students' Union Management System."
                link="https://sums.digital"
              />
              <Project 
                name="The Barge"
                logo={BargeLogo}
                description="Main customer website for Lincoln's only on-the-water cocktail bar."
                link="https://thebargelincoln.co.uk"
              />
              <Project 
                name="Student Orders"
                logo={StudentOrdersLogo}
                description="Customer facing website for the Student Orders iPhone/Android App."
                link="https://studentorders.co.uk"
              />
            </div>

          </section>

          
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;
