import React, { PureComponent } from 'react'
import { Box, ResponsiveContext, Heading} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'

const IndexPage = ({data}) => (

      <Layout>
       <Box>
        <Hero />
        <Box
            elevation="large"
            height="80vh"
            width="34ch"
            margin="large"
            id="faqs"
            alignSelf="end"
            >
            <Heading margin="small" background="transparent">Answers</Heading>
            
        </Box>
        </Box>
        </Layout>
    )

export default IndexPage
