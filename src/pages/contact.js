import React, { PureComponent } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'


const IndexPage = ({data}) => (

      <Layout>
       <Box>
        <Hero />

        </Box>
        </Layout>
    )

export default IndexPage
