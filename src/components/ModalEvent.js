import React from 'react'
import { Layer, Box, Text, Button } from 'grommet'
import { FormClose } from 'grommet-icons'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import Events from './Calendar/Events'
import Slice from './Slice'

const sortyByDate = (eventA, eventB) =>
  new Date(eventA.date) - new Date(eventB.date)

const ModalEvent = ({ hideModal, currentDay, events }) => (
  <Layer position="center" onClickOutside={hideModal} onEsc={hideModal} modal background="#00000000" responsive="false"
  >
  <Slice border={{
    "color": "accent-3",
    "size": "medium"
  }}>
    <Box
      direction="row"
      align="center"
      tag="header"
      justify="between"

    >
      <Text
        margin={{ left: 'small' }}
        color="black"
        a11yTitle="Selected day"
      >
        <b>{format(new Date(currentDay), 'dddd D, MMMM')}</b>
      </Text>
      <Button
        icon={<FormClose />}
        a11yTitle="Close popup button"
        onClick={hideModal}
      />
    </Box>
    <Box
      direction="column"
      align="center"
      tag="section"
      margin="medium"
      gap="none"
        >
      {events.sort(sortyByDate).map(event => (
        <Box
          direction="row"
          fill="horizontal"
        >
          <Text
            a11yTitle="Event time"
            margin="small"
            color="calendar-modal-text"
            weight="bold"
          >
            {format(new Date(event.date).setUTCMinutes(180), 'H:MM')}
          </Text>
          <Box margin="small">
            <Text
              a11yTitle="Event name"
              weight="bold"
              size="large"
              color="calendar-modal-text"
            >
              {event.eventName}
            </Text>

            {event.host && (
              <Text a11yTitle="Event host" size="xsmall" margin="xsmall" color="calendar-modal-text">
                with {event.host}
              </Text>
            )}

            {event.eventDesc && (
              <Text a11yTitle="Event description" size="large" color="calendar-modal-text">
                {event.eventDesc}
              </Text>
            )}

            <Box margin={{ top: 'medium' }} width="xsmall" alignSelf="end">
              <Button
                href={event.eventLink}
                label="learn more"
                a11yTitle="Event link"
                target="_blank"
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
    </Slice>
  </Layer>
)

ModalEvent.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentDay: PropTypes.objectOf(Date),
  events: Events.propTypes.events,
}

export default ModalEvent
