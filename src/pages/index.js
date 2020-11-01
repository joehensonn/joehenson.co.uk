import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CurrentlyListening from "../components/currently-playing";

class IndexPage extends React.Component {  
  render() {
    return (
      <Layout>
        <SEO
          keywords={[`joe henson`, `henson`, `development`, `developer`]}
          title="Portfolio"
        />

        <section>
          <div className="flex-wrap object-contain">
            <h1 className="text-4xl md:text-5xl font-bold">Hi, I&apos;m Joe 👋🏻</h1>
            <p className="text-xl md:text-2xl font-normal text-gray-700 pt-1">Software Developer & Freelance Digital Designer</p>

            <CurrentlyListening />
          </div>
        </section>

      </Layout>
    )
  }

}

export default IndexPage;
