import React from 'react'
import { Box, ResponsiveContext, css } from 'grommet'
import PropTypes from 'prop-types'

const CalendarBox = ({ square, children, onClick, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        onClick={onClick}
        height={size !== 'small' && '8rem'}
        width="auto"
        fill={'horizontal'}
        css={css`
          cursor: ${onClick && 'pointer'};
        `}
        {...rest}
      >
        {children}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

CalendarBox.propTypes = {
  square: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default CalendarBox
