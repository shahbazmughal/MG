import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Container, Flex, Box, css, Input, Button } from 'theme-ui'
import {Link} from 'gatsby';


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock04 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 features4" id="features4">
    <div className="container">
      
      <h2 className=" text-40 text-yellow text-center pt-40">Why pay GRANDS when it’s the Matter of a Few Bucks</h2>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="cta-box text-center pb-0 pt-40">
            
            <h4 className="text-center text-black br-10a p-10a text-18 bg-yellow  best-deal">Best Deal</h4>
            <h2 className="text-18 monts text-light h1g mb-10">Starting from <b>FREE</b> to a Fully-Featured </h2>
            <p className="text-20 text-italic text-green  cross">$47/mo</p>
            <hr />
            <p className="latolight h1g text-center mb-0" style={{fontSize:"20px", fontWeight: 300, color:'white'}}>Just</p>
            <h1 className="h1g  mb-0 text-75 mt-0 w500">$7<span style={{fontSize:"24px"}}>/mo</span></h1>
            <h3 className="h1g  mb-30 text-280 mt-0 edition">edition</h3>
            <p style={{margin:"0 20px 20px 20px"}} className="text-18">you get your own very perfect email marketing automation platform that works all the time, from capturing leads to <span className=" text-green">converting into sales.</span>
            </p>

            <div className="pb-0">
              <div className="css-12g6cok">
                <Link to="./#orderarea" className="button-group-button level-1 css-12g6cok css-12hibeq">
                  Get Started with Mumara Campaigns
                </Link>
              </div>
              <div className="p-20">
                <img src="/static/cc-cta-c64d4edc2508cb948022d099e3a8b623.png" className="img-responsive" alt="Credit Card Payment" />
              </div>
            </div>  


          </div>
        </div>
      </div>
    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock04)
