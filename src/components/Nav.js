import React from 'react'
import { Box, Anchor, Button, Image, Heading } from 'grommet'
import {
  FacebookOption,
  Instagram,
  Twitter,
  Catalog,
  ScheduleNew,
  ChatOption,
  Article,
} from 'grommet-icons'

const Nav = () => (
  <Box
    direction="row"
    elevation="small"
    background="brand"
    width="full"
    justify="center"
    align="center"
    margin="none"
    border={{
      color: 'accent-2',
      size: 'medium',
      side: 'bottom',
    }}
    css="position: sticky; top: 0;"
    animation={{
      type: 'slideDown',
      size: 'large',
    }}
    style={{zIndex:1}}
  >
    <Box direction="row-responsive" pad="none" justify="center" align="center">
      <Image height="50px" src="/icon.svg" alt="" a11yTitle="logo" />
      <Heading
        color="white"
        size="small"
        level="1"
        pad="none"
        margin={{ horizontal: '2rem', vertical: 'none' }}
      >
        <Anchor href="/" color="white">
          Organic Books
        </Anchor>
      </Heading>
    </Box>
    <Box direction="row-responsive" pad={{ right: '1rem' }} align="start">
      <Box direction="row" pad="none" justify="end">
        <Button
          a11yTitle="Buy"
          icon=<Catalog color="accent-2" />
          href="/books"
        />
        <Button
          a11yTitle="Events"
          icon=<ScheduleNew color="accent-2" />
          href="/events"
        />
        {/*}<Button
          a11yTitle="News"
          icon=<Article color="accent-2" />
          href="/contact"
        />*/}
        <Button
          a11yTitle="Contact"
          icon=<ChatOption color="accent-2" />
          href="/contact"
        />
      </Box>
      <Box
        direction="row"
        pad={{ left: '2rem' }}
        margin="none"
        align="end"
        justify="end"
      >
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
  </Box>
)

export default Nav
