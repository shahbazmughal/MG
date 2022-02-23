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
import RequestDemo from '@solid-ui-blocks/Campaigns/RequestDemo/RequestDemo'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import './camp-demopage.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Request a Demo | CampaignsPlus | Mumara' />
      <div className="camp-demopage">
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

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
  query CampaignsReqDemoBlockContent {
    allBlockContent(filter: { page: { in: ["campaigns/requestdemo", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
