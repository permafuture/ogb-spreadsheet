import React, { PureComponent } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'

// override this query with your own questions!
const HOMEPAGE_QUERY = graphql`
  query homeQuery {
    allGoogleSheetFaqsRow {
      edges {
        node {
          id
          category
          question
          answer
        }
      }
    }
  }
`
const IndexPage = ({data}) => (

      <Layout>
       <Box>
        <Hero />
        <Box id="faqs" alignSelf="middle" >
            <StaticQuery
                query={HOMEPAGE_QUERY}
                render={data => (
                  <Concertina data={data}  />
                )}
              />
        </Box>
        </Box>
        </Layout>
    )

export default IndexPage
