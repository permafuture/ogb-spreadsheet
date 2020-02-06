const slugify = (text) => {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}
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
    const slug = '/events/' + slugify(pagename)
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/eventPage.js`),
      context: {
        id: edge.node.id
      },
    })
  })
}
