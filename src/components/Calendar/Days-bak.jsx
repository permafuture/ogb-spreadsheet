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
    <Box direction="column" fill="horizontal" alignContent="stretch">
      <Events events={events} />
    </Box>
  )

  return [
    <Query sizes={['small']} inverse>
      <CalendarBox
        key={day.getTime()}
        background={`calendar-${dayType}-background`}
        border={{ color: `calendar-${dayType}-border` }}
        pad="xsmall"
        {...events.length && { onClick }}
        square
      >
        <Box direction="column" fill="vertical">
          {eventsSection}
          <Box
            direction="column"
            margin={{ top: 'auto' }}
            width="xsmall"
            alignSelf="end"
          >
            <Heading
              color={`calendar-${dayType}-text`}
              size="medium"
              alignSelf="start"
              margin="none"
              a11yTitle="Day number"
              textAlign="end"
              css={css`
                text-decoration: ${hasPast && !isToday && 'line-through'};
              `}
            >
              {format(day, 'DD')}
            </Heading>
          </Box>
        </Box>
      </CalendarBox>
    </Query>,
    <Query sizes={['small']}>
      {(!hasPast || isToday) && (
        <CalendarBox
          key={day.getTime()}
          background={`calendar-${dayType}-background`}
          border={{ color: `calendar-${dayType}-border` }}
          pad="small"
          {...events.length && { onClick }}
          square
        >
          <Box direction="row" fill="vertical">
            <Box
              direction="column"
              margin={{ top: 'auto' }}
              width="xsmall"
              alignSelf="end"
            >
              <Heading
                color={`calendar-${dayType}-text`}
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
      )}
    </Query>,
  ]
}

const isEmpty = (obj) => {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
  }


const Days = ({ days, events, month, showModal }) =>
  Array(days)
    .fill(null)
    .map((x, i) => {
      const currentDay = new Date(month.getFullYear(), month.getMonth(), i + 1)
      const eventsOfTheDay = events.filter(event =>
        isSameDay(event.date, currentDay),
      )
      const onClick = () => showModal(eventsOfTheDay, currentDay)
      const hasEvents = !isEmpty(eventsOfTheDay)


      return (
        (hasEvents &&
        <Day
          key={format(currentDay, 'DD-MM-YYYY')}
          day={currentDay}
          events={eventsOfTheDay}
          onClick={onClick}
        />
      )
      )
    })

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.array,
  month: PropTypes.instanceOf(Date).isRequired,
  showModal: PropTypes.func.isRequired,
}

export default Days
