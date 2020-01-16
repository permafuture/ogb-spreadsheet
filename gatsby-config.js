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
    siteUrl: `https://organicbooks.net`,
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
        icon: 'media/icon.svg',
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
  ],
}
