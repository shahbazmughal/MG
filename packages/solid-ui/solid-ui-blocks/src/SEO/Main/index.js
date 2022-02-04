import React from 'react';
import { Helmet } from "react-helmet"

function index(props) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "NYC NY",
                        "postalCode": "10017",
                        "streetAddress": "708 3rd Ave"
                      },
                    "email": "sales(at)mumara.com",
                    "member": [
                        {
                          "@type": "Organization"
                        },
                        {
                          "@type": "Organization"
                        }
                    ],
                    "alumni": [
                        {
                          "@type": "Person",
                          "name": "Wasif Ahmed"
                        }
                    ],
                    "name": "Mumara",
                    "telephone": "1 (844) 686 2721",
                    "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",
                    "url": "https://www.mumara.com",
                    "logo": "https://www.mumara.com/assets/img/logo-dark.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "1 (844) 686 2721",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://plus.google.com/+MumaraEmailMarketer",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }

                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context":"https://schema.org",
                    "@type":"ItemList",
                    "itemListElement":[
                        {
                        "@type":"ListItem",
                        "position":1,
                        "url":"https://www.mumara.com/campaigns/"
                        },
                        {
                        "@type":"ListItem",
                        "position":2,
                        "url":"https://www.mumara.com/one/"
                        },
                        {
                        "@type":"ListItem",
                        "position":3,
                        "url":"https://www.mumara.com/sms/"
                        },
                        {
                        "@type":"ListItem",
                        "position":4,
                        "url":"https://www.mumara.com/smsplus/"
                        },
                        {
                        "@type":"ListItem",
                        "position":5,
                        "url":"https://www.mumara.com/classic/"
                        }
                    ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Mumara",
                    "url": "https://www.mumara.com",
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://plus.google.com/+MumaraEmailMarketer",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Mumara",
                    "url": "https://www.mumara.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.mumara.com/?s={s}",
                        "query-input": "required name=s"
                    }
                    }
                `}
            </script>
            {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
            {/* <script data-ad-client="ca-pub-7570269198350551" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
            {/* <script id='sbinit' src='https://dashboard.mumara.com/js/init.js'></script> */}
            <script>
                {/* {`
                    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                    ga('create', 'UA-63566119-1', 'auto');
                    ga('send', 'pageview');
                `} */}
            </script>
            {/* <script async src='https://www.google-analytics.com/analytics.js'></script> */}
            <script>
                {/* {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '329504770823436');
                    fbq('track', 'Mumara PageView');
                `} */}
            </script>
            <noscript>
                {/* {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=329504770823436&ev=ViewContent&noscript=1" />`} */}
            </noscript>
        </Helmet>
    );
}

export default index;