import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ReactHelmet from 'react-helmet'

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
      </ReactHelmet>
    )}
  />
)

export default Helmet
