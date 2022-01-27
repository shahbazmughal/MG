import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/InnerPage/HeaderBlock01'
import Footer from '@solid-ui-blocks/InnerPage/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/InnerPage/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='SMS Gateway APIs | SMS' description="Configure your SMS service with SMS gateway provider of your choice, SMSplus has integrated bunch of globally acknowledged SMS gateway APIs." keywords="sms gateway api,sms api,sms gateway,clickatell integrated,infobip integrated,twilio integrated" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_smsplus']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query smsPlusFeaturesPage7BlockContent {
    allBlockContent(
      filter: { page: { in: ["smsplus/multi-gateway-integration", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
