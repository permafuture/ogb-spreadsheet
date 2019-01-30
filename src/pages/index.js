import React, { PureComponent } from 'react'
import { Grid, Box, ResponsiveContext, Text, Heading, Stack } from 'grommet'
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
{/*
  SECOND PAGE

    upcoming event card

picture or video of store

 location and hours*/}
  <Grid
    fill
    rows={["70vh", "30vh"]}
    columns={["1fr","minmax(36ch,80%)","1fr"]}
    areas={[
        { name: "video", start: [1,0], end: [1,0] },
        { name: "location", start: [1,1], end: [1,1] },
        ]}
        >
      <Stack anchor="bottom-right" gridArea="video">
        <Box height="70vh" width="100%"  background="red">
        This is a video or image
        </Box>
        <Box elevation="large" pad="large" margin="large" background="green" >
        <Text size="large">This is an event box</Text>
        </Box>
      </Stack>
        <Box elevation="small" direction="row-responsive" gridArea="location" background="yellow">
          <Box basis="1/2">this is hours</Box>
          <Box>this is location</Box>
        </Box>
      </Grid>
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
