import React from 'react'
import { Box, Heading, Paragraph, Button } from 'grommet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEvents from '../utils/groupEvents'
import DayOfToday from '../components/Calendar/DayOfToday'
import Slice from '../components/Slice'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero />
    <Slice>
      <Heading alignSelf="center" level="3">Know what book you want? </Heading>
      <Button alignSelf="center" size="large">Get it now</Button>
      <Paragraph size="large">
We sell books new and used, with a special focus on local authors. We also carry cards, journals, pens and more.

Open 10 to 7, every day except Mondays
      </Paragraph>
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        Next Event
      </Heading>
      <DayOfToday events={groupEvents(data.allGoogleSheetEventsRow)} />
    </Slice>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query todayQuery {
    allGoogleSheetEventsRow {
      edges {
        node {
          id
          eventName: eventorbooktitle
          date: day
          host: authorhost
          start
        }
      }
    }
    file(relativePath: { eq: "not-a-painting.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 1280
          duotone: { highlight: "#ffffee", shadow: "#770000", opacity: 20 }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
