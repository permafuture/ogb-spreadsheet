import React from 'react'
import { Markdown, Paragraph, Text } from 'grommet'

const content=``

const Mdo = (content) => (
  <Markdown
   components={{
     p: {
       component: Paragraph,
       props: {
         size: 'xlarge'
       }
     },
     strong: {
       component: Text,
       props: {
         size: 'xxlarge',
         weight: 800
       }
     },
   }}
 >
 {content}
 </Markdown>

)

export default Mdo
