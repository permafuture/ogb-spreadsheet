import React from 'react'
import {Box, Anchor, Button} from 'grommet'
import Slice from './Slice'

const Nav =() => (
<Box
  elevation="small"
  direction="row-responsive"
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
  `}
  >
  <Button margin="small" align="center"  href="/books"
  label="Books" />
  <Button margin="small" align="center"  href="/events"
  label="Events" />
  <Button margin="small" align="center"  href="/contact"
  label="Contact" />

</Box>
)

export default Nav
