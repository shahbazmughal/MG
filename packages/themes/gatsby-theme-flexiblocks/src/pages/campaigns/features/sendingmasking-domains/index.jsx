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

const campFeatures16= props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Multiple Email Domains | Email Authentications' description="Send from Email Domain of your choice, setup sending domains with all important email authentications including SPF and DKIM for optimum delivery." keywords="mail domain,email domain,spf generator,dkim generator,email authentications"/>
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
  query campFeatures16BlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/sendingmasking-domains", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default campFeatures16