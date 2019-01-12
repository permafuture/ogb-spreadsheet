import React from 'react'
import PropTypes from 'prop-types'
import { Box, Accordion, AccordionPanel} from 'grommet'

const Concertina = ({ data }) => {

  return (
     <Box>
        <Accordion animate={true} multiple={false}>
           {data.allGoogleSheetFaqsRow.edges.map(({ node }, index) => (
             console.log(data),
          <AccordionPanel key={node.id} label={node.question}>
            <Box basis="small" >
              {node.answer}
            </Box>
          </AccordionPanel>
                      ))}
        </Accordion>
      </Box>
  );
};

export default Concertina
