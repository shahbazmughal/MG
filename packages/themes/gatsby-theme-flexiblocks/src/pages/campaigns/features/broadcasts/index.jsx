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

const campFeaturesBroadcasts = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Easy Contact Management | Import Contacts' description="Store contact details keep it safe and updated within the contact lists, use stable import function to import sizeable amount of contacts with ease." keywords="contact management system,custom contacts,contact details for email,update contact details,import contacts" />
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
          <div className="innerpage-section bg-light pt-0 pb-0">
            <ContentImages
              content={content['images']}
              sx={styled.image}
              imageEffect='fadeIn'
            />
            <Divider space='4' />
          </div>
        </Container>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div id="editor" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div id="schedule" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <div className="innerpage-section bg-white img-left">
          <Services content={content['featuresmore']} />
        </div>
        
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campFeaturesBroadcastsBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/broadcasts", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesBroadcasts
