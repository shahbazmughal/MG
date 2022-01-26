import React from 'react'
import { graphql } from 'gatsby'
import Team from '@solid-ui-blocks/Contacts/HeroBlock03'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Contacts/HeaderBlock01'
import Footer from '@solid-ui-blocks/Contacts/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Contacts from '@solid-ui-blocks/Contacts/Contacts'
import theme from './_theme'
import './contactspage.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} className="contactus-page-main">
      <Seo title='Contact Us | Mumara' description="Fill in the contact form to send your query regarding apps and services or navigate your preferred app to send the demo request." keywords="mumara phone number,mumara contact number,mumara support,contact mumara" />
        <Header content={content['header']} />
        <Team content={content['team']} />
        <Divider space='5' />
        <Contacts  />
        <Divider space='5' />
        <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query contactUsBlockContent {
    allBlockContent(filter: { page: { in: ["contact-us", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
