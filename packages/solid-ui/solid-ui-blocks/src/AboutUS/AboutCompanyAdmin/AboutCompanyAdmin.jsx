import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './admin_team.css';

const styles = {
  subTitle: {
    maxWidth: 500
  },
  content: {
    flexDirection: `column`,
    size: `full`,
    alignItems: `center`,
    justifyContent: `center`,
    py: 0
  },
  overlay: {
    size: `full`,
    bg: `omegaDarker`,
    opacity: 0.75,
    position: `absolute`,
    top: 0,
    zIndex: -1
  },
  image: {
    height:`full`,
    position: `absolute`,
    top: 0,
    zIndex: -2
  }
}

const AboutCompanyAdmin = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container className="companyadmin" variant='full' sx={{ textAlign: `center`, position: `relative` }}>
    <Flex
      sx={{
        ...styles.content,
        minHeight: images?.[0]?.src
          ? getImage(images[0].src)?.height
          : undefined
      }}
    >
      <Reveal effect='fadeInDown'>
        <ContentText
          content={text?.[0]}
          sx={{
            bg: `alphaDark`,
            display: `inline-block`
          }}
          px='2'
          mb='2'
          mt='3'
        />
        <ContentText content={text?.[1]} mb='5' mt='0' mx='auto' />
        <ContentText content={text?.slice(2)} mx='auto' />
      </Reveal>
    </Flex>
    <Flex
      sx={{
        ...styles.content
      }}
    >
      <Reveal effect='fadeInDown'>
        
        <div className="container ">
          <div className="row gy-4">
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/shafaat-01fb85c5ac5a85c72fad3d57d9b87538.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Shafaat Ahmad</h4>
                  <span>Chief Operation Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/wasif-344f3094ff9e31f531ebfd6683874b9e.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Wasif Ahmad</h4>
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/umer-5cc6bde6adb189d9b735f0123976e624.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Muhammad Umer Ali</h4>
                  <span>Brand Ambassador</span>
                </div>
              </div>
            </div>

          </div>
        </div>
          
      </Reveal>
    </Flex>
  </Container>
)

export default WithDefaultContent(AboutCompanyAdmin)
