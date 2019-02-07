import React, { PureComponent } from 'react'
import { Box, ResponsiveContext, Heading, Markdown, Stack, Paragraph, Text} from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Concertina from '../components/Concertina'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import ConfigContext from '../components/ConfigContext'
import Nav from '../components/Nav'

import styled from 'styled-components'


const CONTENT=`
# BOOKS

## We sell books, and things that bookstores might sell.

Our specialty is brand-new books by local authors. We also have a wide variety of used books: fiction, poetry, Southwest writers, and more.

We take books for trade or donation, and buy books directly from local authors. Bring used books any time we're open.

Our trade policy is $1 for paperbacks, $2 for tall paperbacks, and $5 for select hardbacks. Or, donate your books and we'll put your credit toward our 20% Teachers Discount!

### That's right, bring a faculty ID and you get 20% off any book in the store. We appreciate you!

We can order books for you! We buy books from an international network of independent bookstores. Contact Max for more information.

## We buy local!

If you're a local author, we want to carry your books! Contact Steve, or come to the store during buying hours, 10am to 12 noon.

If you're a local artisan, bring us things that bookstores might sell! We want to carry your gift cards, calendars, stickers, and other crafts. Talk to Kelly, or drop a sample by the store any day.`


const IndexPage = ({data}) => (

      <Layout>
       <Box>
       <Stack anchor="bottom-right">
       <Hero />
       <Nav />
       </Stack>
         <Box>
            <Markdown components={{
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
            }}>{CONTENT}</Markdown>
        </Box>
        </Box>
        </Layout>
    )

export default IndexPage
