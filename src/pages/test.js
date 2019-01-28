import React, { PureComponent } from 'react'
import { Grid, Box, } from 'grommet'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'


const TestPage => (

      <Layout>
       <Grid>
        <Hero />
        <Box id="fe" alignSelf="end" >
        hello world
        </Box>
        </Grid>
      </Layout>
    )

export default TestPage
