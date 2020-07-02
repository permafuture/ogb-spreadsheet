import React from 'react'
import { Box, Text, Button, Heading, Anchor } from 'grommet'
import { Phone } from 'grommet-icons'
import { isWithinInterval } from 'date-fns'

const today = new Date()
const opening = new Date().setHours(11)
const closing = new Date().setHours(18)

const isOpen = isWithinInterval(today, { start: opening, end: closing })

const Hours = () => {
  if (isOpen) {
    return (
      <Text size="xxlarge" color="neutral-2">
        {' '}
        OPEN
      </Text>
    )
  }
  return (
    <Text size="xxlarge" color="light-3">
      {' '}
      CLOSED
    </Text>
  )
}

const CallUs = () => {
  if (isOpen) {
    return (
      <Button
        color="neutral-2"
        a11yTitle="Call us"
        href="tel://5055533823"
        label="Call"
        size="large"
        gap="medium"
        reverse="true"
        icon=<Phone color="accent-2" size="large" />
      />
    )
  }
  return (
    <Button
      icon=<Phone color="accent-2" size="large" />
      color="light-3"
      a11yTitle="Call us"
      href="tel://5055533823"
      label="Leave a message"
      size="large"
      gap="medium"
      reverse="true"
    />
  )
}

const ContactCard = () => (
  <Box
    direction="row-responsive"
    width="large"
    alignSelf="center"
    pad="medium"
    margin={{ bottom: 'xlarge' }}
    background="brand"
    justify="evenly"
    border={{
      color: 'accent-2',
      size: 'medium',
    }}
    id="contact"
    animation={{
      type: 'slideUp',
      size: 'large',
      duration: '1000',
    }}
  >
    <Box direction="column" align="end">
      <Text size="large" color="white">
        The store may be closed, but
      </Text>
      <Heading size="medium" level="3" color="white" margin="none" align="end">
        The phone is
        <Hours />
      </Heading>
      <Text size="large" color="white">
        Hours 12pm-4pm, Tues-Sun
      </Text>
      <Text size="large" color="white">
        111 Carlisle Blvd SE
      </Text>
      <Text size="large" color="white">
        Albuquerque, NM 87110
      </Text>
      <Anchor
        size="large"
        color="white"
        href="mailto://organicbooksellers@gmail.com"
      >
        organicbooksellers@gmail.com
      </Anchor>
    </Box>
    <Box
      alignSelf="center"
      animation={{
        type: 'pulse',
        size: 'small',
      }}
    >
      <CallUs />
    </Box>
  </Box>
)
export default ContactCard
