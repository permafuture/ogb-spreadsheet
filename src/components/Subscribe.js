import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url =
"//organicbooks.us19.list-manage.com/subscribe/post?u=8bfbf9ffb2c58df07b871cefb&amp;id=10cfa28dee";


// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}  />


export default SimpleForm
