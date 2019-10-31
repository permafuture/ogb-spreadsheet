import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import React from 'react'

const Event = ( { name, host, start } ) => (
  <Box background="calendar-event-background" fill="horizontal" pad="2px">
    <Text size="large" alignSelf="end" textAlign="end" color="calendar-event-text" a11yTitle="Event name" css="font-style: italic;">
      {name}
      &nbsp;
    </Text>
    <Text
      size="xxlarge"
      alignSelf="end"
      textAlign="end"
      color="calendar-event-text"
      a11yTitle="Event host"
      css="
        text-transform: uppercase;
        font-weight: bold;
      "
    >
      {host}
    </Text>
    <Text size="small" alignSelf="end" color="calendar-event-text" a11yTitle="Event time">
      {start.slice( 0, 1 )}
      {start.slice( -2 )}
    </Text>
  </Box>
 )

Event.propTypes = {
  name: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired
}

export default Event
