import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Markdown, Paragraph, Text, Button } from 'grommet'
import { LinkPrevious, LinkNext, Multiple } from 'grommet-icons'
import Layout from '../components/PageLayout'
import Slice from '../components/Slice'
import SEO from '../components/SEO'


export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Slice>
        <Box align="end">
        <Heading level="3" size="large" margin="small">{frontmatter.title}</Heading>
        <Heading level="4" size="small" margin={{top:'small', bottom:'large'}}>{frontmatter.date}</Heading>
        </Box>
        <Box
          dangerouslySetInnerHTML={{ __html: html }}
        />
      <Box direction="row-responsive" margin={{top:'xlarge', horizontal:'none',bottom:'none'}} alignSelf="center">
        <Button
          color="light-3"
          pad="small"
          alignSelf="center"
          icon=<LinkPrevious />
          label="Newer"
          href="books"
        />
      <Button
        color="light-3"
          alignSelf="center"
          icon=<Multiple />
          label="Archive"
          href="books"
        />
      <Button
        color="light-3"

          alignSelf="center"
          icon=<LinkNext />
          label="Older"
          href="books"
        />
      </Box>
    </Slice>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($date: Date) {
    markdownRemark(frontmatter: { date: { eq: $date } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        rating
      }
    }
  }
`
