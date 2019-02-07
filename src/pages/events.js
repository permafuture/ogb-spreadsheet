import React, { PureComponent } from 'react'
import { Box, Markdown, Stack } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'
import Faqs from '../components/Faqs'
import Nav from '../components/Nav'


const CONTENT=`
# EVENTS

We host readings, signings, book clubs and other events. Contact Steve to learn more.

Sign up for the mailing list! We'll send you info on upcoming sales and events, plus the occasional thank-you for being our customer. Put your email here. We'll never do anything weird with it.

You can also keep updated on social profiling media: LINKS
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
          end
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

  state = this.initialState

  hideModal = () => this.setState(this.initialState)

  showModal = (eventsOfTheDay, currentDay) =>
    this.setState({
      currentDay,
      eventsOfTheDay,
      showModal: true,
    })


  render() {
    const { currentDay, eventsOfTheDay, showModal } = this.state

    return (
      <Layout>
      <Stack anchor="bottom-right">
      <Hero />
      <Nav />
      </Stack>
          <Box>
          <Box>
          <Markdown>{CONTENT}</Markdown>
          </Box>
                <Box id="calendars" animation="fadeIn" elevation="small" pad="medium">
                  <ConfigContext.Consumer>
                    {({ limitMonthInTheFuture }) => (
                      <StaticQuery
                        query={SPREADSHEET_QUERY}
                        render={data => (
                          <Calendar
                            showModal={this.showModal}
                            events={groupEventsByMonth(data, limitMonthInTheFuture)}
                          />
                        )}
                      />
                    )}
                  </ConfigContext.Consumer>
                </Box>

        </Box>

        {showModal && (
          <ModalEvent
            hideModal={this.hideModal}
            currentDay={currentDay}
            events={eventsOfTheDay}
          />
        )}

      </Layout>
    )
  }
}

export default CalendarPage
