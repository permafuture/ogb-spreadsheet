import React from 'react'
import { Box, Anchor, Button, Image, Heading } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import {
  FacebookOption,
  Instagram,
  Twitter,
  Catalog,
  ScheduleNew,
  ChatOption,
  Article
} from 'grommet-icons'

const Nav = () => (
  <Box
    direction="row-responsive"
    elevation="small"
    background="brand"
    width="full"
    alignContent="stretch"
    alignSelf="stretch"
    align="stretch"
    margin="none"
    border={{
    "color" : "accent-2",
    "size" : "medium",ol
    "side": "bottom"
  }}
    css="position: fixed"
  >
    <Box direction="row" pad="none">
      <Image height="50px" src="/icon.svg" alt="" a11yTitle="logo" />
      <Heading color="white" size="small" level="1" textAlign="start" align="center" pad="none" margin="none">
        <Anchor href="/" color="white">Organic Books</Anchor>
      </Heading>
    </Box>
    <Box direction="row" pad="none">
      <Button
        a11yTitle="Buy"
        icon=<Catalog color="accent-2" />
        href="/books"
        label="Buy"
      />
      <Button
        a11yTitle="Events"
        icon=<ScheduleNew color="accent-2" />
        href="/events"
        label="Events"
      />
      <Button
        a11yTitle="News"
        icon=<Article color="accent-2" />
        href="/contact"
        label="News"
      />
      <Button
        a11yTitle="Contact"
        icon=<ChatOption color="accent-2" />
        href="/contact"
        label="Contact"
      />
    </Box>

    <Box direction="row" pad="none" align="center">
      <Anchor
        href="https://facebook.com/OrganicBooks"
        icon=<FacebookOption size="small" color="accent-2" />
      />
      <Anchor
        href="https://twitter.com/OrganicBooksABQ"
        icon=<Twitter size="small" color="accent-2" />
      />
      <Anchor
        href="https://instagram.com/OrganicBooks"
        icon=<Instagram size="small" color="accent-2" />
      />
    </Box>

  </Box>
 )

export default Nav
