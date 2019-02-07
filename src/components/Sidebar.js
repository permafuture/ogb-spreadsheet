import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Heading, ResponsiveContext } from 'grommet'
import { Menu } from 'grommet-icons'

class Sidebar extends React.Component {
  state = {
    collapsed: true,
  }

  render() {
    const {
      title, width, children, collapsible, headingProps, ...rest
    } = this.props
    const { collapsed } = this.state
    const BtnToggle = ({ view }) => (
      collapsible ? <Button icon={<Menu color="brand"/>} alignSelf="end" onClick={() => this.setState({ collapsed: view !== 'collapsed' })} /> : null
    )
    return (
      <ResponsiveContext.Consumer>
        {size => ((collapsible && size === 'small' && collapsed === undefined) || collapsed === true ? (
          <Box pad="medium" alignSelf='end' elevation="small">
            <BtnToggle  view='collapsed' />
          </Box>
          ) : (
            <Box pad="medium" elevation="large"
              {...rest}
            >
              <Box alignSelf="end">
              {title && (
                  <Box
                    flex={false}
                    tag='header'
                    alignContent='end'
                    {...headingProps}
                  >{typeof title === 'string' ?
                  (<Heading margin='none' level={3}>{title}</Heading>)
                  : title}
                  </Box>
              )}
              </Box>
              <Box animation="fadeIn" fill="horizontal" align="end" direction="column"
              background="accent-2">
              {children}
              </Box>
              <Box  alignSelf='end'>
                <BtnToggle view='expanded' />
              </Box>
            </Box>
        )
        )}
      </ResponsiveContext.Consumer>
    )
  }
}

Sidebar.defaultProps = {
  title: undefined,
  width: 'medium',
  collapsible: true,
}

Sidebar.propTypes = {
  title: PropTypes.node,
  width: PropTypes.string,
  collapsible: PropTypes.bool,
}

export default Sidebar
