import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Image, Anchor } from 'grommet'

const mailTo = ( name ) => `mailto:organicbooksellers+${  name  }@gmail.com`

const Bio = ( { name } ) => (
  <Box align="center" justify="center">
    <Image
      src={`/${  name  }.png`}
      width="148px"
      height="auto"
      fit="contain"
      alt=""
      css="-webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);"
    />
    <Anchor href={mailTo( name )}>
      <Heading size="small">{name}</Heading>
    </Anchor>
  </Box>
 )

export default Bio

Bio.propTypes = {
  name: PropTypes.string.isRequired,
};
