import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Smsplus/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Smsplus/Pricing/FooterBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Smsplus/Pricing/Block06'
import Features2 from '@solid-ui-blocks/Smsplus/Pricing/Block007'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import './smspluspricing-page.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='SMSPlus Pricing | Mumara' description="Becoming an SMS service provider was never too easy to just subscribe a package, get SMSPlus install on your instance, configure gateway of your choice and kick start your business." keywords="bulk sms service provider,smsplus pricing" />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_smsplus']} menuJustify='space-between' />
      </div>
      <Header content={content['header']} />
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Divider space='4' />
        <div className="cprb">
          <Features2 content={content['cl_features2']} />
        </div>
      </Container>
      
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query smsPlusPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["smsplus/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
