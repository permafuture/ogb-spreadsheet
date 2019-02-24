import isBefore from 'date-fns/is_before'
import isSameDay from 'date-fns/is_same_day'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box, Heading  } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import Query from '../Query'
import CalendarBox from './CalendarBox'

const getStrike = (currentDay, today) =>
  isBefore(currentDay, today) && !isSameDay(currentDay, today)

const Day = ({ day, events, onClick }) => {
  const today = new Date()

  const isToday = isSameDay(day, today)
  const hasPast = isBefore(day, today)

  const dayType = (isToday && 'today') || (hasPast && 'past') || 'day'

  const eventsSection = (
    <Box direction="column" fill="true" alignContent="end">
      <Events events={events} />
    </Box>
  )

  return [
        <CalendarBox
          key={day.getTime()}
          background={`calendar-${dayType}-background`}
          border={{ color: `calendar-${dayType}-border` }}
          pad="small"
          {...events.length && { onClick }}
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
            {eventsSection}
          </Box>
        </CalendarBox>
      ]
    }



const Today = ({ events }) =>
    events.map(dailyCalendar => (

      return (
        <Day
          day={nextEvent}
          events={eventsOfTheDay}
        />
      )
    )



export default Today
