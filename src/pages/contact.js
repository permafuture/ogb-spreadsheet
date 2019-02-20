import React, { PureComponent } from 'react'
import { Box, ResponsiveContext, Grid, Markdown, Stack, Paragraph, Text, Image, Heading} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'
import Bio from '../components/Bio'
import Nav from '../components/Nav'
import styled from 'styled-components'
import Slice from '../components/Slice'

const CONTENT=`

**We love books. We've been writing, reading, designing and editing for over a hundred years.**

We think that books are more important than ever. In a busy, distracted world, a real book is an oasis. Books change the way we think. They stretch our attention spans, challenge our opinions, transport us to other worlds. People who read books are more curious, more rational, and more kind.

**We're building a place for books and the people who love them.**

A place for community, right here in our beloved Nob Hill.

A place away from the distractions of home and work.

A gateway to other lands, a secret portal to the world of the book people.

**We're on a journey. Come with us.**
`
const StyledP=styled.p`
background-color: "black";
`

const IndexPage = ({data}) => (

      <Layout>
       <Box>
       <Hero />
       <Nav />

       <Slice
            alignSelf="center"
            alignContent="start"
            margin={{ "top": "xlarge", "bottom": "xlarge"}}
            width="large"
            pad="large"
            background="accent-2"
            border={{
              "color": "accent-4",
              "size": "medium"
            }}>

        <Heading level="1">Contact</Heading>
        <Text textAlign="center" size="xxlarge" weight="800">We're the Brewer family.</Text>
        <Box width="100%" height="auto" pad="none" margin="none">
          <Image fit="cover" src="animated.gif" />
        </Box>
        <Markdown
          components={{
            p: {
              component: Paragraph,
              props: {
                size: 'xlarge',
                alignSelf: 'center',
              }
            },
            strong: {
              component: Text,
              props: {
                size: 'xxlarge',
                weight: 800,
              }
            },
            img: {
              component: Image,
              props: {
                fit: 'contain',
              }
            }
          }}
        >{CONTENT}</Markdown>
       </Slice>
        </Box>
        </Layout>
    )

export default IndexPage
