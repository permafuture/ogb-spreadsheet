import React from 'react'
import PropTypes from 'prop-types'
import { Box, Accordion, AccordionPanel} from 'grommet'

const Concertina = ({ data }) => {

  return (
     <Box elevation="none" alignSelf="stretch" overflow="hidden" >
        <Accordion animate={true} multiple={false} alignSelf="stretch" >
           {data.allGoogleSheetFaqsRow.edges.map(({ node }, index) => (
            <AccordionPanel key={node.id} label={node.question}>
            <Box height="auto" pad="medium" elevation="xsmall" wrap="true">
              {node.answer}
            </Box>
          </AccordionPanel>
            ))}
        </Accordion>
      </Box>
  );
};

export default Concertina
