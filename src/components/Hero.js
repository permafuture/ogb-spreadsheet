import React from 'react'
import { Box, Heading, Image, ResponsiveContext, Anchor } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import ConfigContext from './ConfigContext'

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            height="90vh"
            pad="xlarge"
            background="accent-2"
            align="center"
            flex="grow"
            justify="center"
          >

            <Box
              width={size === 'small' ? 'small' : 'medium'}
              height={size === 'small' ? 'small' : 'medium'}
              margin="small"
            >
              <Image fit="contain" src="/static/icon-74681f5c464fedee6e10813f9fd14965.png" alt="" a11yTitle="logo" />
            </Box>

            <Heading
              color="brand"
              size="xlarge"
              level="1"
              textAlign="center"
              a11yTitle="Application title"
              margin="small"
            >
              <Anchor href="/">{appConfig.title}</Anchor>
            </Heading>

            <Heading
              color="secondary"
              textAlign="center"
              a11yTitle="Application sub title"
              level="2"
              size="large"
            >
                Nob Hill's home-grown family-owned bookstore
            </Heading>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    )}
  </ConfigContext.Consumer>
)

export default Hero
