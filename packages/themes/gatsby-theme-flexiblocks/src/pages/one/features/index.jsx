import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/One/Features/HeaderBlock01'
import Footer from '@solid-ui-blocks/One/Features/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/Features/OneSeo'
import Hero from '@solid-ui-blocks/One/Features/HeroBlock02'
import Services from '@solid-ui-blocks/One/Features/FeaturesBlock05'
import FeatureLeft from '@solid-ui-blocks/One/Features/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/One/Features/FeatureRight'
import FeatureMain from '@solid-ui-blocks/One/Features/FeatureMain'
import theme from './_theme'
import styles from './_styles'
import './onefeature.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-feature">
      <Seo title='Features | One' description="" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="one-features-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>

        <div className="one-features-main bg-white section">
          <FeatureLeft content={content['features1']} />
          <FeatureRight content={content['features2']} />
          <FeatureLeft content={content['features3']} />
          <FeatureRight content={content['features4']} />
        </div>
        

        <div className='oneservice1 bg-light section image-left'>
          <FeatureRight content={content['features5']} />
          <FeatureMain content={content['featuremain1']} />
        </div>

        <div className='oneservice2 bg-white section'>
          <Services content={content['services1']} />
          <FeatureMain content={content['featuremain2']} />
          <FeatureMain content={content['featuremain3']} />
        </div>

        <div className='oneservice3 bg-light section image-right'>
          <FeatureLeft content={content['features6']} />
          <FeatureMain content={content['featuremain4']} />
        </div>

        <div className='oneservice2 bg-white section'>
          <Services content={content['services2']} />
          <FeatureMain content={content['featuremain5']} />
        </div>

        <div className='oneservice2 bg-light section'>
          <Services content={content['services3']} />
          <FeatureMain content={content['featuremain6']} />
          <FeatureMain content={content['featuremain7']} />
        </div>

        <div className='oneservice2 bg-white section'>
          <Services content={content['services4']} />
          <FeatureMain content={content['featuremain8']} />
        </div>

        <div className='oneservice2 bg-light section ecommerce'>
          <Services content={content['services5']} />
          <FeatureMain content={content['featuremain9']} />
          <FeatureMain content={content['featuremain10']} />
          <FeatureMain content={content['featuremain11']} />
        </div>

        <div className='oneservice3 bg-light section image-right'>
          <FeatureLeft content={content['features7']} />
          <FeatureMain content={content['featuremain12']} />
        </div>
        

        
        
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <OneSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query oneFeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
