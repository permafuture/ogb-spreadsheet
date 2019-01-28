import React from 'react'
import PropTypes from 'prop-types'
import appConfig from '../../appConfig'

const DEFAULT_CONFIG = {
  title: 'Organic Books in Albuquerque',
  subTitle: '',
  formLink: 'https://goo.gl/forms/u00WBxeK1kQco0uQ2',
  maxAmountEvents: 2,
  limitMonthInTheFuture: 2,
}

const { Provider, Consumer } = React.createContext(DEFAULT_CONFIG)

const ConfigProvider = ({ children }) => (
  <Provider value={appConfig}>{children}</Provider>
)

ConfigProvider.propTypes = {
  children: PropTypes.node,
}

const ConfigContext = {
  Provider: ConfigProvider,
  Consumer,
}

export default ConfigContext
