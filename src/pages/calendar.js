import React, { PureComponent } from 'react'
import { Box, Tabs, Tab } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'
import Faqs from '../components/Faqs'

// override this query with your own questions!
const SPREADSHEET_QUERY = graphql`
  query eventsQuery {
    allGoogleSheetEventsRow {
      edges {
        node {
          id
          eventName: eventtitle
          date: day
          eventLink: link
          host: authorhost
          start
          end
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
        <Hero />
          <Box>

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
