import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Text } from 'grommet'

const isEven = num => {
  if (num % 2 === 0) return true
  return false
}

const Credits = ({ creditsRows }) => (
  <Grid
    columns={{
      count: 2,
      size: 'auto',
    }}
    align="end"
    alignSelf="center"
    gap="small"
  >
    {creditsRows.edges.map(
      ({ node }, index) =>
        (isEven(index) && (
          <Text size="large" weight="600" textAlign="end" truncate="truncate">
            {node.firstname}
            &nbsp;
            {node.lastname}
          </Text>
        )) || (
          <Text size="large" weight="600" truncate="truncate" textAlign="start">
            {node.firstname}
            &nbsp;
            {node.lastname}
          </Text>
        ),
    )}
  </Grid>
)

export default Credits

Credits.propTypes = {
  creditsRows: PropTypes.array.isRequired,
}
