import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="news-post-container">
      <div className="news-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="news-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
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
