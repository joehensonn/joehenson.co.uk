import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RecentlyPlayed from "../components/recently-played";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section>

        <h1 className="text-4xl font-semibold">About me</h1>

        <p className="pt-3 text-xl font-normal text-gray-700">My name is Joe Henson if you hadn&apos;t already guessed from the URL. This website is mainly aimed at showcasing my work both from my professional career and personal projects.</p>

        <p className="pt-3 text-xl font-normal text-gray-700">You&apos;ll find a combination of software/web development and design-focussed projects. Check out my <a href="https://github.com/joehensonn/" target="_blank" rel="noopener noreferrer">Github</a> for any code.</p>

      </section>

      <section className="pt-10">
        <h3 className="text-3xl font-semibold">Facts</h3>

        <ul className="list-disc m-3 ml-10 text-xl">
            <li className="pb-2">🏠 Live in Lincoln, UK</li>
            <li className="pb-2">💻 Full Stack Developer</li>
            <li className="pb-2">🎨 Freelance Digital Designer</li>
            <li className="pb-2">🍎 Apple obsessed</li>
            <li className="pb-2">🍟 McDonalds addiction</li>
            <li className="pb-2">🛵 Own a 1964 Lambretta Li 125</li>
        </ul>
      </section>

      <section className="pt-10">
        <h3 className="text-3xl font-semibold">Workflow</h3>

        <ul className="list-disc m-3 ml-10 text-xl">
            <li className="pb-2"><strong>Ecosystem - </strong>Apple/MacOS/iOS</li>
            <li className="pb-2"><strong>Editors - </strong><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a></li>
            <li className="pb-2"><strong>Theme - </strong><a href="https://github.com/daylerees/colour-schemes" target="_blank" rel="noopener noreferrer">Juicy</a></li>
            <li className="pb-2"><strong>Git Client - </strong><a href="https://www.sublimemerge.com/" target="_blank" rel="noopener noreferrer">Sublime Merge</a></li>
            <li className="pb-2"><strong>Database Client - </strong><a href="https://tableplus.io" target="_blank" rel="noopener noreferrer">Tableplus</a></li>
            <li className="pb-2"><strong>PHP Preference - </strong><a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a></li>
            <li className="pb-2"><strong>JS Preference - </strong>Vanilla, <a href="https://jquery.com" target="_blank" rel="noopener noreferrer">jQuery</a>, <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> (&amp; of course <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>)</li>
            <li className="pb-2"><strong>Design - </strong><a href="https://www.adobe.com/uk/creativecloud.html" target="_blank" rel="noopener noreferrer">Adobe Creative Cloud</a> (Illustrator, Photoshop, XD)</li>
            <li className="pb-2"><strong>Music - </strong>Spotify</li>
        </ul>
      </section>

      <section className="pt-10">
        <h3 className="text-3xl font-semibold">Music</h3>

        <p className="text-xl pt-3 pb-3">What I&apos;ve been listening to recently</p>

        <RecentlyPlayed />
      </section>

    </Layout>
  );
}

export default AboutPage;
