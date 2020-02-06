import isBefore from 'date-fns/isBefore'
import isSameDay from 'date-fns/isSameDay'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, Box, Heading } from 'grommet'
import { css } from 'styled-components'
import Events from './Events'
import CalendarBox from './CalendarBox'

const sortyByTime = ( eventA, eventB ) => new Date( eventA.date ).setHours( eventA.start.slice( 0, 1 ) ) - new Date( eventB.date ).setHours( eventB.start.slice( 0, 1 ) )

const getStrike = ( currentDay, today ) => isBefore( currentDay, today ) && !isSameDay( currentDay, today )

const Day = ( { day, events, onClick } ) => {
  const today = new Date()

  const isToday = isSameDay( day, today )
  const hasPast = isBefore( day, today )

  const dayType = ( isToday && 'today' ) || ( hasPast && 'past' ) || 'day'

  const eventsSection = (
    <Box direction="column" fill="true" alignContent="end">
      <Events events={events.sort( sortyByTime )} />
    </Box>
 )

  return [
    <CalendarBox
      key={day.getTime()}
      background={`calendar-${ dayType }-background`}
      border={{
        color: `calendar-${ dayType }-border`
      }}
      pad="small"
      {...events.length}
      square="true"
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


// const slugify = (text) => {
//     return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
// }
// const Days = ( { days, events, month, showModal } ) => Array( days ).fill( null ).map( ( x, i ) => {
//   const currentDay = new Date( month.getFullYear(), month.getMonth(), i + 1 )
//   const eventsOfTheDay = events.filter( event => isSameDay( parse(event.date, "MM/dd/yyyy", new Date()), currentDay ),)
//   const pagename = eventsOfTheDay.host + '-' + eventsOfTheDay.eventName
//   const slug = slugify(pagename)
//   const onClick = () => navigate(slug)
//
//   return ( ( Object.keys( eventsOfTheDay ).length !== 0 && ( <Day key={format( currentDay, 'dd-MM-yyyy' )} day={currentDay} events={eventsOfTheDay} onClick={onClick} /> ) ) )
// } )

const Days = ( { days, events, month, showModal } ) => Array( days ).fill( null ).map( ( x, i ) => {
  const currentDay = new Date( month.getFullYear(), month.getMonth(), i + 1 )
  const eventsOfTheDay = events.filter( event => isSameDay( parse(event.date, "MM/dd/yyyy", new Date()), currentDay ),)
  const onClick = () => showModal( eventsOfTheDay, currentDay )

  return ( ( Object.keys( eventsOfTheDay ).length !== 0 && ( <Day key={format( currentDay, 'dd-MM-yyyy' )} day={currentDay} events={eventsOfTheDay} onClick={onClick} /> ) ) )
} )

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.array,
  month: PropTypes.instanceOf( Date ).isRequired,
  showModal: PropTypes.func.isRequired
}

export default Days
