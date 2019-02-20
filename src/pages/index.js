import React, { PureComponent } from 'react'
import { Grid, Box, ResponsiveContext, Text, Heading, Stack, Paragraph} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'
import Nav from '../components/Nav'


const IndexPage = ({data}) => (

    <Layout>
{/*
        FIRST PAGE
 nav probably here
*/}
     <Box>
       <Stack anchor="bottom-right">
       <Hero />
       <Nav />
       </Stack>
{/*
  SECOND PAGE

    upcoming event card

picture or video of store

 location and hours*/}
  <Grid
    elevation="large"
    gap="medium"
    fill
    rows={["minmax(50vh,auto)", "minmax(50vh,auto)", "minmax(50vh,auto)", "minmax(50vh,auto)"]}
    columns={["1fr","minmax(36ch,80%)","1fr"]}
    areas={[
        { name: "video", start: [1,0], end: [1,0] },
        { name: "location", start: [0,1], end: [2,1] },
        { name: "story", start: [1,2], end: [1,2] },
        { name: "footer", start: [1,3], end: [1,3] },
        ]}
        >
      <Stack anchor="bottom-right" gridArea="video">
        <Box elevation="small" height="70vh" width="100%"              background="url(lots-of-flowers.svg)"
>
        This is a video or image
        </Box>
        <Box elevation="large" pad="large" margin="large" background="neutral-2" >
        <Text size="large">This is an event box</Text>
        </Box>
      </Stack>
        <Box elevation="small" direction="row-responsive" gridArea="location" background="brand"
        justify="between" pad="medium">
          <Box basis="1/2">
          <Heading size="medium">OPEN 10AM TO 7PM</Heading>
          <Text size="large">Every day except Monday</Text>
          </Box>
          <Box align="end" justify="end">
          <Heading size="medium" textAlign="end">111 Carlisle Blvd SE  Albuquerque, NM</Heading>
          </Box>
        </Box>
    {/*  THIRD PAGE
our story
nav again?
*/}
        <Box elevation="small" gridArea="story" background="black" direction="row-responsive">
        <Box  background="accent-1" >
        This is a cute image
        </Box>
        <Box background="accent-2"  pad="large">

        <Paragraph size="large">We're the Brewer family: Steve, Kelly, Max, Seth and Jalila. We love books. We've been writing, reading, designing and editing for over a hundred years.</Paragraph>
        <Paragraph size="large">We think that books are more important than ever. In a busy, distracted world, a real book is an oasis. Books change the way we think. They stretch our attention spans, challenge our opinions, transport us to other worlds. People who read books are more curious, more rational, and more kind.</Paragraph>
        <Paragraph size="large">We're building a place for books and the people who love them. A place for community, right here in our beloved Nob Hill. A place away from the distractions of home and work. A gateway to other lands, a secret portal to the world of the book people.</Paragraph>
        <Paragraph size="large">We're on a journey. Come with us.</Paragraph>
        </Box>
        </Box>
        </Grid>
                </Box>
                </Layout>
            )

export default IndexPage
