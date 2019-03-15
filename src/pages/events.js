import React, { PureComponent } from 'react'
import { Box, Markdown, Stack, Paragraph, Text, Anchor, Heading } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Calendar from '../components/Calendar'
import ModalEvent from '../components/ModalEvent'
import Hero from '../components/Hero'
import Layout from '../components/PageLayout'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'
import Nav from '../components/Nav'
import styled from 'styled-components'
import SimpleForm from '../components/Subscribe'
import Slice from '../components/Slice'
import {ScheduleNew} from 'grommet-icons'

const CONTENT=`
We host readings, signings, book clubs and other events. Contact [Steve](mailto:organicbooksellers+steve@gmail.com) to learn more.

Sign up for our newsletter! We'll send you info on upcoming sales and events, plus the occasional thank-you for being our customer. Put your email here. We'll never do anything weird with it.


`
const ScheduleNewBanner = () => {
  return [
    <Box direction="row" alignSelf="center" alignContent="center" overflow="hidden" margin={{ "top": "-1em", "bottom": "1em"}}>
    <ScheduleNew  size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew  size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
    <ScheduleNew size="small" color="accent-4" />
      <ScheduleNew size="small" color="accent-4" />
      <ScheduleNew size="small" color="accent-4" />
      <ScheduleNew size="small" color="accent-4" />
    </Box>
  ]
}


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
const StyledP=styled.p`{
  "p": {
    "component": "Paragraph",
    "props": {"size": "large"}
  }
}`

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
      <Nav />
          <Slice alignSelf="center"
               alignContent="stretch"
               width="large"
               pad="large"
               margin={{ "bottom": "xlarge"}}
               background="accent-2"
               border={{
             "color": "accent-4",
             "size": "medium"
           }}>
           <Box>
           <Heading level="1">Events</Heading>
           <ScheduleNewBanner />
             <Markdown components={{
              p: {
                component: Paragraph,
                props: {
                  size: 'xlarge'
                }
              },
              strong: {
                component: Text,
                props: {
                  size: 'xxlarge',
                  weight: 800
                }
              },
              a: {
                component: Anchor,
              },
            }}>{CONTENT}</Markdown>
            <Box alignSelf="center">
            <SimpleForm />
            </Box>
          </Box>
                <Box id="calendars" animation="fadeIn" >
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

        </Slice>

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
