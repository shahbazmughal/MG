import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock19 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 bg-white smtp" id="features19">
    <div className="container">
      
      <h2 className=" text-42 h1g text-center mb-40">Integrated With Majority Of Globally Accepted Email Relay Services</h2>
      <div className="row pb-100">
        <div className="col-md-12 text-center">
          <img src="/static/smtp-35e3b2e91da3c5f82c2cd60abc00dc35.jpg" className="img-responsive" />
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock19)
