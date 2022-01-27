import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Sms/Features/HeaderBlock01'
import Footer from '@solid-ui-blocks/Sms/Features/FooterBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Sms/Features/Block06'
import Team from '@solid-ui-blocks/Sms/Features/Block03'
import Faq from '@solid-ui-blocks/Sms/Features/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import './sms-features.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Bulk SMS Platform' description="A Bulk SMS platform loaded with all necessary features to create text engagement campaigns and drive growth to your business." keywords="bulk sms platform,sms engagement,bulk sms solutions,global phone carriers,sell more,sell to more,marketing sms" />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_sms']} menuJustify='space-between' />
      </div>
      <Header content={content['header']} />
      <Team content={content['team']} />
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Features content={content['cl_features']} />
        <Divider space='4' />
        <Features content={content['cl_features2']} />
        <Features content={content['cl_features3']} />
        <Features content={content['cl_features4']} />
        <Divider space='5' />
        <Divider space='5' />
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer2}>
        <Faq content={content['faq']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query smsfeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["sms/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
