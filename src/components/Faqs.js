import React, { PureComponent } from 'react'
import { Box } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import ConfigContext from '../components/ConfigContext'

// override this query with your own questions!
const MAINPAGE_QUERY = graphql`
  query mainQuery {
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
        <Box id="faqs" animation="fadeIn">
            <StaticQuery
                query={MAINPAGE_QUERY}
                render={data => (
                  <Concertina data={data}  />
                )}
              />
        </Box>
    )

export default IndexPage
