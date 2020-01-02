
import React from 'react'
import { Box, Heading, Image, ResponsiveContext, Anchor } from 'grommet'
import { graphql, StaticQuery } from 'gatsby'
import Slice from './Slice'
import ConfigContext from './ConfigContext'

const Sidekick = () => (
  <ConfigContext.Consumer>
    {
    appConfig => (
      <ResponsiveContext.Consumer>
        {
        size => (
          <Box a11yTitle="Calendar events title" pad="small" margin="medium" elevation="none" height="30vh">
            <Slice
              height="100%"
              pad="small"
              background="accent-2"
              align="center"
              flex="grow"
              direction="row"
              justify="center"
              border={{
              "color" : "accent-3",
              "size" : "medium"
            }}
            >

              <StaticQuery
                query={graphql `
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
                    margin="small"
                    pad="medium"
                    align="right"
                    justify="center"
                    width={size === 'small'
                    ? 'small'
                    : 'medium'}
                    height={size === 'small'
                    ? 'small'
                    : 'medium'}
                  >
                    <Image fit="contain" src={src} alt="" a11yTitle="logo" />
                  </Box>
 )
              }}
              />
              <Box
                height="100%"
                direction="column"
                align="center"
                width="60vw"
                flex="grow"
                justify="center"
                >
                <Heading color="brand" level="1" textAlign="center" a11yTitle="Application title" margin="small" size="large">
                  <Anchor href="/">{appConfig.title}</Anchor>
                </Heading>

                <Heading color="secondary" textAlign="center" a11yTitle="Application sub title" level="2" size="small" margin="small">
                The new used bookstore
                in Nob Hill
                </Heading>
              </Box>
            </Slice>
          </Box>
 )
      }

      </ResponsiveContext.Consumer>
 )
  }
  </ConfigContext.Consumer>
 )

export default Sidekick
