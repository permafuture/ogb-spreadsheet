import React, { PureComponent } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'


const IndexPage = ({data}) => (

      <Layout>
{/*
        FIRST PAGE
 nav probably here
*/}
       <Box>
        <Hero />
{/*
  SECOND PAGE

    upcoming event card

picture or video of store

 location and hours*/}
      <Box height="100vh" background="white">
        <Box height="40vh" width="40vh" margin="small" background="green"alignSelf="center">
        This is an event box
        </Box>
        <Box height="20vh" width="100vw" margin="none" background="red">
        This is a video or image
        </Box>
      </Box>
    {/*  THIRD PAGE
our story
nav again?
*/}
<Box height="100vh" background="black" direction="row-responsive">
<Box height="40ch" width="40ch" background="blue" alignSelf="start">
This is a cute image
</Box>
<Box height="25em" width="40ch" margin="xlarge" background="blue" alignSelf="end">
This is our story box
</Box>
</Box>

        </Box>
        </Layout>
    )

export default IndexPage
