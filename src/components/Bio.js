import React from 'react'
import {Box, Heading, Image, Anchor} from 'grommet'

const mailTo = (name) => "mailto:organicbooksellers+" + name + "@gmail.com"

const Bio =({ name }) => (
  <Box>
  <Image src={"/" + name + ".png"} fit="contain" alt=""/>
  <Anchor href={mailTo(name)}><Heading size="small">{name}</Heading></Anchor>
  </Box>
)

export default Bio
