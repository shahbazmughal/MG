import React from 'react';
import { Helmet } from "react-helmet"
import {Link} from 'gatsby';

function index(props) {
    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "http://schema.org/", 
                        "@type": "BreadcrumbList", 
                        "itemListElement": [
                            { 
                            "@type": "ListItem", 
                            "position": "1", 
                            "item": { 
                                "@id": "https://www.mumara.com", 
                                "name": "Mumara",
                                "image": "https://www.mumara.com/assets/img/logo-dark.png" 
                            } 
                            },{ 
                            "@type": "ListItem", 
                            "position": "2", 
                            "item": { 
                                "@id": "https://www.mumara.com/campaigns/", 
                                "name": "Campaigns+"
                            } 
                            }
                        ]
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "http://schema.org/",
                        "@type": "Product",
                        "name": "Campaign+",
                        "sku": "0446310786",
                        "mpn": "925872",
                        "image": [
                            "https://www.mumara.com/assets/img/logo-dark.png"
                        ],
                        "description": "Intelligently crafted features to ensure higher level of email engagement, CampaignsPlus centrally hosted SaaS edition of MumaraEmail.",
                        "brand": {
                            "@type": "Thing",
                            "name": "Mumara"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4.7",
                            "bestRating": "5"
                            },
                            "author": {
                            "@type": "Person",
                            "name": "Campaigns"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5.0",
                            "reviewCount": "1247"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://www.mumara.com/campaigns/",
                            "priceCurrency": "USD",
                            "price": "47",
                            "priceValidUntil": "2020-11-20",
                            "itemCondition": "https://schema.org/UsedCondition",
                            "availability": "https://schema.org/InStock",
                            "seller": {
                            "@type": "Organization",
                            "name": "Hostings House"
                            }
                        }
                        }
                    `}
                </script>
            </Helmet>
            <div className="seo-block" style={{display: "none"}}>
                <ol itemScope itemType="http://schema.org/BreadcrumbList" style={{display: 'none'}}>
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                    <Link itemScope itemType="http://schema.org/Thing"
                        itemProp="item" to="https://www.mumara.com" id="https://www.mumara.com">
                        <span itemProp="name">Mumara</span>
                        <img itemProp="image" src="https://www.mumara.com/assets/img/logo-dark.png" alt="Mumara"/></Link>
                    <meta itemProp="position" content="1" />
                    </li>
                    ›
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                    <Link itemScope itemType="http://schema.org/Thing"
                        itemProp="item" to="https://www.mumara.com/campaigns/" id="https://www.mumara.com/campaigns/">
                        <span itemProp="name">Campaigns+</span>
                        <img itemProp="image" src="https://www.mumara.com/assets/img/logo-dark.png" alt="Campaigns+ | Mumara"/></Link>
                    <meta itemProp="position" content="2" />
                    </li>
                </ol>
                <div className="schemaproduct" itemScope itemType="http://schema.org/Product" style={{display: 'none'}}>
                    <meta itemProp="mpn" content="925872" />
                    <span itemProp="brand">Mumara</span>
                    <span itemProp="name">Campaign+</span>
                    <img itemProp="image" src="https://www.mumara.com/assets/img/logo-dark.png" alt="Campaign+" />
                    <span itemProp="description">Intelligently crafted features to ensure higher level of email engagement, CampaignsPlus centrally hosted SaaS edition of MumaraEmail.
                    </span>
                    Product #: <span itemProp="mpn">1</span>
                    <span itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                    <span itemProp="ratingValue">5.0</span> stars, based on <span itemProp="reviewCount">1247
                        </span> reviews
                    </span>
                    <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <span itemProp="seller" itemScope itemType="http://schema.org/Organization">
                        <span itemProp="name">Hostings House</span>
                    </span>
                    <link itemProp="url" href="https://www.mumara.com/campaigns/" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="itemCondition" content="https://schema.org/UsedCondition" />
                    <meta itemProp="price" content="47" />
                    <meta itemProp="priceValidUntil" content="2021-11-20" />
                    </span>
                    <meta itemProp="sku" content="0446310786" />
                    <div itemProp="review" itemType="http://schema.org/Review" itemScope>
                        <div itemProp="author" itemType="http://schema.org/Person" itemScope>
                            <meta itemProp="name" content="Wasif Ahmed" />
                        </div>
                        <div itemProp="reviewRating" itemType="http://schema.org/Rating" itemScope>
                            <meta itemProp="ratingValue" content="5.0" />
                            <meta itemProp="bestRating" content="5" />
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default index;