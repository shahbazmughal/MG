import React, {useState, useEffect} from 'react'
import { graphql, withPrefix } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Home/HeaderBlock01'
import Hero from '@solid-ui-blocks/Home/HeroBlock01'
import Hero2 from '@solid-ui-blocks/Home/HeroBlock02'
import Team from '@solid-ui-blocks/Home/HeroBlock03'
import Products from '@solid-ui-blocks/Home/CompaniesBlock01'
import Companies2 from '@solid-ui-blocks/Home/CompaniesBlock03'
import WhyChooseUs1 from '@solid-ui-blocks/Home/FeaturesBlock01'
import FeatureThreeMore from '@solid-ui-blocks/Home/FeaturesBlock07'
import FeatureThree from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock03'
import FeatureThree3 from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock033'
import BuildBrand from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock04'
import Stats from '@solid-ui-blocks/Home/StatsBlock01'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
import Testimonials from '@solid-ui-blocks/Home/TestimonialsBlock03'
import Blog2 from '@solid-ui-blocks/Home/BlogBlock02'
import Footer from '@solid-ui-blocks/Home/FooterBlock01'
import OnePricing from '@solid-ui-blocks/Home/OnePricing'
import PriceBlock01 from '@solid-ui-blocks/Home/PriceBlock01'
import PriceBlock02 from '@solid-ui-blocks/Home/PriceBlock02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import theme from './_theme'
import styles from './_styles'
import './home.css'

const HomePage = props => {
  const { allBlockContent } = props.data
    const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const [state, setState] = useState({
      loader:true,
      pnlock1: "show",
      pnlock2: "hide"
  }); 

  useEffect( ()=>{
    setTimeout(() => {
      setState({...state, loader:false, pnlock1 : "hide", pnlock2: "show"});
    }, 2000);
  });

return (
  <Layout theme={theme} {...props}>
    <Seo title='Marketing Automation & Customer Engagement Tools' description="Mumara is collection of SaaS applications and customer engagement tools to fuel your multi-channel marketing strategy." keywords="" image2="https://www.mumara.com/wp-content/uploads/2019/03/Mumara-Feature-Image.jpg" />
      {/* Blocks */}
      <span className="homepage-main">
        <Header content={content['header']} />

        <Container className="homehero-block" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} reverse />
        </Container>

        <Divider space='2' />
        <Container variant='full' sx={styles.featureThreeContainer}>
          <FeatureThreeMore content={content['feature-three-more']} />
            <Divider space='4' />
          <FeatureThree3 content={content['feature-three']} />  
          <FeatureThree content={content['feature-three2']} />  
        </Container>
        <Divider space='4' />

        <Container variant='wide' sx={styles.whyChooseUsContainer}>
          <WhyChooseUs1 content={content['why-choose-us2']} />
        </Container>
        <div className="home-one-main">
          <div className={`homeloading `+state.pnlock1}><div className="homeloader"></div></div>
          <div className={state.pnlock2}>
          <Divider space='5' />
            <FeatureThree3 content={content['oneprice']} /> 
            <Divider space='4' />
            <PriceBlock02 />
            {/* <PriceBlock01 /> */}
          </div>
        </div>
        
        <Divider space='5' />
        <Buttons content={content['buttons']} />
        <Divider space='6' />
        <Container variant='full' sx={styles.heroContainer2Main}>
          <Container variant='full' sx={styles.heroContainer2}>
            <Divider space='2' />
            <Hero2 content={content['hero2']} />
          </Container>
        </Container>
          
        <Divider space='4' />
        <Container variant='full' sx={styles.buildBrandContainer}>
          <BuildBrand content={content['build-brand']} />
        </Container>
        <Divider space='5' />
        <Stats content={content['get-started']} />
        <Divider space='5' />

        <div className='home-products'>
          <Products content={content['companies']} />
        </div>
        <Divider space='3' />

        <Divider space='5' />
        <Container className='home-testimonials' variant='wide' sx={styles.testimonialsContainer}>
          <Testimonials content={content['testimonials']} />
          <Divider space='5' color='omegaLight' />
          <Companies2 content={content['companies2']} />
        </Container>
        <Divider space='5' />
        <Blog2 content={content['latest-blogs']} />
        <Buttons content={content['buttons-blog']} />
        <Divider space='5' />

        <Team content={content['team']} />
        <Footer content={content['footer']} />
      </span>

      <Main />
      <Base />
      
  </Layout>
)
}

export const query = graphql`
  query indexBlockContent {
    allBlockContent(filter: { page: { in: ["main", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default HomePage
