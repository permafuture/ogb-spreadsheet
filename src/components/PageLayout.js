import React from 'react'
import PropTypes from 'prop-types'
import { css, createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'
import { grog } from './Grog'
import Helmet from './Helmet'
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
          {children}
        </Grommet>
      )}
    </ConfigContext.Consumer>
  </ConfigContext.Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
