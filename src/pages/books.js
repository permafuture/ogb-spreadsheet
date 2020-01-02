import React from 'react'
import {
  Box,
  Heading,
  Markdown,
  Paragraph,
  Text,
  Anchor
} from 'grommet'
import { Catalog } from 'grommet-icons'
import Sidekick from '../components/Sidekick'
import Layout from '../components/PageLayout'
import Nav from '../components/Nav'
import Slice from '../components/Slice'

const CONTENT = `

## We sell books<br /> and things that bookstores sell.

**Our specialty is brand-new books by local authors.** We also have a wide variety of used books: fiction, poetry, Southwest writers, and more.

We take books for trade or donation, and buy books directly from local authors. Bring used books any time we're open.

Our trade policy is $1 for paperbacks, $2 for tall paperbacks, and $3 for select hardbacks. Or, donate your books and we'll put your credit toward our 20% **Educator Discount**!

**That's right: teachers, faculty, adjuncts, bring ID and get 20% off any book in the store. We appreciate you!**

## We buy local!

**If you're a local author, we want to carry your books!** Contact [Steve](mailto:organicbooksellers+steve@gmail.com), or come to the store during buying hours, 10am to 12 noon.

**If you're a local artisan, bring us things that bookstores might sell!** We want to carry your gift cards, calendars, stickers, and other crafts. Talk to [Kelly](mailto:organicbooksellers+kelly@gmail.com), or drop a sample by the store any day.`

const CatalogBanner = () => [<Box
  direction="row"
  alignSelf="center"
  alignContent="center"
  overflow="hidden"
  margin={{
      "top" : "-1em",
      "bottom" : "1em"
    }}
>
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
  <Catalog color="accent-4" size="small" alt="" />
</Box>
    ]

const BooksPage = () => (
  <Layout>

    <Sidekick />
    <Nav />
    <Slice
      alignSelf="center"
      alignContent="stretch"
      margin={{
      "bottom" : "xlarge"
    }}
      width="large"
      pad="large"
      background="accent-2"
      border={{
      "color" : "accent-4",
      "size" : "medium"
    }}
    >

      <Heading level="1">Books</Heading>
      <CatalogBanner />
      <Markdown components={{
        p: {
          component: Paragraph,
          props: {
            size: 'large',
            alignSelf: 'stretch'
          }
        },
        strong: {
          component: Text,
          props: {
            size: 'xlarge',
            weight: 800,
            alignSelf: 'stretch'
          }
        },
        a: {
          component: Anchor
        }
      }}
      >
        {CONTENT}
      </Markdown>
    </Slice>
  </Layout>
 )

export default BooksPage
