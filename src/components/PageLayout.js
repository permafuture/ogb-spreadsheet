import React from 'react'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import { Grommet, Box } from 'grommet'
import { grog } from './Grog'
import SEO from './SEO'
import Slice from './Slice'
import ConfigContext from './ConfigContext'
import flatObject from '../utils/flatObject'

require("typeface-alegreya")

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

  }
`
const FONT=`

@font-face {
font-family: 'Picture House One Bold';
src:  url('/mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff2') format('woff2'),
      url('mbpicturehouse_onebold_macroman/MB_Picture_House_One_Bold-webfont.woff') format('woff');
font-display: auto;
}

@font-face {
font-family: 'Picture House One Regular';
src:  url('/mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff2') format('woff2'),
      url('mbpicturehouse_oneregular_macroman/MB_Picture_House_One_Regular-webfont.woff') format('woff');
font-display: auto;
}

`

const enhancedTheme = (baseTheme, customTheme) => {
  const flatTheme = flatObject(customTheme)
  const colors = {
    ...grog.global.colors,
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
          theme={enhancedTheme(grog, appConfig.theme)}
          full="True"
          css={css`
            scroll-behavior: smooth;
          `}
        >
          <SEO />
          <Slice css={css`
           background-attachment: fixed;
           `}
          >
            <Box
              css={css`
                background-image: url(/lots-of-flowers.svg);
                background-size: cover;
                background-attachment: fixed;
              `}
            >
              {children}
            </Box>
          </Slice>
        </Grommet>
      )}
    </ConfigContext.Consumer>
  </ConfigContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
