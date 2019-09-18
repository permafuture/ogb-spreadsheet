import React from 'react'
import { getDaysInMonth, format } from 'date-fns'
import { Heading, Box } from 'grommet'
import PropTypes from 'prop-types'
import Days from './Days'
import Events from './Events'


const Month = ({ monthlyCalendar, showModal }) => {
  const [currentMonthNumber, currentYear] = monthlyCalendar.date.split('-')

  const currentMonth = new Date(
    currentYear,
    parseInt(currentMonthNumber, 10) - 1,
    1,
  )
  const currentMonthDays = getDaysInMonth(currentMonth)

  return (
    <Box margin={{ bottom: 'medium' }}>
      <Heading a11yTitle={`Month of ${format(currentMonth, 'MMMM yyyy')}`}>
        <b>{`${format(currentMonth, 'MMMM')} `}</b>
        {format(currentMonth, 'yyyy')}
      </Heading>

      <Box direction="row-responsive" wrap>
        <Days
          days={currentMonthDays}
          month={currentMonth}
          events={monthlyCalendar.events}
          showModal={showModal}
        />

      </Box>
    </Box>
  )
}

Month.propTypes = {
  monthlyCalendar: PropTypes.shape({
    events: Events.propTypes.events,
    when: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }),
  }),
  showModal: PropTypes.func.isRequired,
}

Month.defaultProps = {
  monthlyCalendar: {
    events: [],
    when: {
      month: '',
      year: '',
    },
  },
}

export default Month
