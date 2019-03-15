import React from 'react'
import {Box, Anchor, Button} from 'grommet'
import Slice from './Slice'
import { FacebookOption, Instagram, Twitter, Catalog, ScheduleNew, ChatOption } from 'grommet-icons'


const Nav =() => (
<Box direction="column"
    elevation="small"
    background="brand"
    width="auto"
    align="center"
    alignSelf="center"
    margin="medium"
    border={{
      "color": "accent-2",
      "size": "medium"
    }}
    css={css`
    background-image: url('https://www.transparenttextures.com/patterns/exclusive-paper.png');
    `}>
  <Box
    direction="row-responsive" >
    <Button icon=<Catalog color="accent-2" size="large"/> margin="small" align="center"  href="/books"
    label="Books"  />
    <Button icon=<ScheduleNew color="accent-2" size="large"/> margin="small" align="center"  href="/events"
    label="Events"  />
    <Button icon=<ChatOption color="accent-2" size="large"/> margin="small" align="center"  href="/contact"
    label="Contact"  />
  </Box>

  <Box direction="row" alignSelf="center" align="center" >
  <Anchor href="https://facebook.com/OrganicBooks" icon=<FacebookOption color="accent-2" /> />
  <Anchor href="https://twitter.com/OrganicBooksABQ" icon=<Twitter color="accent-2"/> />
  <Anchor href="https://instagram.com/OrganicBooks" icon=<Instagram color="accent-2"/> />
  </Box>

</Box>
)

export default Nav
