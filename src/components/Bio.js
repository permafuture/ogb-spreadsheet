import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Box, Heading, Anchor } from 'grommet'

const mailTo = name => `mailto:organicbooksellers+${name}@gmail.com`
const rmNum = name => name.slice(2)
const Bio = ({ name, pic }) => (
  <Box align="center" justify="center" style={{width: '200px'}}>
  <Anchor href={mailTo(rmNum(name))}>
      <Img
        fixed={pic}
        imgStyle={{
          maxWidth: '100%',
          objectFit: 'scale-down',
          borderRadius: '50%',
        }}
      />
      <Heading size="small">{rmNum(name)}</Heading>
  </Anchor>
  </Box>
)

export default Bio

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
}
