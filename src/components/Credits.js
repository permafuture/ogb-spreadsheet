import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Text} from 'grommet'


const isEven = (num) => {
if (num % 2 == 0)
  return true;
else
  return false;
}

const Credits = ({ data }) => {

  return (
    <Grid
      columns={{
        count: 2,
        size: "auto"
      }}
      align="end"
      alignSelf="center"
      gap="small"
      >
           {data.allGoogleSheetCreditsRow.edges.map(({ node }, index) => (
            isEven(index) &&
            <Text
            size="large"
            weight="600"
            textAlign="end"
            truncate
            >
            {node.firstname} {node.lastname}
            </Text>
           ||
            <Text
            size="large"
            weight="600"
            truncate
            textAlign="start"
            >
            {node.firstname} {node.lastname}
            </Text>

            ))}

    </Grid>
  );
};

export default Credits
