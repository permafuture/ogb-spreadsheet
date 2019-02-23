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
       <Hero />
       <Nav />
{/*
  SECOND PAGE

    upcoming event card

picture or video of store

 location and hours*/}

        <Box height="70vh" width="100%"              background="black"
        justify="center"
        border={{
          side: "horizontal",
          "color": "accent-4",
          "size": "medium"
        }}
        >
        <Text color="white" size="xlarge" alignSelf="center">
        A film by Gus Pedrotty
          </Text>
        </Box>
        <Box  pad="large" margin="large" background="neutral-2" border={{
          side: "all",
          "color": "accent-3",
          "size": "medium"
        }}>
        <Text size="xlarge" alignSelf="center" >NEXT EVENT</Text>
        </Box>
        <Box minHeight="100vh"
        margin={{bottom: "small"}}
        border={{
          side: "horizontal",
          "color": "accent-4",
          "size": "medium"
        }}>
        <Box  direction="row-responsive" background="brand"
        pad="small"
        >
          <Box basis="1/2" alignContent="center " align="start" justify="start">
          <Heading level="2" size="large" margin="none">OPEN 10AM TO 7PM</Heading>
          <Heading  level="3" margin="none">closed Mondays</Heading>
          </Box>
          <Box align="end" justify="end" margin="small">
          <Heading level="2" size="medium" textAlign="end" margin="small">111 Carlisle Blvd SE  Albuquerque, NM</Heading>
          </Box>
        </Box>
    {/*  THIRD PAGE
our story
nav again?
*/}
        <Box  background={{ image: "url(us-canvas.png)", position: "top left"}} height="70vh"/>
          </Box>
                </Layout>
            )

export default IndexPage
