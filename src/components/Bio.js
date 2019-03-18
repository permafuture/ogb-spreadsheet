import React from 'react'
import {Box, Heading, Image, Anchor} from 'grommet'

const mailTo = (name) => "mailto:organicbooksellers+" + name + "@gmail.com"

const Bio =({ name }) => (
  <Box align="center" justify="center">
  <Image src={"/" + name + ".png"} width="140px" fit="contain" alt="" css="-webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);"/>
  <Anchor href={mailTo(name)}><Heading size="small">{name}</Heading></Anchor>
  </Box>
)

export default Bio
