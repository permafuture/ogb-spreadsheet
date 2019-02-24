import { format } from 'date-fns'
import isFuture from 'date-fns/is_future'
import closestTo from 'date-fns/closest_to'

const groupEvents = (data) => {
  const today = new Date()

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
  console.log("groupEvents day out = " + result)
  return result
}

export default groupEvents
