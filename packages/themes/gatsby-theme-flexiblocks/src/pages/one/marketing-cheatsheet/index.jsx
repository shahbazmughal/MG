import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/One/MarketingCheatsheet/HeaderBlock01'
import Footer from '@solid-ui-blocks/One/MarketingCheatsheet/FooterBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/MarketingCheatsheet/OneSeo'
import Services from '@solid-ui-blocks/One/MarketingCheatsheet/FeaturesBlock05'
import theme from './_theme'
import styles from './_styles'
import './onecheatsheet.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-marketing-cheatsheet">
      <Seo title='Features | One | Mumara' description="" />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Header content={content['header']} />
        <Divider space='5' />
        <Divider space='4' />
        <Container className="one-marketing-cheatsheet-heroblock" variant='full' sx={styles.heroContainer}>
          <Services content={content['services1']} />
          <Divider space='5' />
        </Container>

        <Footer content={content['footer']} />
        <Main />
        <Base />
        <OneSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query oneMarketingCheatsheetBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/marketing-cheatsheet", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
