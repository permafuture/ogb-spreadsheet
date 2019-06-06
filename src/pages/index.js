import React from 'react'
import { Box, Heading, Video } from 'grommet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import Nav from '../components/Nav'
import groupEvents from '../utils/groupEvents'
import DayOfToday from '../components/Calendar/DayOfToday'
import Slice from '../components/Slice'


const IndexPage = ( {data} ) => (
  <Layout>

    <Hero />
    <Nav />
    {' '}

    <Slice
      width="large"
      alignSelf="center"
      margin="large"
      pad="large"
      background="neutral-2"
      border={{
      side: "all",
      "color" : "accent-3",
      "size" : "large"
    }}
    >
      <Heading alignSelf="center" level="3">Next Event</Heading>
      <DayOfToday events={groupEvents( data.allGoogleSheetEventsRow )} />
    </Slice>

    <Box
      minHeight="100vh"
      border={{
      side: "horizontal",
      "color" : "accent-4",
      "size" : "medium"
    }}
    >
      <Box direction="row-responsive" background="brand" pad="small">
        <Box basis="1/2" alignContent="center " align="start" justify="start">
          <Heading level="2" size="large" margin="none">OPEN 10AM TO 7PM</Heading>
          <Heading level="3" margin="none">closed Mondays</Heading>
        </Box>
        <Box align="end" justify="end" margin="small">
          <Heading level="2" size="medium" textAlign="end" margin="small">111 Carlisle Blvd SE Albuquerque, NM 505-553-3823</Heading>

        </Box>
      </Box>

      <Img fluid={data.file.childImageSharp.fluid} imgStyle={{ objectFit: 'cover' }} />

    </Box>
    <Box
      height="105vh"
      width="100%"
      background="black"
      justify="center"
      border={{
      side: "horizontal",
      "color" : "accent-4",
      "size" : "medium"
    }}
    >
      <Video controls="over" fit="cover" a11yTitle="a video featuring Organic Books">
        <source key="video" src="/nob-hill-ft-organic-books.mp4" type="video/mp4" />
        <source key="video" src="/nob-hill-ft-organic-books.webm" type="video/webm" />
      </Video>
    </Box>
  </Layout>
 )

export default IndexPage


IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  };



export const query = graphql `
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
          fluid(maxWidth: 1280, duotone: {
  highlight: "#ffffee",
  shadow: "#770000",
  opacity: 20  }) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
