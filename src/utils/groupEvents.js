import { format } from 'date-fns'

const groupEvents = (data) => {

  const eventsByDateKey = data.allGoogleSheetEventsRow.edges.reduce(
    (acc, { node }) => {
      const eventDate = format(new Date(node.date))

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
    },
    {},
  )
  const result = Object.keys(eventsByDateKey).map(dateKey => ({
    events: eventsByDateKey[dateKey],
    date: dateKey,
  }))
  return result
}

export default groupEvents
