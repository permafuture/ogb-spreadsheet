/* eslint-disable react/jsx-wrap-multilines */

import React from 'react'
import { Box, Heading, Button, Text, Image, ResponsiveContext } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import ConfigContext from './ConfigContext'

const Hero = () => (
  <ConfigContext.Consumer>
    {appConfig => (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            a11yTitle="Calendar events title"
            align="center"
            flex="grow"
            justify="center"
            pad="small"
            height="100vh"
            elevation="none"
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
                    width={size === 'small' ? 'xsmall' : 'small'}
                    height={size === 'small' ? 'xsmall' : 'small'}
                    margin={{ bottom: 'medium' }}
                  >
                    <Image fit="contain" src={src} a11yTitle="logo" />
                  </Box>
                )
              }}
            />

            <Heading color="brand" size="xlarge"
            level="1" textAlign="center" a11yTitle="Application title">
              {appConfig.title}
            </Heading>

            {appConfig.subTitle && (
              <Heading
              color="secondary" textAlign="center" a11yTitle="Application sub title">
                {appConfig.subTitle}
              </Heading>
            )}


          </Box>
        )}

      </ResponsiveContext.Consumer>
    )}
  </ConfigContext.Consumer>
)

export default Hero
