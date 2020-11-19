import React, { PureComponent } from 'react'
import { Box, Markdown, Paragraph, Text, Anchor, Heading } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import ScheduleNewBanner from '../components/ScheduleNewBanner'
import Calendar from '../components/Calendar'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'
import SimpleForm from '../components/Subscribe'
import Slice from '../components/Slice'
import SEO from '../components/SEO'
import groupEvents from '../utils/groupEvents'
import DayOfToday from '../components/Calendar/DayOfToday'

const CONTENT = `
We host readings, signings, book clubs and other events. Contact [Steve](mailto:organicbooksellers+steve@gmail.com) to learn more.

Sign up for our newsletter! We'll send you info on upcoming sales and events, plus the occasional thank-you for being our customer. Put your email here. We'll never do anything weird with it.


`
// override this query with your own questions!
const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
    allGoogleSheetEventsRow {
      edges {
        node {
          id
          eventName: eventorbooktitle
          date: day
          eventLink: link
          host: authorhost
          start
          eventDesc: eventdescription
        }
      }
    }
  }
`

class CalendarPage extends PureComponent {
  initialState = {
    currentDay: new Date(),
    eventsOfTheDay: [],
    showModal: false,
  }

  render() {
    return (
      <Layout>
        <Box>
          <SEO
            title="Events at Organic Books"
            description="Signings, readings, poetry and more at Nob Hill's neighborhood bookstore!"
            pathname="/events"
          />
          <ConfigContext.Consumer>
            {({ limitMonthInTheFuture }) => (
              <StaticQuery
                query={SPREADSHEET_QUERY}
                render={data => (
                  <Box>
                    <Slice>
                      <Heading level="1">Events</Heading>
                      <ScheduleNewBanner />
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
                      <Box alignSelf="center">
                        <SimpleForm />
                      </Box>
                    </Slice>
    {/*             <Slice
                      border={{
                        color: 'accent-3',
                        size: 'medium',
                      }}
                    >
                      <Heading alignSelf="center" level="3">
                        Next Event
                      </Heading>
                      <DayOfToday
                        events={groupEvents(data.allGoogleSheetEventsRow)}
                      />
                    </Slice> */}
                    <Slice>
                      <Box id="calendars">
                      <Paragraph size="large">All events are indefinitely postponed. We'll put the word out when that changes.
                      </Paragraph>
{/*                        <Calendar
                          showModal={this.showModal}
                          events={groupEventsByMonth(
                            data,
                            limitMonthInTheFuture,
                        />
                      )}     */}
                      </Box>
                    </Slice>
                  </Box>
                )}
              />
            )}
          </ConfigContext.Consumer>
        </Box>
      </Layout>
    )
  }
}

export default CalendarPage
