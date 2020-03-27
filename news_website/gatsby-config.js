module.exports = {
  siteMetadata: {
    siteUrl: 'localhost:9001',
    title: 'ARC.UA',
    description: 'Arc.UA розробляє і створює рішення проблем у різних сферах життя суспільства, щоб допомогти спільнотам українців зробити нашу країну безпечнішою, здоровішою та процвітаючою.',
    author: 'ARC.UA'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'general-settings',
          'navigation',
          'single-page',
          'publication',
          'member',
          'user'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}