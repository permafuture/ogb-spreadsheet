import React from 'react'
import { Box, Heading, Paragraph, Button } from 'grommet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Catalog, ScheduleNew, ChatOption, Article, Phone } from 'grommet-icons'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEvents from '../utils/groupEvents'
import DayOfToday from '../components/Calendar/DayOfToday'
import Slice from '../components/Slice'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero />
    <Slice>
      <Heading alignSelf="center" level="3">
        Know what book you want?
      </Heading>
      <Button
        alignSelf="center"
        primary="true"
        icon=<Catalog />
        label="Get it now"
        href="books"
      />
      <Paragraph>
        We sell books new and used, with a special focus on local authors. We
        also carry cards, journals, pens and more. Open 10 to 7, every day
        except Mondays
      </Paragraph>
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        Next Event
      </Heading>
      <DayOfToday events={groupEvents(data.allGoogleSheetEventsRow)} />
      <Button alignSelf="end" icon=<ScheduleNew /> label="All Events" />
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        News
      </Heading>
      <Box>
        <Paragraph>Latest update here</Paragraph>
      </Box>
      <Button
        alignSelf="end"
        icon=<Article />
        label="More news"
        />
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        Policies
      </Heading>
      <Box>
        <Paragraph>
          We take books for trade or donation, and buy books directly from local
          authors. Bring used books any time we're open. Our trade policy is $1
          for paperbacks, $2 for tall paperbacks, and $3 for select hardbacks.{' '}
        </Paragraph>
        <Paragraph>
          Teachers, faculty, adjuncts and other educators get 20% off any book
          in the store. We appreciate you!
        </Paragraph>
        <Paragraph>
          If you're a local author, we want to carry your books! If you're a
          local artisan, we want to carry your gift cards, calendars, stickers,
          and other crafts. Bring a sample by the store any day.
        </Paragraph>
      </Box>
      <Button
        alignSelf="end"
        href="#contact"
        icon=<Phone />
        label="Contact Us"
      />
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        Our Family
      </Heading>
      <Paragraph>
        We're the Brewer family. We live in Nob Hill and we love it here. We
        felt that the only thing missing was a bookstore -- so we built one.
      </Paragraph>
      <Button
        alignSelf="end"
        href="#contact"
        icon=<ChatOption />
        label="About us"
      />    </Slice>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
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
        fluid(
          maxWidth: 1280
          duotone: { highlight: "#ffffee", shadow: "#770000", opacity: 20 }
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
