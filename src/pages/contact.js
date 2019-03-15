import React, { PureComponent } from 'react'
import { Box, ResponsiveContext, Grid, Markdown, Stack, Paragraph, Text, Image, Heading, Anchor} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'
import Bio from '../components/Bio'
import Nav from '../components/Nav'
import styled from 'styled-components'
import css from 'styled-components'
import Slice from '../components/Slice'
import { ChatOption  } from 'grommet-icons'
const CONTENT=`

**We love books. We've been writing, reading, designing and editing for over a hundred years.**

Books are more important than ever. In a busy, distracted world, a real book is an oasis. Books change the way we think. They stretch our attention spans, challenge our opinions, transport us to other worlds. People who read books are more curious, more rational, and more kind.

**We're building a place for books and the people who love them.**

A place for community, right here in our beloved Nob Hill.

A place away from the distractions of home and work.

A gateway to other lands, a secret portal to the world of the book people.

**We're on a journey. Come with us.**

`

const CREDITS=`
  ## Credits

  We couldn't have done this alone. Our community donated books, thoughts and labor through the whole process.

  Some of the people who helped, in no particular order:
`

const LIST=`
  * Jen Barol
  * J. Mark Dyke
  * Margaret Pedrotty
  * Margaret Tessler
  * Laura Mudd
  * Anne Browne
  * Jay Rosenblum
  * Stacy Comacho
  * Kathy Caffrey
  * Laurie Mouy
  * Patricia Wood Smith
  * Vivia Sparkler
  * Phyllis Hoge Thompson
  * Marla Hart Clark
`
const StyledP=styled.p`
background-color: "black";
`
const ChatBanner = () => {
  return [
    <Box direction="row" alignSelf="center" alignContent="center" overflow="hidden" margin={{ "top": "-1em", "bottom": "1em"}}>
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
      <ChatOption size="small" color="accent-4" />
    </Box>
  ]
}

const IndexPage = ({data}) => (

      <Layout>
       <Box>
       <Hero />
       <Nav />

       <Slice
            alignSelf="center"
            alignContent="start"
            margin={{ "bottom": "xlarge"}}
            width="large"
            pad="large"
            background="accent-2"
            border={{
              "color": "accent-4",
              "size": "medium"
            }}>

        <Heading level="1">Contact</Heading>
        <ChatBanner />
        <Text textAlign="center" size="xxlarge" weight="800">We're the Brewer family.</Text>
        <Box width="100%" height="auto" pad="none" margin="none">
          <Image fit="cover" src="/animated.gif" />
        </Box>
        <Grid
            alignSelf="center"
            fill="horizontal"
            margin="small"
            columns={{
              count: 3,
              size: "auto"
            }}
            gap="small"
          >
            <Bio name="Steve" />
            <Bio name="Kelly" />
            <Bio name="Max" />
            <Bio name="Seth" />
            <Bio name="Jalila" />
            <Bio name="Molly" />
        </Grid>

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
            },
            a: {
              component: Anchor,
            },

          }}
        >{CONTENT}</Markdown>

       </Slice>
       <Slice
            alignSelf="center"
            alignContent="start"
            margin={{ "bottom": "xlarge"}}
            width="large"
            pad="large"
            background="accent-2"
            border={{
              "color": "accent-4",
              "size": "medium"
            }}>
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
           },
           a: {
             component: Anchor,
           },
           ul: {
             component: Text,
             props: {
               size: "large"
               }
             }
           }}
       >{CREDITS}</Markdown>
       <Box
       css={css`
         text-transform: none;
         -webkit-column-count: 2; /* Chrome, Safari, Opera */
         -moz-column-count: 2; /* Firefox */
         column-count: 2;
       `}
       >
       <Markdown
         components={{
           ul: {
             component: Text,
             props: {
               size: "large"
               }
             }
           }}
       >{LIST}</Markdown>       </Box>
      </Slice>

      <Slice alignSelf="center"
      alignContent="start"
      margin={{ "bottom": "xlarge"}}
      width="large"
      pad="large"
      background="accent-2"
      border={{
        "color": "accent-4",
        "size": "medium"
      }}>
      <Text textAlign="center">This website made by Max</Text>
      </Slice>
        </Box>
        </Layout>
    )

export default IndexPage
