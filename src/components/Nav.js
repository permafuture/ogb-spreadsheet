import React from 'react'
import {Box, Anchor} from 'grommet'
import Sidebar from './Sidebar'

const Nav =() => (
<Sidebar >
<Box  pad="medium" align="end">
    <Anchor
      href="/books"
      label="Books"
    />
</Box>
<Box  pad="medium" align="end">
    <Anchor href="/events" label="Events" />
    </Box>
    <Box  pad="medium" align="end">
    <Anchor href="/contact" label="Contact" />
</Box>
</Sidebar>
)

export default Nav
