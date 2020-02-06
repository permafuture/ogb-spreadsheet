import React from 'react'
import { graphql } from 'gatsby'
import {
  Box,
  Heading,
  Markdown,
  Paragraph,
  Text,
  Anchor,
  Button
} from 'grommet'
import Layout from '../components/PageLayout'
import Nav from '../components/Nav'
import Slice from '../components/Slice'
import format from 'date-fns/format'
import { LinkPrevious } from 'grommet-icons'




const EventPage = ({ data }) => (

  <Layout>
    <Slice
      alignSelf="center"
      alignContent="stretch"
      margin={{
      "bottom" : "xlarge"
    }}
      width="large"
      pad={{"horizontal":"large", "bottom":"large"}}
      background="accent-2"
      border={{
      "color" : "accent-4",
      "size" : "medium"
    }}
    >
      <Box margin={{"top": "large", "bottom": "large"}} direction="row" justify="around">
        <Button href="/events" icon={<LinkPrevious />} a11yTitle="Back to events page button" margin={{"right":"large"}} />
        <Heading level="1">{format( new Date( data.allGoogleSheetEventsRow.edges[0].node.date ), 'eeee MMM d, yyyy' )}</Heading>
      </Box>
      <Box direction="row" fill="horizontal" border={{ "color": "border",
        "size": "medium",
        "side": "bottom"
      }}
      >
        <Text a11yTitle="Event time" margin="small" size="xlarge" weight="bold">
          {data.allGoogleSheetEventsRow.edges[0].node.start.slice( 0, 4 )}
          {data.allGoogleSheetEventsRow.edges[0].node.start.slice( -2 )}
        </Text>
        <Box margin="small">
          <Text a11yTitle="Event name" weight="bold" size="xxlarge" alignSelf="end">
            {data.allGoogleSheetEventsRow.edges[0].node.eventName}
          </Text>

          <Text a11yTitle="Event host" margin="xsmall" size="medium" alignSelf="end">
            with
            {' '}
            {data.allGoogleSheetEventsRow.edges[0].node.host}
          </Text>

          <Text a11yTitle="Event description" size="large" margin={{"vertical": "large"}}>
            {data.allGoogleSheetEventsRow.edges[0].node.eventDesc}
          </Text>


          {
          data.allGoogleSheetEventsRow.edges[0].node.eventLink && (
          <Box
            margin={{
              top: 'medium'
            }}
            width="medium"
            alignSelf="center"
          >
            <Button primary="true" color="brand" href={data.allGoogleSheetEventsRow.edges[0].node.eventLink} label="learn more" a11yTitle="Event link" target="_blank" />
          </Box>
      )
        }


        </Box>
      </Box>
      <Paragraph>Organic Books is Nob Hill&apos;s home-grown family-owned bookstore. We sell used books, new books, books by local authors, cards, journals, pens and more.
      <br /><br /> Open 10 to 7, every day except Mondays. Find us at 111 Carlisle Blvd SE, in the Nob Hill Shopping Center in Albuquerque. Or call 505-553-3823 to learn more.</Paragraph>
    </Slice>
    <Nav />
  </Layout>
 )


export default EventPage


export const query = graphql`
  query eventQuery($id: String!)  {
    allGoogleSheetEventsRow(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          eventName: eventorbooktitle
          date: day
          eventLink: link
          host: authorhost
          start
          eventDesc: eventdescription
          image
        }
      }
    }
  }
`
