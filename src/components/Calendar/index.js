import React from 'react'
import PropTypes from 'prop-types'
import parse from 'date-fns/parse'

import Month from './Month'

const Calendar = ({ showModal, events }) =>
  events
    .map(monthlyCalendar => (
      <Month
        monthlyCalendar={monthlyCalendar}
        showModal={showModal}
        key={monthlyCalendar.date}
      />
    ))
    .sort(
      (a, b) =>
        parse(a.key, 'MM-yyyy', new Date()) -
        parse(b.key, 'MM-yyyy', new Date()),
    )

Calendar.propTypes = {
  showModal: PropTypes.func.isRequired,
  query: PropTypes.string,
}

export default Calendar
