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
import Services from '@solid-ui-blocks/Classic/FeaturesBlock05'
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import ContentImages from '@solid-ui-components/ContentImages'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const styled = {
  image: {
    margin:`-50px auto 0px`,
    display: `table`
  }, 
  image2: {
    margin:`0px auto 0px`,
    display: `table`
  }
}

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main classic">
      <Seo title='Email Content Spinner | Spin Tag | MumaraClassic' description="Add variations in the content to make it relevant and somewhat unique for the contacts in the list, keeping bulk sending and content filters prospective in mind." keywords="email content spinning,content spinner,spin tags,spin email content,content spinning tool,bypass spam filters,bypass web filter" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="innerpage-heroblock" variant='full'>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div className="innerpage-section bg-white pt-0 pb-0">
          <ContentImages
            content={content['images']}
            sx={styled.image}
            imageEffect='fadeIn'
          />
        </div>
        <div className="innerpage-section bg-white">
          <Services content={content['services']} />
        </div>
        <div className="innerpage-section bg-light">
          <ContentImages
            content={content['images2']}
            sx={styled.image2}
            imageEffect='fadeIn'
          />
        </div>
        <div className="innerpage-section bg-white">
        <Services content={content['services2']} />
        </div>
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicFeaturesPage4BlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/features/spin-tag", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
