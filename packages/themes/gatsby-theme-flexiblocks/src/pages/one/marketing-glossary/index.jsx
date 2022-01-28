import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/One/MarketingGlossary/HeaderBlock01'
import Footer from '@solid-ui-blocks/One/MarketingGlossary/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/MarketingGlossary/OneSeo'
import Hero from '@solid-ui-blocks/One/MarketingGlossary/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/One/MarketingGlossary/FeatureLeft'
import theme from './_theme'
import styles from './_styles'
import './oneglossary.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-glossary">
        <Seo title='Marketing glossary for beginners | One' description="During the start of any marketing strategy, devise two or more ways to communicate your message. You can choose different tones or languages to talk to your audience." keywords="marketing glossary,marketing book,marketing guide,mumara marketing,email marketing software,email marketing automation" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="one-glossary-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>

        <div className="one-glossary-main">
          <div className="glossary1 glossary">
            <FeatureLeft content={content['features1']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary2 glossary">
            <FeatureLeft content={content['features2']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary3 glossary">
            <FeatureLeft content={content['features3']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary4 glossary">
            <FeatureLeft content={content['features4']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary5 glossary">
            <FeatureLeft content={content['features5']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary6 glossary">
            <FeatureLeft content={content['features6']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary7 glossary">
            <FeatureLeft content={content['features7']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary8 glossary">
            <FeatureLeft content={content['features8']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary9 glossary">
            <FeatureLeft content={content['features9']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary10 glossary">
            <FeatureLeft content={content['features10']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary11 glossary">
            <FeatureLeft content={content['features11']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary12 glossary">
            <FeatureLeft content={content['features12']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary13 glossary">
            <FeatureLeft content={content['features13']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary14 glossary">
            <FeatureLeft content={content['features14']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary15 glossary">
            <FeatureLeft content={content['features15']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary16 glossary">
            <FeatureLeft content={content['features16']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary17 glossary">
            <FeatureLeft content={content['features17']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary18 glossary">
            <FeatureLeft content={content['features18']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary19 glossary">
            <FeatureLeft content={content['features19']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary20 glossary">
            <FeatureLeft content={content['features20']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary21 glossary">
            <FeatureLeft content={content['features21']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary22 glossary">
            <FeatureLeft content={content['features22']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary23 glossary">
            <FeatureLeft content={content['features23']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary24 glossary">
            <FeatureLeft content={content['features24']} />
          </div>
        </div>
        
        <div className="one-glossary-main">
          <div className="glossary25 glossary">
            <FeatureLeft content={content['features25']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary26 glossary">
            <FeatureLeft content={content['features26']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary27 glossary">
            <FeatureLeft content={content['features27']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary28 glossary">
            <FeatureLeft content={content['features28']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary29 glossary">
            <FeatureLeft content={content['features29']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary30 glossary">
            <FeatureLeft content={content['features30']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary31 glossary">
            <FeatureLeft content={content['features31']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary32 glossary">
            <FeatureLeft content={content['features32']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary33 glossary">
            <FeatureLeft content={content['features33']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary34 glossary">
            <FeatureLeft content={content['features34']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary35 glossary">
            <FeatureLeft content={content['features35']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary36 glossary">
            <FeatureLeft content={content['features36']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary37 glossary">
            <FeatureLeft content={content['features37']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary38 glossary">
            <FeatureLeft content={content['features38']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary39 glossary">
            <FeatureLeft content={content['features39']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary40 glossary">
            <FeatureLeft content={content['features40']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary41 glossary">
            <FeatureLeft content={content['features41']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary42 glossary">
            <FeatureLeft content={content['features42']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary43 glossary">
            <FeatureLeft content={content['features43']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary44 glossary">
            <FeatureLeft content={content['features44']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary45 glossary">
            <FeatureLeft content={content['features45']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary46 glossary">
            <FeatureLeft content={content['features46']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary47 glossary">
            <FeatureLeft content={content['features47']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary48 glossary">
            <FeatureLeft content={content['features48']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary49 glossary">
            <FeatureLeft content={content['features49']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary50 glossary">
            <FeatureLeft content={content['features50']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary51 glossary">
            <FeatureLeft content={content['features51']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary52 glossary">
            <FeatureLeft content={content['features52']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary53 glossary">
            <FeatureLeft content={content['features53']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary54 glossary">
            <FeatureLeft content={content['features54']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary55 glossary">
            <FeatureLeft content={content['features55']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary56 glossary">
            <FeatureLeft content={content['features56']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary57 glossary">
            <FeatureLeft content={content['features57']} />
          </div>
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
  query oneGlossaryBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/marketing-glossary", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
