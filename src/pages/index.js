import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import Layout from "../components/layout";
import SEO from "../components/seo";
import CurrentlyListening from "../components/currently-playing";
import {ME_API} from '../utilities/settings';

class IndexPage extends React.Component {
  state = {
    loading: true,
    error: false, 
    information: []
  }

  componentDidMount() {
    fetch(`${ME_API}/home/outside`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          information: json,
          loading: false
        })
      })
      .catch(() => console.log("Can’t access response. Blocked by browser?"))
  }

  render() {
    const {information, loading} = this.state;

    return (
      <Layout>
        <SEO
          keywords={[`joe henson`, `henson`, `development`, `developer`]}
          title="Portfolio"
        />

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
                <input type="checkbox" 
                  onChange={e => 
                    toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                  />{' '}  
              
              Dark mode           
            </label>
          )}
        </ThemeToggler>

        <section>
          <div className="flex-wrap object-contain">
            <h1 className="text-4xl md:text-6xl font-bold dark:text-green-500">Hi, I&apos;m Joe 👋🏻</h1>
            <p className="text-xl md:text-2xl font-normal text-gray-700">Software Developer & Freelance Digital Designer</p>

            <section>
              <h3 className="text-3xl font-semibold pt-10">Who am I?</h3>

              <p className="pt-3 text-xl font-normal text-gray-700">I currently work as a Senior Software Developer at Lincoln Students&apos; Union, leading a team of developers working on the <a target="_blank" rel="noopener noreferrer" href="https://sums.su">SUMS</a> project.</p>
              <p className="pt-3 text-xl font-normal text-gray-700">My passion is to design and develop websites and apps so hit me up for any freelance work.</p>
            </section>

            <section className="pt-10">
              <h3 className="text-3xl font-semibold">Facts</h3>

              <ul className="list-none pt-5 text-xl">
                  {!loading && <li className="pb-2">🏠 Live in {`${information?.location?.city}, ${information?.location?.country}`}</li>}
                  <li className="pb-2">💻 Full Stack Developer</li>
                  <li className="pb-2">🎨 Freelance Digital Designer</li>
                  <li className="pb-2">🍎 Apple obsessed</li>
                  <li className="pb-2">🍟 McDonald&apos;s addiction</li>
              </ul>
            </section>

            <section className="pt-10">
              <h3 className="text-3xl font-semibold">My Music</h3>

              <p className="pt-3 text-xl font-normal text-gray-700">What I&apos;m currently listening to</p>

              <CurrentlyListening />
            </section>

            
          </div>
        </section>

      </Layout>
    )
  }

}

export default IndexPage;
