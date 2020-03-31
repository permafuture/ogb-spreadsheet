import React from 'react'
import { Box, Markdown, Paragraph, Text, Anchor, Heading } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import ArticleBanner from '../components/ArticleBanner'
import Layout from '../components/PageLayout'
import Slice from '../components/Slice'
import SEO from '../components/SEO'


const CONTENT = `
We host readings, signings, book clubs and other events. Contact [Steve](mailto:organicbooksellers+steve@gmail.com) to learn more.

Sign up for our newsletter! We'll send you info on upcoming sales and events, plus the occasional thank-you for being our customer. Put your email here. We'll never do anything weird with it.


`
// override this query with your own questions!
const ARTICLE_QUERY = graphql`
  query articleQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        title
      }
      id
      excerpt
    }
    pageInfo {
      perPage
    }
  }
}
`

const NewsPage = () => (
  <Layout>
    <Box>
      <SEO
        title="News Archive -- Organic Books"
        description="Updates, news coverage and blog posts from Nob Hill's neighborhood bookstore!"
        pathname="/news"
      />
      <StaticQuery
        query={ARTICLE_QUERY}
        render={data => (
          <Box>
            <Slice>
              <Heading level="1">News</Heading>
              <ArticleBanner />
              <Markdown
                components={{
                          p: {
                            component: Paragraph,
                            props: {
                              size: 'xlarge',
                            },
                          },
                          strong: {
                            component: Text,
                            props: {
                              size: 'xxlarge',
                              weight: 800,
                            },
                          },
                          a: {
                            component: Anchor,
                          },
                        }}
              >
                {CONTENT}
              </Markdown>
            </Slice>
            <Slice
              border={{
                        color: 'accent-3',
                        size: 'medium',
                      }}
            >
              <Heading alignSelf="center" level="3">
                        Latest News
              </Heading>
            </Slice>
            <Slice>
              <Box id="calendars" />
            </Slice>
          </Box>
                )}
      />
    </Box>
  </Layout>
)

export default NewsPage
