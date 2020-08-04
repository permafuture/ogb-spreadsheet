import React from 'react'
import { Box, Heading, Paragraph, Button, Anchor } from 'grommet'
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
    <Slice
      border={{
        color: 'accent-3',
        size: 'medium'
      }}
      >
      <Heading alignSelf="center" level="3">
        Now Open for Browsing
      </Heading>
      <Button
        alignSelf="center"
        primary="true"
        icon=<Catalog />
        label="Buy from our Bookshop page"
        href="https://bookshop.org/shop/OrganicBooks?site"
      />
      <Paragraph size="large">
        We sell books new and used, with a special focus on local authors. We
        also carry cards, journals, pens and more. Open 11 to 6 every day. We also offer sidewalk shopping and curbside pickup!
        You can also search our used books through <Anchor href="http://www.biblio.com/bookstore/organic-books-albuquerque?aid=BSCB3451349">Biblio</Anchor>. Or for audiobooks, use <Anchor href="https://libro.fm/howitworks?bookstore=organicbooks">Libro.fm</Anchor>, select us as your store, and we'll get the proceeds.
        Or <Anchor href="#contact">contact us</Anchor> and we'll help you get what you need.
      </Paragraph>
    </Slice>
    <Slice>
      <Heading alignSelf="center" level="3">
        Next Event
      </Heading>
    {/*<DayOfToday events={groupEvents(data.allGoogleSheetEventsRow)} /> */}
      <Paragraph size="large">
      All events are indefinitely postponed. We'll send word when that changes.
      </Paragraph>
      <Button
        alignSelf="end"
        icon=<ScheduleNew />
        label="All Events"
        href="events"
        />
    </Slice>
    {/* <Slice>
      <Heading alignSelf="center" level="3">
        News
      </Heading>
      <Box>
        <Paragraph size="large">Latest update here</Paragraph>
      </Box>
      <Button
        alignSelf="end"
        icon=<Article />
        label="More news"
        href="news" />
    </Slice> */}
    <Slice>
      <Heading alignSelf="center" level="3">
        Policies
      </Heading>
      <Box>
        <Paragraph size="large">
          We take books for trade or donation, and buy books directly from local
          authors. Bring used books any time we're open. Our trade policy is $1
          for paperbacks, $2 for tall paperbacks, and $3 for select hardbacks.{' '}
        </Paragraph>
        <Paragraph size="large">
          Teachers, faculty, adjuncts and other educators get 20% off any book
          in the store. We appreciate you!
        </Paragraph>
        <Paragraph size="large">
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
      <Paragraph size="large">
        We're the Brewer family. We live in Nob Hill and we love it here. The only thing missing was a bookstore. So we built one.
      </Paragraph>
      <Button
        alignSelf="end"
        href="contact"
        icon=<ChatOption />
        label="About us"
      />
    </Slice>
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
