import isBefore from 'date-fns/isBefore'
import PropTypes from 'prop-types'
import isSameDay from 'date-fns/isSameDay'
import isFuture from 'date-fns/isFuture'
import closestTo from 'date-fns/closestTo'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import React from 'react'
import { Text, Box, Heading, Anchor } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import CalendarBox from './CalendarBox'

const getStrike = ( currentDay, today ) => isBefore( currentDay, today ) && !isSameDay( currentDay, today )

const Day = ( { day, events } ) => {
  const today = new Date()

  const isToday = isSameDay( day, today )
  const hasPast = isBefore( day, today )

  const dayType = ( isToday && 'today' ) || ( hasPast && 'past' ) || 'day'

  const eventsSection = (
    <Box direction="column" fill="true" alignSelf="end" alignContent="end">
      <Anchor
        href="/events"
        color="black"
        css={css `
        text-transform: none;
        font-weight: normal;
        `}
      >
        <Events events={events[0].events} />
      </Anchor>

    </Box>
 )

  return [
    <CalendarBox
      key={day.getTime()}
      border={{
        color: `calendar-${ dayType }-border`
      }}
      pad="small"
      {...events.length}
    >
      <Box direction="row-responsive" fill="vertical">
        <Box
          direction="column"
          margin={{
            top: 'auto'
          }}
          width="xsmall"
          alignSelf="start"
        >
          <Heading
            color="brand"
            size="large"
            margin="none"
            textAlign="start"
            css={css `
                    text-decoration: ${ getStrike( day, today ) && 'line-through' };
                  `}
            a11yTitle="Day number"
          >
            {format( day, 'dd' )}
          </Heading>

          <Text color={`calendar-${ dayType }-text`} size="small" a11yTitle="Day" truncate="truncate">
            {format( day, 'eeee' )}
          </Text>
        </Box>

        {eventsSection}
      </Box>
    </CalendarBox>

    ]
}

const DayOfToday = ( { events } ) => {
  // figure out what day it is (when built, i guess)

  const currentDay = new Date()


  // find all the events that are in the future */}
  const futureEvents = events.filter( event => isFuture( parse(event.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), currentDay ) || isSameDay( parse(event.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), currentDay ) )

  // make an array of dates to compare, instead of event day objects
  const futureEventDates = []
  futureEvents.filter( event => futureEventDates.push( parse(event.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()) ))


  // figure out which day of futureEvents is the closest to today */}
  const nextEventDay = closestTo( currentDay, futureEventDates )


  // find all the events happening on nextEventDay */}
  const eventsOfTheDay = futureEvents.filter( event => isSameDay( parse(event.date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), nextEventDay ) )

  // return a Day object with the eventsOfTheDay */}
  return ( <Day key={format( nextEventDay, 'dd-MM-yyyy' )} day={nextEventDay} events={eventsOfTheDay} /> )
}

export default DayOfToday

DayOfToday.propTypes = {
  events: PropTypes.array.isRequired,
};
