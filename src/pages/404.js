import React from 'react'
import { Box, Heading, Button, Text } from 'grommet'
import Layout from '../components/PageLayout'
import Slice from '../components/Slice'

const NotFoundPage = () => (
  <Layout>
    <Box a11yTitle="Calendar events title" align="center" flex="grow" height="100vh" justify="center" pad="medium" animation="slideDown">
      <Slice
        margin="large"
        pad="xlarge"
        border={{
        "color" : "accent-3",
        "size" : "medium"
      }}
      >
        <Heading size="xlarge" align="center" margin="small">
        404
        </Heading>
        <Heading align="center" size="small">
        Sorry, we can&#39;t find that page.
        </Heading>

        <Button
          primary="primary"
          margin={{
          top: 'large'
        }}
          href="/"
          label={<Text margin="small"> Go back to HomePage</Text>}
        />
      </Slice>
    </Box>
  </Layout>
 )

export default NotFoundPage
