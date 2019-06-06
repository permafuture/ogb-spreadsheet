import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Grid,
  Markdown,
  Paragraph,
  Text,
  Image,
  Heading,
  Anchor
} from 'grommet'
import { graphql } from 'gatsby'
import { ChatOption, Java } from 'grommet-icons'
import Credits from '../components/Credits'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import Bio from '../components/Bio'
import Nav from '../components/Nav'
import Slice from '../components/Slice'

const CONTENT = `

**We love books. We've been writing, reading, designing and editing for over a hundred years.**

Books are more important than ever. In a busy, distracted world, a real book is an oasis. Books change the way we think. They stretch our attention spans, challenge our opinions, transport us to other worlds. People who read books are more curious, more rational, and more kind.

**We're building a place for books and the people who love them.**

A place for community, right here in our beloved Nob Hill.

A place away from the distractions of home and work.

A gateway to other lands, a secret portal to the world of the book people.

**We're on a journey. Come with us.**

`

const CREDITS = `
  ## Credits

  We couldn't have done this alone. Our community donated books, thoughts and labor through the whole process.

  Some who helped:
`

const ChatBanner = () => [
  <Box
    direction="row"
    alignSelf="center"
    alignContent="center"
    overflow="hidden"
    margin={{
      "top" : "-1em",
      "bottom" : "1em"
    }}
  >
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
    <ChatOption size="small" color="accent-4" alt="" />
  </Box>
    ]

const ContactPage = ({data}) => (
  <Layout>
    <Box>
      <Hero />
      <Nav />

      <Slice
        alignSelf="center"
        alignContent="start"
        margin={{
        "bottom" : "xlarge"
      }}
        width="large"
        pad="large"
        background="accent-2"
        border={{
        "color" : "accent-4",
        "size" : "medium"
      }}
      >

        <Heading level="1">Contact</Heading>
        <ChatBanner />
        <Text textAlign="center" size="xxlarge" weight="800">We&apos;re the Brewer family.</Text>




        <Grid
          alignSelf="center"
          fill="horizontal"
          margin={{
          "top" : "large",
          "bottom" : "small"
        }}
          columns={{
          count: 3,
          size: "auto"
        }}
          rows={{
          size: "213px"
        }}
          gap="small"
        >
          {data.allFile.edges.map( ({ node } ) => (
            <Bio name={node.name} pic={node.childImageSharp.fixed} />
        ) )}
        </Grid>

        <Markdown components={{
          p: {
            component: Paragraph,
            props: {
              size: 'xlarge',
              alignSelf: 'center'
            }
          },
          strong: {
            component: Text,
            props: {
              size: 'xxlarge',
              weight: 800
            }
          },
          img: {
            component: Image,
            props: {
              fit: 'contain'
            }
          },
          a: {
            component: Anchor
          }
        }}
        >
          {CONTENT}
        </Markdown>

      </Slice>
      <Slice
        alignSelf="center"
        alignContent="start"
        margin={{
        "bottom" : "xlarge"
      }}
        width="large"
        pad="large"
        background="accent-2"
        border={{
        "color" : "accent-4",
        "size" : "medium"
      }}
      >
        <Markdown components={{
          p: {
            component: Paragraph,
            props: {
              size: 'xlarge',
              alignSelf: 'center'
            }
          },
          strong: {
            component: Text,
            props: {
              size: 'xxlarge',
              weight: 800
            }
          },
          img: {
            component: Image,
            props: {
              fit: 'contain'
            }
          },
          a: {
            component: Anchor
          },
          ul: {
            component: Text,
            props: {
              size: "large"
            }
          }
        }}
        >
          {CREDITS}
        </Markdown>

        <Credits creditsRows={data.allGoogleSheetAngelCreditsRow} />
      </Slice>

      <Slice
        alignSelf="center"
        alignContent="start"
        margin={{
        "bottom" : "xlarge"
      }}
        width="large"
        pad="large"
        background="accent-2"
        border={{
        "color" : "accent-4",
        "size" : "medium"
      }}
      >
        <Text textAlign="center">
This website made with
          <Java color="brand" />
        by
          <Anchor href="http://permafuture.net">Max</Anchor>
        </Text>
        <Text textAlign="center">Video by Gus Pedrotty</Text>
      </Slice>
    </Box>
  </Layout>
 )

export default ContactPage


ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
  };

export const query = graphql `
  query credQuery {
    allGoogleSheetAngelCreditsRow(sort:{fields:[lastname], order:ASC}) {
      edges {
        node {
          firstname
          lastname
        }
      }
    }

  allFile(filter:{relativeDirectory: {eq: "bios"}}, sort:{fields:name, order: ASC}) {
    edges {
      node {
        name
        childImageSharp {
          fixed(
            height: 140,
            duotone: {
    highlight: "#ffffee",
    shadow: "#770000",
    opacity: 20  }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
        }
      }
    }
  }
  }
`
