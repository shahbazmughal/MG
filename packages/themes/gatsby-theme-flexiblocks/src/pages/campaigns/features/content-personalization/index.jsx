import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/InnerPage/HeaderBlock01'
import Footer from '@solid-ui-blocks/InnerPage/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/InnerPage/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import Services from '@solid-ui-blocks/InnerPage/FeaturesBlock05'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'


const campFeatures06 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <div className="innerpage-main">
        <Seo title='Personalized Email | Dynamic Content' description="Use custom variables and tools like dynamic content tags or spintag to target right audience with personalized email and diverse content every-time." keywords="personalized email marketing,custom email,dynamic content,purchasing patterns,email content spinner,custom variables"/>
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div id="custom-variables" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div id="spintags" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div id="dynamic-tags" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div id="conditional-content" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <div id="purchase-pattern" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features5']} />
        </div>
        
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campFeatures06BlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/content-personalization", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default campFeatures06
