/* eslint-disable react/jsx-wrap-multilines */

import React from 'react'
import { Box, Heading, Button, Text, Image, ResponsiveContext, Anchor } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import Slice from './Slice'
import ConfigContext from './ConfigContext'

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            a11yTitle="Calendar events title"
            pad="small"
            elevation="none"
            height="100vh"
          >
          <Slice
            height="90vh"
            margin="large"
            pad="small"
            background="accent-2"
            align="center"
            flex="grow"
            justify="center"
            border={{ "color": "accent-3", "size":"medium"}}
            >

            <StaticQuery
              query={graphql`
                {
                  imageSharp {
                    original {
                      src
                    }
                  }
                }
              `}
              render={data => {
                const { src } = data.imageSharp.original
                return (
                  <Box
                    width={size === 'small' ? 'small' : 'medium'}
                    height={size === 'small' ? 'small' : 'medium'}
                    margin="small"
                  >
                    <Image fit="contain" src={src} alt="" a11yTitle="logo" />
                  </Box>
                )
              }}
            />

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
              color="secondary" textAlign="center" a11yTitle="Application sub title" level="2" size="large">
              The new used bookstore <br /> in Nob Hill
              </Heading>


          </Slice>
          </Box>
        )}

      </ResponsiveContext.Consumer>
    )}
  </ConfigContext.Consumer>
)

export default Hero
