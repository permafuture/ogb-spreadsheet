import PropTypes from 'prop-types'
import React from 'react'
import { Anchor, Text, Box, css, ResponsiveContext } from 'grommet'
import Event from './Event'
import ConfigContext from '../ConfigContext'

const slugify = (text) => {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

const Events = ({ events }) =>
  events.length > 0 && (
    <ResponsiveContext.Consumer>
      {size => (
        <ConfigContext.Consumer>
          {({ maxAmountEvents }) => (
            <Box
              gap={size === 'small' ? 'medium' : 'small'}
              pad="2px"
              tag="ul"
              overflow="hidden"
              css={css`
                list-style: none;
              `}
            >
              {events.slice(0, maxAmountEvents + 1).map((event, i) => (
                <Anchor color="black" href={'/events/' + slugify(event.host + '-' + event.eventName)}>
                <Box tag="li" key={event.id} fill="true">
                  {i < maxAmountEvents && <Event name={event.eventName} host={event.host} start={event.start} />}
                  {i === maxAmountEvents && (
                    <Text alignSelf="start" size="small" weight="bold" truncate>
                      {`And ${events.length - maxAmountEvents} more ...`}
                    </Text>
                  )}
                </Box>
              </Anchor>
              ))}
            </Box>
          )}
        </ConfigContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  )

Events.propTypes = {
  events: PropTypes.array,
}

export default Events
