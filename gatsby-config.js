const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        title: `Joe Henson`,
        description: `A brief overview of me and my work`,
        author: `@joehenson`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-147033707-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
            },
        },
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-tailwind`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["400"],
                display: `minimal-ui`,
                icon: `src/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Josefin Sans", "League Spartan"],
                },
            },
        },
        `gatsby-plugin-favicon`,
        `gatsby-plugin-dark-mode`,
    ],
};
