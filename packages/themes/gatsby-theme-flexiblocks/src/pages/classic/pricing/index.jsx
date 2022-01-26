import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/Classic/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Classic/Pricing/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/Classic/Pricing/HeroBlock02'
import PriceBlock01 from '@solid-ui-blocks/Classic/Pricing/PriceBlock01'
import Clients from '@solid-ui-blocks/Classic/Pricing/CompaniesBlock01'
import { Helmet } from "react-helmet"
import theme from './_theme'
import styles from './_styles'
import './classicPricing.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="camp-pricing">
      <Seo title='MumaraClassic Pricing' description="Send your campaign without the fear of running out email credits, subscribe MumaraClassic ESP to get your email marketer auto deployed on cloud." />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} className='innerHeader' />
        <Container variant='full' sx={styles.heroContainer} className='campFhero'>
          <Hero content={content['hero']} />
        </Container>
        <PriceBlock01 />
        <Divider space='3' />
        <div className="classic-customers">
          <Clients content={content['companies']} />
        </div>
        <Divider space='4' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
