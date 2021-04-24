import * as React from "react";
import ContactComponent from '../components/ContactComponent';
import Layout from '../components/Layout'
import PaintingsButton from "../components/PaintingsButton"

// markup
const ContactPage = () => {
  return (
    <Layout>
      <ContactComponent />
      <PaintingsButton />
    </Layout>
  )
}

export default ContactPage