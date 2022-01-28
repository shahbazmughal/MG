import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/AboutUs/HeaderBlock01'
import Footer from '@solid-ui-blocks/AboutUs/FooterBlock01'
import Features from '@solid-ui-blocks/AboutUs/Block06'
import CompanyAdmin from '@solid-ui-blocks/AboutUs/AboutCompanyAdmin'
import AboutTeam from '@solid-ui-blocks/AboutUs/AboutTeam'
import AboutMission from '@solid-ui-blocks/AboutUs/AboutMission'
import Team from '@solid-ui-blocks/AboutUs/Block03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Stats from '@solid-ui-blocks/Stats/Block01'
import styles from './_styles'
import theme from './_theme'
import './about-us.css'

const Aboutus = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout className="aboutus-page-main" theme={theme} {...props}>
      <Seo title='About us | Mumara' />
      {/* Blocks */}
        <Header content={content['header']} />
        <Team content={content['team']} />
        <Container className="avout-us-page" variant='full' sx={styles.heroContainer}>
          <Features content={content['cl_features']} />
          <Divider space='5' />
          <Divider space='5' />
        </Container>
        <Container variant='narrow'>
            <Stats content={content['stats']} />
            <Divider space='5' />
        </Container>
        <Divider space='5' />
        <Container variant='full' sx={styles.heroContainer2}>
          <CompanyAdmin content={content['company_admin']} />
          <AboutTeam content={content['company_team']} />
          <AboutMission content={content['mission']} />
        </Container> 
        <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query aboutUsBlockContent {
    allBlockContent(
      filter: { page: { in: ["aboutus", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Aboutus
