import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Classicesp/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Classicesp/Pricing/FooterBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Classicesp/Pricing/Block06'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Timer from '../Timer';
import styles from './_styles'
import theme from './_theme'

const campFeatures20= props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='SMS Packages | Mumara' description="Select desired slab according to the estimated monthly sending volume and get the most affordable message sending rates across the globe." keywords="sms topup,sms package,bulk sms service,bulk sms cost,sms online recharge"/>
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
      </div>
      <Header content={content['header']} />
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Timer />
        <Divider space='5' />
      </Container>
      
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query campFeatures20BlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/triggers", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default campFeatures20