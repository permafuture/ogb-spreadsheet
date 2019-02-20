import React from 'react'
import { Box } from 'grommet'
import { css } from 'styled-components'

const Slice = ({ children, ...sliceProps }) => (
    <Box
      {...sliceProps}
      background="accent-2"
      css={css`
      background-image: url('https://www.transparenttextures.com/patterns/exclusive-paper.png');
      `}>
        {children}

    </Box>

)

export default Slice
