import React from 'react'
import { Box, Heading, Video, Image } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import Nav from '../components/Nav'
import groupEvents from '../utils/groupEvents'
import DayOfToday from '../components/Calendar/DayOfToday'
import Slice from '../components/Slice'

const SPREADSHEET_QUERY = graphql `
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
  }
`

const IndexPage = () => (
  <Layout>
    {/*
        FIRST PAGE
 nav probably here
*/
  }
    <Hero />
    <Nav />
    {' '}
    {/*
  SECOND PAGE

    upcoming event card

picture or video of store

 location and hours */
  }

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
      <StaticQuery query={SPREADSHEET_QUERY} render={data => ( <DayOfToday events={groupEvents( data )} /> )} />
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
          <Heading level="2" size="medium" textAlign="end" margin="small">111 Carlisle Blvd SE Albuquerque, NM</Heading>
        </Box>
      </Box>
      {/* THIRD PAGE
our story
nav again? */
    }
      <Box
        height="70vh"
      >
      <Image
        a11yTitle="a cute family reading books in the store"
      fallback="/us-canvas.png"
      src="/us-canvas.webp"
      fit="cover"
      />
  </Box>
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
