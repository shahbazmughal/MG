import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock01 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-60 feature-block-01 campaigns-feature" id="features">
      <div className="container">

        <Reveal effect='fadeInUp' duration={0.7}>
          <h2 className=" text-42 h1g text-center mb-20">“ SO YOU ARE IN SAFE HANDS ”</h2>
        </Reveal>
        <Reveal effect='fadeInUp' duration={0.9}>
          <p className="text-left text-26 text-center">Enhanced Deliverability, Increased Open Rate, High CTR, Advanced Realtime Reporting, and a lot more features, available to you starting from FREE.</p>
        </Reveal>
        <Reveal effect='fadeInUp' duration={1.1}>
          <h2 className="sub-title text-center text-32 text-blue mb-30">Key Features to Look At:</h2>
        </Reveal>

        <div className="row">
          <div className="col-md-6">
            <div className="ctaperson mb-20 pb-76">
                <div className="ctaboxalign">
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Custom Fields</b> of all Types </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Assign Custom Fields</b> to the Contact Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>List/Tree View</b> of the Contact Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import Your Contacts</b> From a CSV File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export Your Contacts</b> to a CSV File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Make Parts</b> of the Contact List by <b>Splitting it</b>, based on Number of Contacts or Number of Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Merge</b> a Contact List into <b>Another</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Arrange</b> Contact Lists into <b>Groups</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Custom Audiences</b> based on Contact Fields and Statistics <b>(Segmentation)</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Block the <b>problematic recipients/domains</b> From Receiving Further Emails by <b>Suppressing</b> Them </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Bulk Update</b> Your Contacts According to Your Needs </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Fastest</b> Import Mechanism with <b>Rocket Import</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Skip/Overwrite/Update Duplicate Contacts</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flexible <b>Custom Fields Mapping</b> During Import </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Massive <b>Sorting Options</b> for Data View </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Double Optin</b> Functionality available to <b>Confirm Subscriptions</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Drip Campaigns</b> to Send <b>Auto-followup Emails</b> to Your Contacts </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Run <b>Split Tests</b> to Find the <b>Best Converting</b> of Your Broadcast or Contact List </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>A/B Testing</b> of Your Broadcasts, Contact Lists and Sending Nodes </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Build <b>Unlimited Variations</b> of Your Content by <b>Spinning the Content</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send Personalized Content-Blocks based on Specific Criteria Using <b>Dynamic Content Tags</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>If/else Conditions</b> for the Content Areas Based on Custom Field Values </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Schedule</b> as many <b>Broadcasts</b> as Your Like </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Post Scheduling</b> of the Future Broadcasts </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Pause/resume</b> Scheduled Broadcasts </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Set <b>Hourly Sending Rate</b> of the Campaigns </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Daily/Monthly/Overall</b> Sending Quotas/limits </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multi-MTA</b> Support (Rotate Sending Nodes / SMTP) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multi-Broadcasts</b> Support (Rotate Broadcasts) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Schedule</b> Broadcast to your <b>Custom Audiences</b> (Segments) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Batches and Loop</b> Sending Methodology </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Choice of Random or Sequential <b>Sending Node Selection</b> for Rotation </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Track Opening</b> of the HTML Emails </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Track the Links</b> that are Being <b>Clicked</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Skip Duplicates</b> when Scheduling to <b>Multiple Contact Lists</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>List-Unsubscribe Header</b> Implementation for Optimized Sending </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flexibility to <b>Fetch Sender-Info</b> From <b>Contact List</b> Information and <b>Sending Node</b> Information </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Process Bounces</b> by <b>POP/IMAP</b> Method </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> A Wide Range of <b>Bounce Rules</b> to Differentiate Between <b>Soft and Hard</b> Bounces </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Skip Hard Bounced</b> Contacts while Sending Campaigns </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add or Edit <b>Bounce Rules</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Drag &amp; Drop <b>Processing Order</b> of the Bounce Rules </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Sending Domains</b> to <b>Brand</b> Your Emails </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Generate DKIM</b> Public and Private <b>Keys</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Triggers</b> to Perform <b>Actions</b> Upon the <b>Occurrence of Events</b> </p>
                  </div>
                  <div className="inner">
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> <b>Initiate a Trigger</b> when a Contact is <b>added</b> to a <b>List or Segment</b> </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Option to Set <b>Custom Delay</b> before Starting a Trigger </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Upon Meeting a <b>Criteria</b> </p>
                    </div>
                    <div className="inner2">
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> <b>Copy or Move</b> the Contact to <b>Another</b> Contact List </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Send a <b>Broadcast</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> <b>Notify Admin</b> by Sending an <b>Email</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Start a Series of <b>Drip Emails</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Change <b>Contact Status</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Change Contact Format to Receive <b>HTML or TEXT</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Update a Custom Field Value </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Remove Contact from the Contact List </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Add the Contact to Suppression List </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Sign <b>Outgoing Emails</b> with a <b>Digital Signature</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Enable <b>Custom Tracking Domains</b> to Brand the <b>Hyperlinks</b> and <b>Image Source URLs</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Intellectual Pattern</b> of Tracking Domain Selection </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Sending Node</b> to Connect with an <b>ESP Account</b> or an <b>SMTP</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Process <b>Delivery Reports</b> from <b>Callbacks</b> </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-6">
            <div className="ctaperson step2">
                <div className="ctaboxalign">
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Beautiful and Error-free Broadcasts</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>WYSIWYG HTML Editor</b> with Massive Options </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send <b>Personalized</b> Emails by Inserting Values from <b>Recipient’s Fields</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Embed <b>System Variables</b> in Your Broadcasts e.g. today’s date, subscriber-id, recipient-id, etc </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Keep Your <b>Reputation High</b> by Allowing Recipients to <b>Unsubscribe Automatically</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Embed <b>Web-version</b> Link of Your Broadcast to View in Browser </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send both <b>HTML and TEXT</b> Content </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Check <b>Spam Score</b> Before You Send </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Preview Your Broadcast</b> for all Mail Clients </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Drag &amp; Drop <b>Email Newsletter Builder</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import</b> Your Broadcast <b>From a URL</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Fully Responsive</b> Emails (resizes automatically according to the recipient’s screen size) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Integrated <b>Email Server Providers</b> </p>
                  </div>
                  <div className="inner">
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Sendgrid </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Mailgun </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Amazon SES </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Sparkpost </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Elastic Email </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Mailjet </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> SMTP2GO </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> PostMark </p>
                    </div>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Quickly Setup the <b>PowerMTA Server</b> with PMTA Addon and Let Mumara Generates </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Sending Nodes, DNS Keys, Bounce Handlers, PMTA Config</b> and Everything Else Itself </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Process <b>Delivery Status Notifications</b> from PowerMTA <b>Accounting Files</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import SMTPs</b> from a File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Auto <b>Activate/Deactivate SMTPs</b> based on Connectivity </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export SMTPs</b> to a File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Single and Double Optin Webforms</b> for Your Website or Application with Advanced Functionality </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flag the Contacts Producing <b>Spam Complaints</b> and Suppress Them by Processing <b>Feedback Loops</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Staff Users (Admins)</b> and Assign Them <b>Desired Privileges</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multithreading</b> to Multiply the Email Sending Speed </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced <b>User Management</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>User Roles</b> and Assign Desired <b>Privileges</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Extensive <b>Access Control List (ACL)</b> for Users and Staff/Admin Roles </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Monitor User’s Assets</b> (data) from admin account </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>HTTP/HTTPS</b> Protocols Switch </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> SMTP <b>Persistent Connection</b> (Send Your Desired Number of Emails Per Connection) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Keep the <b>Database Optimized</b> by <b>Auto-deletion</b> of Logs After X Number of Days </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Additional Header/Footer</b> to Every Email Going Out </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to Select Desired <b>Domain Key Bit Size</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Automatic Pause/resume</b> of running Campaigns Upon Connection Failure with the Sending Node </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Detect and Ignore <b>Duplicate Opening</b> of Emails by <b>Bots</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Several Levels of <b>Debug Log Reporting</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Display/Hide <b>Remember Me</b> Option </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Logout Idle Users</b> Automatically </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Flexible Cron Timers</b> Yourself for Different Jobs </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Custom Headers Globally</b> to Every Email going Out </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Custom Headers</b> with Specific <b>Sending Nodes</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>API Roles</b> and Attach <b>Desired Permissions</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Generate <b>API Tokens</b> and <b>Assign Roles</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Brand the Application</b> with Your <b>Own Logo, Title, Copyright Statement, and Images</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Overwrite the <b>Design</b> with Your Own <b>Custom CSS</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Hide Your Main Domain</b> by Using a <b>Different Primary Domain</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Level <b>Graphical Statistics</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Realtime Reporting</b> of <b>Delivery Statuses</b> and <b>Engagements</b> (e.g. Opened, Clicked, Unsubscribed) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Geolocation Analytics</b> and Individual <b>Tracking</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>A/B Testing</b> of Your Statistics Ingredients </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Search Functionality</b> in your Campaign Stats </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export Options</b> for your Statistics </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Trigger Statistics</b> along with Number of <b>Actions</b> Performed </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Detailed &amp; Explanatory <b>Debug Logs</b> View </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> View Complete <b>Activity Log</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Keep Track</b> of the People <b>Accessing</b> the Application </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> ESP <b>Callback Logs</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Very User-Friendly <b>Update Process</b> (Need a Few Mouse Clicks) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Restoration Points</b> to Keep the <b>Backups</b> of the Application and Database </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Two Factor</b> Authentication (Addon) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> In-app <b>Bug Reporting</b> System </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Restful API along with Massive Documentation </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Inline <b>Help Tooltips</b> and <b>Help Buttons</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Enhanced &amp; Complete <b>Knowledgebase</b> of Mumara </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Premium <b>Support &amp; Helpdesk</b> </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <Reveal effect='fadeInUp' duration={1.1}>
            <div className="work-yourself text-center text-40 w100">LET ME TELL YOU <br />This is not the <span style={{color: "#3078f4"}}><strong>complete features</strong></span> list but a key features list. You’ll <strong>experience it yourself</strong> when you have it for yourself!</div>
          </Reveal>
        </div>

      </div>
  </div>
)

export default WithDefaultContent(FeatureBlock01)
