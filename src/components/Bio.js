import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Box, Heading, Anchor } from 'grommet'

const mailTo = ( name ) => `mailto:organicbooksellers+${  name  }@gmail.com`
const rmNum = ( name ) => name.slice(2)
const Bio = ( { name, pic } ) => (

  <Box align="center" justify="center">
    <Img fixed={pic} imgStyle={{ maxWidth: "100%", objectFit: 'scale-down', borderRadius: '50%' }} />
    <Anchor href={mailTo( rmNum( name ) )}>
      <Heading size="small">{rmNum(name)}</Heading>
    </Anchor>
  </Box>
 )

export default Bio

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};
