import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactHelmet from 'react-helmet'
require("typeface-alegreya")
const FONT=`

@font-face {
font-family: 'Picture House One Bold';
src:  url('mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff2') format('woff2'),
      url('mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff') format('woff');
}

@font-face {
font-family: 'Picture House One Regular';
src:  url('mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff2') format('woff2'),
      url('mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff') format('woff');
}

`

const Helmet = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ReactHelmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />

        <style type="text/css">{FONT}</style>

      </ReactHelmet>
    )}
  />
)

export default Helmet
