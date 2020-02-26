import React from 'react'
import { Box, Text, Button, Heading } from 'grommet'
import { Phone } from 'grommet-icons'
import { isWithinInterval } from 'date-fns'

const today = new Date()
const opening = new Date().setHours(10)
const closing = new Date().setHours(19)
console.log(today)

const isOpen = isWithinInterval(
  today,
  { start: opening, end: closing }
)
console.log(isOpen)

const Hours = () => {
  if (isOpen) {
    return <Text size="xxlarge" color="neutral-2"> OPEN</Text>;
  }
  return <Text size="xxlarge" color="light-3"> CLOSED</Text>;
}

const CallUs = () => {
  if (isOpen) {
    return (
      <Button
        color="neutral-2"
        a11yTitle="Call us"
        href="tel://5055533823"
        label="Call us"
        size="large"
        gap="medium"
        icon=<Phone color="accent-2" size="large" />
        reverse="true"
      />
  );
  }
  return (
    <Button
      color="light-3"
      a11yTitle="Call us"
      href="tel://5055533823"
      label="Leave a message"
      size="large"
      gap="medium"
      icon=<Phone color="accent-2" size="large" />
      reverse="true"
    />
);
}

const ContactCard = () => (
  <Box
    width="large"
    alignSelf="center"
    pad="medium"
    margin={{"bottom": "xlarge"}}
    background="brand"
    direction="row"
    justify="evenly"
    border={{
    "color" : "accent-2",
    "size" : "medium",
  }}
  >
    <Box direction="column" align="end">
      <Heading size="medium" level="3" color="white" margin="none" alignSelf="start">
The store is
        <Hours />
      </Heading>
      <Text size="large" color="white">Hours 10am-7pm, Tues-Sun</Text>
      <Text size="large" color="white">111 Carlisle Blvd SE</Text>
      <Text size="large" color="white">Albuquerque, NM 87110</Text>
    </Box>
    <Box animation={{
  "type": "pulse",
  "size": "small",
}}
    >
      <CallUs />
    </Box>
  </Box>
)
export default ContactCard
