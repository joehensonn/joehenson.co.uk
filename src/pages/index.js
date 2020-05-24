import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CurrentlyListening from "../components/currently-playing";

class IndexPage extends React.Component {  
  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />

        <section>
          <div className="hello-homepage">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Joe 👋🏻</h1>
            <p className="text-2xl font-normal text-gray-700 pt-2">Software Developer & Freelance Digital Designer</p>

            <CurrentlyListening />
          </div>
        </section>

      </Layout>
    )
  }

}

export default IndexPage;
