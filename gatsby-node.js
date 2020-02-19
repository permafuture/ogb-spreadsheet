var slugify = require('slugify')

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allGoogleSheetEventsRow {
        edges {
          node {
            id
            eventName: eventorbooktitle
            host: authorhost
          }
        }
      }
    }
  `)
  data.allGoogleSheetEventsRow.edges.forEach(edge => {

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
  })
}
