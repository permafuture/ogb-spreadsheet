import React from 'react'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import { Grommet, Box } from 'grommet'
import { grog } from './Grog'
import Helmet from './Helmet'
import Slice from './Slice'
import ConfigContext from './ConfigContext'
import flatObject from '../utils/flatObject'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

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
    <ConfigContext.Consumer>
      {appConfig => (
        <Grommet
          theme={enhancedTheme(grog, appConfig.theme)}
          full="true"
          css={css`
            scroll-behavior: smooth;
          `}
        >
          <Helmet />
          <Slice css={css`
           background-attachment: fixed;
           `}
          >
          <Box
           animation={{
            "type": "fadeIn",
            "delay": 100,
            "duration": 2000,
            "size": "xsmall"
            }}
           css={css`
            background-image: url(lots-of-flowers.svg);
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
