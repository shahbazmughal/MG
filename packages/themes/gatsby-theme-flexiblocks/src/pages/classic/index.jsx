import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Classic/HeaderBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Hero from '@solid-ui-blocks/Classic/HeroBlock02'
import Companies from '@solid-ui-blocks/Classic/CompaniesBlock01'
import Services from '@solid-ui-blocks/Classic/FeaturesBlock05'
import Services2 from '@solid-ui-blocks/Classic/FeaturesBlock05'
import FeatureOne from '@solid-ui-blocks/Classic/FeaturesWithPhotoBlock01'
import Footer from '@solid-ui-blocks/Classic/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import ClassicSeo from '@solid-ui-blocks/Classic/ClassicSeo'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <Seo title='Self-Hosted Email Marketing | MumaraClassic' description="Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software." />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
      </div>
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
      </Container>
      <Divider space='3' />
      <Companies content={content['companies']} />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureOne content={content['feature-one']} />
      <Divider space='5' />
      <Services content={content['services']} />
      <Services2 content={content['services2']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />

      <Main />
      <Base />
      <ClassicSeo />
      

    </Layout>
  )
}

export const query = graphql`
  query classicBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
