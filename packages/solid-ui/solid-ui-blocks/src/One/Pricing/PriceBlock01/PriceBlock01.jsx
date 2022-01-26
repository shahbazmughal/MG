import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Helmet } from "react-helmet"


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const PriceBlock01 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-60 feature-block-01" id="mainPricing">

      
      <div className="tab-content">
        <div className="tab-pane fade active show" id="tab2">

          <div id="pricing2" className="pricing bg-white">
            <Reveal effect='fadeInDown'>
              <Box sx={{textAlign: 'center'}}>
                <ContentText content={text} />
              </Box>
            </Reveal>
          </div>

        </div>
      </div>
  </div>
)

export default WithDefaultContent(PriceBlock01)
