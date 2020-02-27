var slugify = require('slugify')

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const newsPostTemplate = path.resolve(`src/templates/newsTemplate.js`)

  const result = await graphql(`
    {
      allGoogleSheetEventsRow {
      edges {
        node {
          id
          eventName: eventorbooktitle
          host: authorhost
        }
      }
    }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const loc = '/news/' + slugify(node.frontmatter.date + '-' + node.frontmatter.title)
    createPage({
      path: loc,
      component: newsPostTemplate,
      context: {}, // additional data can be passed via context
    })
  },
  result.data.allGoogleSheetEventsRow.edges.forEach(edge => {
    const pagename = edge.node.host + '-' + edge.node.eventName
    const slug = '/events/' + slugify(pagename, {lower: true})
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/eventPage.js`),
      context: {
        id: edge.node.id,
        pathname: slug
      },
    })
  }))
}
