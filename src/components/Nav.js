import React from 'react'
import {Box, Anchor, Button} from 'grommet'
import Slice from './Slice'

const Nav =() => (
<Box
  direction="row-responsive"
  elevation="medium"
  background="brand"
  width="auto"
  align="center"
  alignSelf="center"
  margin="medium"
  border={{
    "color": "neutral-3",
    "size": "medium"
  }}
  css={css`
  background-image: url('https://www.transparenttextures.com/patterns/exclusive-paper.png');
  `}
  >
  <Button margin="small" align="center"  href="/books"
  label="Books" />
  <Button margin="small" align="center"  href="/books"
  label="Events" />
  <Button margin="small" align="center"  href="/books"
  label="Contact" />

</Box>
)

export default Nav
