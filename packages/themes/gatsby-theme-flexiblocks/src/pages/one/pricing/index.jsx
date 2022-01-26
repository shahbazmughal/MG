import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/One/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/One/Pricing/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/One/Pricing/HeroBlock02'
import PriceBlock01 from '@solid-ui-blocks/One/Pricing/PriceBlock01'
import PriceBlock02 from '@solid-ui-blocks/One/Pricing/PriceBlock02'
import FeatureOne from '@solid-ui-blocks/One/Pricing/FeaturesWithPhotoBlock02'
import Faq from '@solid-ui-blocks/One/Pricing/FaqBlock01'
import { Helmet } from "react-helmet"
import theme from './_theme'
import styles from './_styles'
import './onePricing.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-pricing">
        <Seo title='Mumara ONE Pricing' description="Send your campaign without the fear of running out email credits, subscribe Mumara One to get your email marketer auto deployed on cloud." keywords="purchase one,mumara one pricing,subscribe mumara one" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} className='innerHeader' />
        <Container variant='full' sx={styles.heroContainer} className='onehero'>
          <Hero content={content['hero']} />
        </Container>
        <Divider space='5' />
        <div className="home-one-main op-page">
          <PriceBlock01 content={content['oneprice']} />
          <Divider space='4' />
          <PriceBlock02 content={content['oneprice']} />
        </div>
        <Divider space='6' />
        <FeatureOne content={content['tab-feature-one']} />
        <Divider space='5' />
        <Container variant='narrow'>
          <Faq content={content['faq']} />
        </Container>
        <Divider space='5' />
        <Divider space='0' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query onePricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
