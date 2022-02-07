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

const campFeatures04 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Autoresponder | Drip Email Marketing' description="Nurture leads, use Autoresponders function to create series of auto follow ups and setup drip campaigns to be delivered automatically at preset criteria and time interval." keywords="lead nurturing,drip campaign,autoresponder,follow up emails,drip email campaign"/>
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
  query campFeatures04BlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/cohesive-process-of-automation", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default campFeatures04
