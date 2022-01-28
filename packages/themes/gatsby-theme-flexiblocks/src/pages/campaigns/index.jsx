import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Campaigns/HeaderBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Hero from '@solid-ui-blocks/Campaigns/HeroBlock02'
import Companies from '@solid-ui-blocks/Campaigns/CompaniesBlock01'
import Services from '@solid-ui-blocks/Campaigns/FeaturesBlock05'
import Services2 from '@solid-ui-blocks/Campaigns/FeaturesBlock06'
import FeatureOne from '@solid-ui-blocks/Campaigns/FeaturesWithPhotoBlock01'
import WhyChooseUs2 from '@solid-ui-blocks/Campaigns/FeaturesBlock04'
import FeatureTwo from '@solid-ui-blocks/Campaigns/FeaturesWithPhotoBlock02'
import Footer from '@solid-ui-blocks/Campaigns/FooterBlock01'
import Team from '@solid-ui-blocks/Campaigns/HeroBlock03'
import GetStarted from '@solid-ui-blocks/Campaigns/StatsBlock02'
import FeatureLeft from '@solid-ui-blocks/Campaigns/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/Campaigns/FeatureRight'
import FeatureThree from '@solid-ui-blocks/Campaigns/FeaturesBlock07'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import CampaignsSeo from '@solid-ui-blocks/Campaigns/CampaignsSeo'
import theme from './_theme'
import styles from './_styles'
import './campaigns-main.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <Seo title='Email Marketing & Automation | Mumara Campaigns' description="Intelligently crafted features to ensure higher level of email engagement, Mumara Campaigns is available as Cloud and Self-Hosted platform." />
      {/* Blocks */}
      <div className="campaignplus-page">
        <Header content={content['header']} />
        <Container variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
        </Container>
        <Divider space='3' />
        <Companies content={content['companies']} />
        <Divider space='5' />
        <Divider space='5' />
        <div className="camp-feature0">
          <GetStarted content={content['get-started']} />
        </div>

        <Divider space='5' />
        <div className='campservice1'>
          <Services content={content['services']} />
        </div>
        <FeatureLeft content={content['features1']} />
        <FeatureRight content={content['features2']} />
        <FeatureLeft content={content['features3']} />
        <FeatureRight content={content['features4']} />

        <Divider space='5' />
        <div className='campservice2'>
          <Services content={content['services2']} />
        </div>
        <FeatureLeft content={content['features5']} />
        <FeatureRight content={content['features6']} />
        <FeatureLeft content={content['features7']} />
        <FeatureRight content={content['features8']} />

        <Divider space='5' />
        <WhyChooseUs2 content={content['why-choose-us2']} />

        <Divider space='5' />
        <div className='campservice3'>
          <Services content={content['services3']} />
        </div>
        <FeatureLeft content={content['features9']} />
        <FeatureRight content={content['features10']} />
        <FeatureLeft content={content['features11']} />
        <FeatureRight content={content['features12']} />

        <Divider space='5' />
        <div className='campservice4'>
          <Services2 content={content['services4']} />
        </div>
        <FeatureLeft content={content['features13']} />
        <FeatureRight content={content['features14']} />
        <FeatureLeft content={content['features15']} />
        <Divider space='3' />
        <FeatureRight content={content['features16']} />
        <Divider space='4' />
        <FeatureLeft content={content['features17']} />

        <Divider space='5' />
        <div className='campservice5'>
          <Services content={content['services5']} />
        </div>
        <Divider space='4' />
        <FeatureRight content={content['features18']} />
        <Divider space='4' />
        <FeatureLeft content={content['features19']} />
        <Divider space='3' />
        <FeatureRight content={content['features20']} />

        <Divider space='5' />
        <div className='campservice6'>
          <WhyChooseUs2 content={content['whychooseus3']} />
        </div>

        <Divider space='5' />
        <div className='campservice7'>
          <Services content={content['services6']} />
        </div>
        <FeatureThree content={content['features21']} />
        <FeatureThree content={content['features22']} />
        <FeatureThree content={content['features23']} />


        <Divider space='5' />
        <Container className='campservice8' variant='wide' sx={styles.featuresContainer}>
          <Services content={content['services7']} />
          <Divider space='3' />
          <FeatureLeft content={content['features24']} />
          <FeatureRight content={content['features25']} />
        </Container>
        <Divider space='5' />

        <div className='campservice9'>
          <Services content={content['services8']} />
          <Divider space='3' />
          <FeatureLeft content={content['features26']} />
          <FeatureRight content={content['features27']} />
          <FeatureLeft content={content['features28']} />
        </div>



        <Divider space='5' />
        <Divider space='5' />
        <FeatureOne content={content['feature-one']} />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTwo content={content['feature-two']} />
        <Divider space='6' />
        {/*<Divider space='6' />
         <Container variant='full' sx={styles.strategiesContainer}>
          <Divider space={-6} />
          <Strategies content={content['strategies']} />
        </Container> 
        <Divider space='5' />
        <Container variant='wide' sx={styles.whyChooseUsContainer}>
          <WhyChooseUs content={content['why-choose-us']} />
        </Container> 
        <Divider space='5' />*/}
        <Team content={content['team']} />
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <CampaignsSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campaignsBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
