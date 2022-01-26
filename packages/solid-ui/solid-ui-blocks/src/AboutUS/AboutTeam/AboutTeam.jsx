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

const AboutTeam = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container className="companyteam" variant='full' sx={{ textAlign: `center`, position: `relative` }}>
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
            display: `inline-block`
          }}
          px='0'
          mb='0'
          mt='0'
        />
        <ContentText content={text?.[1]} mb='0' mt='0' mx='auto' />
        <ContentText content={text?.slice(2)} mx='auto' mb='5' />
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
        
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/arfan-e4bd9275e87df2a68c3ef62ea5b584ef.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Muhammad Arfan</h4>
                  <span>Sr Software Programmer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/shahbazmughal-dcd44c69627512b5cdeffce4a5cd402e.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Shahbaz Mughal</h4>
                  <span>Expert UI/UX</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/adnan-e0521b02d51ec4dce21ecb6e85468be7.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Adnan Rasheed</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/azeem-46b88b77fdeabd0a004057151c97f56a.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>M. Azeem</h4>
                  <span>Sr Software Programmer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/m-wakeel-e7c1b7e7d8bc0790dfbf6b0a6777c4f6.png" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Muhammad M. Wakeel</h4>
                  <span>Support Administrator</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/rehanbutt-edae889b6805102cb4923cc5d24357d8.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Rehan Butt</h4>
                  <span>Datacenter Administrator</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/asim-malick-8b453952af62859f655cf55d8e9dd935.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Asim Malik</h4>
                  <span>Accounts Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src="/static/maida-shahid-c9ff4f2f78ebcdda06ed4960c0220ffa.png" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Maida Shahid</h4>
                  <span>Head of Sales</span>
                </div>
              </div>
            </div>

          </div>
        </div>
          
      </Reveal>
    </Flex>
  </Container>
)

export default WithDefaultContent(AboutTeam)
