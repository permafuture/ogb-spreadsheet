import React, { PureComponent } from 'react'
import { Box, ResponsiveContext, Grid} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'
import Bio from '../components/Bio'


const IndexPage = ({data}) => (

      <Layout>
       <Box elevation="large">
       <Hero />
       {/*contact hero*/}

       <Grid
          fill
          rows={["auto"]}
          columns={["1fr","minmax(34ch,70%)","1fr"]}
          areas={[ { name: "middle", start: [1,0], end: [1,0] } ]}
          alignContent="center"
        >
        <Grid
          gridArea="middle"
          rows={["auto"]}
          columns={["repeat(auto-fit, minmax(30ch,1fr))"]}
        >
            <Bio />
            <Bio />
            <Bio />
            <Bio />
            <Bio />
            <Bio />
        </Grid>
        </Grid>
        </Box>
        </Layout>
    )

export default IndexPage
