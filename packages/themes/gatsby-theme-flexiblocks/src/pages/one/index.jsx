import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/One/HeaderBlock01'
import Hero from '@solid-ui-blocks/One/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/One/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/One/FeatureRight'
import FeatureTabOne from '@solid-ui-blocks/One/FeaturesWithPhotoBlock05'
import FeatureTabTwo from '@solid-ui-blocks/One/FeaturesWithPhotoBlock06'
import FeatureTabThree from '@solid-ui-blocks/One/FeaturesWithPhotoBlock01'
import WhyChooseUs from '@solid-ui-blocks/One/FeaturesBlock04'
import GetStarted from '@solid-ui-blocks/One/StatsBlock01'
import Faq from '@solid-ui-blocks/One/FaqBlock01'
import Footer from '@solid-ui-blocks/One/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Blog2 from '@solid-ui-blocks/Home/BlogBlock02'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/OneSeo'
import theme from './_theme'
import styles from './_styles'
import './oneseomain.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Mumara ONE' description="Mumara ONE is a simplified intelligent marketing automation tool." />
      {/* Blocks */}
      {/* <Header content={content['header']} /> */}
      <Menu content={content['header']} />

      <Container variant='full' sx={styles.heroContainer}>
        <Divider space='5' />
        <Hero content={content['hero']} />
      </Container>
      <Divider space='5' />
      <WhyChooseUs content={content['why-choose-us']} />
      <Divider space='5' />
      <GetStarted content={content['get-started']} />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureLeft content={content['feature-one']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-two']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-three']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-four']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-five']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-six']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-seven']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-eight']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.featuresContainer}>
        <FeatureTabOne content={content['feature-tab-one']} reverse />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabTwo content={content['feature-tab-two']} />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabThree content={content['feature-tab-three']} reverse />
      </Container>
      <Divider space='5' />

      <Divider space='5' />
      <Container variant='narrow'>
        <Faq content={content['faq']} />
      </Container>
      <Divider space='5' />
      <Blog2 />
      <Divider space='5' />
      <Footer content={content['footer']} />

      <Main />
      <Base />
      <OneSeo />

    </Layout>
  )
}

export const query = graphql`
  query oneBlockContent {
    allBlockContent(filter: { page: { in: ["one", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
