  const appConfig = require('./appConfig')
require('dotenv').config()

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => ({
  type: 'service_account',
  project_id: PROJECT_ID,
  private_key_id: PRIVATE_KEY_ID,
  private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
  client_email: `the-395@${PROJECT_ID}.iam.gserviceaccount.com`,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${PROJECT_ID}%40appspot.gserviceaccount.com`,
})

module.exports = {
  siteMetadata: {
    title: 'Organic Books',
    titleTemplate: "%s - Albuquerque new and used bookstore",
    siteUrl: `https://organicbooks.net`,
    description: `Nob Hill's home-grown family-owned bookstore.
    We sell used books, new books, books by local authors, cards, journals, pens and more!
    Find us at the Nob Hill Shopping Center in Albuquerque.
    Free events every weekend!
    We're open 10 to 7, every day except Mondays.  Or call (505)-553-3823.`,
    image: '/cover_photo.jpg',
    twitterUsername: "@OrganicBooksABQ",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Organic Books in Nob Hill',
        short_name: 'Organic Books',
        start_url: '/',
        background_color: '#4c934c',
        theme_color: appConfig.theme.brand,
        display: 'minimal-ui',
        icon: `media/icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1ugMl2mhKTko21DhD-cTB18kMZw5qZ-_qsPO0_Bto6cE',
        worksheetTitle: 'Events',
        credentials: buildCredentials(process.env),
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1ugMl2mhKTko21DhD-cTB18kMZw5qZ-_qsPO0_Bto6cE',
        worksheetTitle: 'Angel Credits',
        credentials: buildCredentials(process.env),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
       custom: {
       families: ['Picture House One Bold', 'Picture House One Regular']},
       },

     },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://organicbooks.net`,
    },
  },
  ],
}
