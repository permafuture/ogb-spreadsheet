import React from 'react'
import { Box, Text, Button } from 'grommet'
import { Phone } from 'grommet-icons'

const ContactCard = () => (
  <Box
    width="large"
    alignSelf="center"
    margin="large"
    pad="large"
    background="brand"
    direction="row"
    justify="evenly"
    css="position: sticky; bottom: 0;"
  >
    <Box direction="column">
      <Text size="large" color="white">The store is OPEN</Text>
      <Text size="large" color="white">Hours 10am-7pm, Tues-Sun</Text>
      <Text size="large" color="white">111 Carlisle Blvd SE</Text>
      <Text size="large" color="white">Albuquerque, NM 87110</Text>
    </Box>
    <Box>
      <Button
        a11yTitle="Call us"
        href="tel://5055533823"
        label="Call"
        size="large"
        gap="medium"
        icon=<Phone color="accent-2" size="large" />
      />
    </Box>
    <Box id="map" />
    <script dangerouslySetInnerHTML={{
    __html: `
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    `}}
    />
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDf9LDJhmGIwxzXtG3aR87sFsWcyXKYfqk&callback=initMap" async defer />
  </Box>
)
export default ContactCard
