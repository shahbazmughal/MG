import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Smsplus/HeaderBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Smsplus/HeroBlock01'
import FeatureOne from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock02'
import FeatureTwo from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock05'
import FeatureThree from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock01'
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import Footer from '@solid-ui-blocks/Smsplus/FooterBlock01'
import WhyChooseUs from '@solid-ui-blocks/Smsplus/FeaturesBlock04'
import Services from '@solid-ui-blocks/Smsplus/FeaturesBlock05'
import Companies from '@solid-ui-blocks/Classic/CompaniesBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import SmsplusSeo from '@solid-ui-blocks/Smsplus/SmsplusSeo'
import theme from './_theme'
import styles from './_styles'
import './smsplus-page.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Start SMS Service' description="SMSplus is the platform for the ones who are looking to start SMS service. It is combination of features necessary for SMS service providers to operate." />
      {/* Blocks */}
      <div className="smsplus-page">
        <div className="subheader-block">
          <SubHeader content={content['subheader_smsplus']} menuJustify='space-between' />
        </div>
        <Header content={content['header-light']} menuJustify='space-between' />
        <Divider space='5' />
        <Container variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} reverse />
        </Container>
        <Divider space='5' />
        <Divider space='5' />
        <Divider space='5' />
        <Divider space='5' />
        <WhyChooseUs content={content['why-choose-us']} />
        <Divider space='4' />
        <Container variant='wide' sx={styles.tabsContainer}>
          <Tabs space={5}>
            <FeatureOne content={content['tab-feature-one']} />
            <FeatureTwo content={content['tab-feature-two']} />
            <FeatureThree content={content['tab-feature-three']} />
          </Tabs>
        </Container>
        <Divider space='5' />
        <Companies content={content['companies']} />
        <Divider space='4' />
        <Container variant='full' sx={styles.featuresContainer}>
          <Features content={content['features']} />
        </Container>
        <Divider space='4' />
        <Services content={content['services']} />
        <Divider space='5' />
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <SmsplusSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query smsplusBlockContent {
    allBlockContent(filter: { page: { in: ["smsplus", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
