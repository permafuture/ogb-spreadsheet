import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'
import format from 'date-fns/format'



const Event = ({ name, host, start, end }) => (


  <Box round="xsmall" background="calendar-event-background" pad="2px">
    <Text
      size="medium"
      truncate
      color="calendar-event-text"
      a11yTitle="Event name"
    >
      {name}
    </Text>
    <Text
      size="large"
      truncate
      color="calendar-event-text"
      a11yTitle="Event host"
      css={css`
        text-transform: uppercase;
      `}
    >
      {host}
    </Text>
    <Text
      size="small"
      truncate
      color="calendar-event-text"
      a11yTitle="Event time"
    >
      {start.slice(0,1)}{start.slice(-2)}
    </Text>
  </Box>
)

Event.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Event
