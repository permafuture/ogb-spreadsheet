import React from 'react'
import { Box } from 'grommet'
import { css } from 'styled-components'

const Slice = ({ children, ...sliceProps }) => (
  <Box
    {...sliceProps}
    width="large"
    alignSelf="center"
    pad="large"
    background="accent-2"
    css={css``}
    margin="large"
    border={{
      color: 'light-2',
      size: 'medium',
    }}
  >
    {children}
  </Box>
)

export default Slice
