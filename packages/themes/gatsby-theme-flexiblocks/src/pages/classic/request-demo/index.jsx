import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Sms/HeaderBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Footer from '@solid-ui-blocks/Sms/FooterBlock01'
import Team from '@solid-ui-blocks/Contacts/HeroBlock03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import RequestDemo from '@solid-ui-blocks/Classic/RequestDemo/RequestDemo'
import './classic-demo.css'
import theme from './_theme'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Request a Demo | MumaraClassic' description="Fill in the form to send your precise requirements, and we’ll setup a demo for you to take a tour through the application and test the functionality." keywords="mumaraclassic demo,free email marketer,email marketing software" />
      <div className="classic-demopage">
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Team content={content['team']} />
        <Divider space='5' />
        <RequestDemo  />
        <Divider space='5' />
        <Footer content={content['footer']} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicReqDemoBlockContent {
    allBlockContent(filter: { page: { in: ["classic/requestdemo", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
