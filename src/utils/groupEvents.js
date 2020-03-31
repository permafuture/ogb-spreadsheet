import format from 'date-fns/format'
import parse from 'date-fns/parse'

const groupEvents = eventsRows => {
  const eventsByDateKey = eventsRows.edges.reduce((acc, { node }) => {
    const nodeDate = parse(node.date, 'MM/dd/yyyy', new Date())

    const eventDate = format(nodeDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")

    if (!acc[eventDate]) {
      return {
        ...acc,
        [eventDate]: [node],
      }
    }

    return {
      ...acc,
      [eventDate]: acc[eventDate].concat(node),
    }
  }, {})
  const result = Object.keys(eventsByDateKey).map(dateKey => ({
    events: eventsByDateKey[dateKey],
    date: dateKey,
  }))

  return result
}

export default groupEvents
