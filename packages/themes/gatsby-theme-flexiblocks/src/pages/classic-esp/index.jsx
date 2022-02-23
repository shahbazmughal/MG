import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Classicesp/HeaderBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Classicesp/HeroBlock01'
import FeatureOne from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock02'
import FeatureTwo from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock05'
import FeatureThree from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock01'
import Footer from '@solid-ui-blocks/Classicesp/FooterBlock01'
import WhyChooseUs from '@solid-ui-blocks/Classicesp/FeaturesBlock04'
import Services from '@solid-ui-blocks/Classicesp/FeaturesBlock05'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import ClassicEsp from '@solid-ui-blocks/Classicesp/ClassicEsp'
import theme from './_theme'
import styles from './_styles'
import './classic-esp-page.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Software for Email Service Providers' description="Email service providers can have the Mumara ESP installed on their webserver, can configure it with all required resources to offer email services to its clients." />
      {/* Blocks */}
      <div className="classic-esp-main">
        {/* <Header className="menu-light" content={content['header-light']} menuJustify='space-between' /> */}
        <Menu className="menu-light" content={content['header-light']} menuJustify='space-between' />

        <Container variant='full' sx={styles.heroContainer}>
          <Divider space='5' />
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
        <Services content={content['services']} />
        <Divider space='5' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <ClassicEsp />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicespBlockContent {
    allBlockContent(filter: { page: { in: ["classic-esp", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
