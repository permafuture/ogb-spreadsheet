import React from 'react'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import { Grommet, Box, Grid } from 'grommet'
import { paperTheme } from './PaperTheme'
import Slice from './Slice'
import ConfigContext from './ConfigContext'
import flatObject from '../utils/flatObject'
import Nav from './Nav'

require('typeface-alegreya')

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

  }
`
const FONT = `

@font-face {
font-family: 'Picture House One Bold';
src:  url('/mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff2') format('woff2'),
      url('mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff') format('woff');
font-display: swap;
}

@font-face {
font-family: 'Picture House One Regular';
src:  url('/mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff2') format('woff2'),
      url('mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff') format('woff');
font-display: swap;
}

`

const enhancedTheme = (baseTheme, customTheme) => {
  const flatTheme = flatObject(customTheme)
  const colors = {
    ...paperTheme.global.colors,
    ...flatTheme,
  }

  return {
    ...baseTheme,
    global: {
      ...baseTheme.global,
      colors,
    },
  }
}

const Layout = ({ children }) => (
  <ConfigContext.Provider>
    <GlobalStyle />
    <style type="text/css">{FONT}</style>
    <link
      rel="preload"
      href="/mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="/mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />

    <ConfigContext.Consumer>
      {appConfig => (
        <Grommet
          theme={enhancedTheme(paperTheme, appConfig.theme)}
          full="True"
          css={css`
            scroll-behavior: smooth;
          `}
        >
          <Grid>
            <Slice>
              <Box
                css={css`
                background-color: rgba(255, 255, 238, 0.2);
                background-image: url(/lots-of-flowers.svg);
                background-size: contain, cover;
                background-attachment: scroll;
                background-blend-mode: screen;
                background-repeat: repeat;
              `}
              >
                <Nav />
                {children}
              </Box>
            </Slice>
          </Grid>
        </Grommet>
      )}
    </ConfigContext.Consumer>
  </ConfigContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
