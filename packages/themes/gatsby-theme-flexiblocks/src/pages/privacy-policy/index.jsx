import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Privacy/HeaderBlock01'
import Footer from '@solid-ui-blocks/Privacy/FooterBlock01'
import Features from '@solid-ui-blocks/Privacy/Block06'
import Team from '@solid-ui-blocks/Privacy/Block03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'
import theme from './_theme'
import './about-us.css'

const Privacy = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Privacy Policy' />
      {/* Blocks */}
      <div className="privacy-page-main" >
        <Header content={content['header']} />
        <Team content={content['team']} />
        <Container className="privacy-us-page" variant='full' sx={styles.heroContainer}>
          <div className="box-container">
            <Features content={content['cl_features']} />
            <ul className="privacy-list">
              <li>Non personal data</li>
              <li>IP addresses</li>
              <li>Browser Information</li>
              <li>Location</li>
            </ul>
            <Features content={content['cl_features2']} />
          </div>
          <Divider space='5' />
        </Container>
        <Footer content={content['footer']} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query privacyBlockContent {
    allBlockContent(
      filter: { page: { in: ["privacy-policy", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Privacy
