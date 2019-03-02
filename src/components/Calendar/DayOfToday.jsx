import isBefore from 'date-fns/is_before'
import isSameDay from 'date-fns/is_same_day'
import isFuture from 'date-fns/is_future'
import closestTo from 'date-fns/closest_to'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box, Heading, Anchor  } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import Query from '../Query'
import CalendarBox from './CalendarBox'

const getStrike = (currentDay, today) =>
  isBefore(currentDay, today) && !isSameDay(currentDay, today)

const Day = ({ day, events }) => {
  console.log("Day events passed = ", {events})
  const today = new Date()

  const isToday = isSameDay(day, today)
  const hasPast = isBefore(day, today)

  const dayType = (isToday && 'today') || (hasPast && 'past') || 'day'

  const eventsSection = (
    <Box direction="column" fill="true" alignContent="end">
      <Events events={events[0].events} />
    </Box>
  )

  return [

        <CalendarBox
          key={day.getTime()}
          background={`calendar-${dayType}-background`}
          border={{ color: `calendar-${dayType}-border` }}
          pad="small"
          {...events.length }
          square
        >
          <Box direction="row-responsive" fill="vertical">
            <Box
              direction="column"
              margin={{ top: 'auto' }}
              width="xsmall"
              alignSelf="start"
            >
              <Heading
                color={`brand`}
                size="large"
                margin="none"
                textAlign="start"
                css={css`
                  text-decoration: ${getStrike(day, today) && 'line-through'};
                `}
                a11yTitle="Day number"
              >
                {format(day, 'DD')}
              </Heading>

              <Text
                color={`calendar-${dayType}-text`}
                size="small"
                a11yTitle="Day"
                truncate
              >
                {format(day, 'dddd')}
              </Text>
            </Box>
            <Anchor href="/events" color="black" css={css`
              decoration: none;
              a:hover: {
                text-decoration: none;
              }
            `}>
            {eventsSection}
                    </Anchor>
          </Box>
        </CalendarBox>


  ]
}

const isEmpty = (obj) => {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
  }


const DayOfToday = ({ events }) => {
      // figure out what day it is (when built, i guess)
      const currentDay = new Date()

      // find all the events that are in the future */}
      const futureEvents = events.filter(event =>
        isFuture(event.date, currentDay),)

      console.log("futureEvents = ")
      console.log(futureEvents)

      // make an array of dates to compare, instead of event day objects
      const futureEventDates =[]
      const ripDates = events.filter(event =>
        futureEventDates.push(event.date),
      )

      // figure out which day of futureEvents is the closest to today */}
      const nextEventDay = closestTo(currentDay, futureEventDates)
      console.log("nextEventDay = " )
      console.log( nextEventDay)

      // find all the events happening on nextEventDay */}
      const eventsOfTheDay = futureEvents.filter(event =>
        isSameDay(event.date, nextEventDay),
      )

      console.log("eventsOfTheDay = " )
      console.log( eventsOfTheDay)

      // return a Day object with the eventsOfTheDay */}
      return (
        <Day
          key={format(nextEventDay, 'DD-MM-YYYY')}
          day={nextEventDay}
          events={eventsOfTheDay}
        />

      )
    }



export default DayOfToday
