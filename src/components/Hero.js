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
<<<<<<< HEAD
            <StaticQuery
              query={graphql`
                  { imageSharp(original: {src: {regex: "s/icon/g"}}) {
                        id
                        original {
                          src
                        }
                      }
                    }
                `}
              render={data => {
                  console.log(data)
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
=======

            <Box
              width={size === 'small' ? 'small' : 'medium'}
              height={size === 'small' ? 'small' : 'medium'}
              margin="small"
            >
              <Image fit="contain" src="/static/icon-74681f5c464fedee6e10813f9fd14965.png" alt="" a11yTitle="logo" />
            </Box>
>>>>>>> 64eacbc2be119417610106ea2720184e9086a1ec

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
