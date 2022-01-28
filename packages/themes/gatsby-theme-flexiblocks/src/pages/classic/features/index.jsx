import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Classic/Features/HeaderBlock01'
import Footer from '@solid-ui-blocks/Classic/Features/FooterBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Classic/Features/Block06'
import Team from '@solid-ui-blocks/Classic/Features/Block03'
import Faq from '@solid-ui-blocks/Classic/Features/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import './calssic-features.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Features & Addons | Mumaraclassic' description="MumaraClassic has collected set of advanced modules integrated to seamlessly work with its structure and ensure high volume email delivery." keywords="mumara addons,high volume email delivery,email marketing tools,bulk email software,bulk email sender" />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
      </div>
      <Header content={content['header']} />
      <Team content={content['team']} />
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Features content={content['cl_features']} />
        <Features content={content['cl_features2']} />
        <Features content={content['cl_features3']} />
        <Features content={content['cl_features4']} />
        <Features content={content['cl_features5']} />
        <Features content={content['cl_features6']} />
        <Divider space='5' />
        <Divider space='5' />
      </Container>
      
      
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer2}>
        <Faq content={content['faq']} />
        <Faq content={content['faq2']} />
        <Faq content={content['faq3']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query classicfeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
