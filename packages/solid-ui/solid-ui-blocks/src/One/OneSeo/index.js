import React from 'react';
import { Helmet } from "react-helmet"

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
                                "@id": "https://www.mumara.com/one/", 
                                "name": "Mumara ONE"
                            } 
                            }
                        ]
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Mumara ONE",
                        "image": [
                            "https://www.mumara.com/assets/img/logo-dark.png"
                        ],
                        "description": "Mumara ONE is a simplified intelligent marketing automation tool.",
                        "sku": "0786",
                        "mpn": "974717",
                        "brand": {
                            "@type": "Brand",
                            "name": "ONE"
                        },
                        "review": {
                            "@type": "Review",
                            "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5"
                            },
                            "author": {
                            "@type": "Person",
                            "name": "Wasif Ahmed"
                            }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5",
                            "reviewCount": "254"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://www.mumara.com/one",
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
                 <ol itemScope itemType="http://schema.org/BreadcrumbList" style={{display: "none"}}>
                    ›
                    <li itemProp="itemListElement" itemScope
                        itemType="http://schema.org/ListItem">
                        <a itemScope itemType="http://schema.org/Brand"
                        itemProp="item" href="https://www.mumara.com/one/">
                        <span itemProp="name">Mumara ONE</span>
                        <img itemProp="image" src="https://www.mumara.com/assets/img/logo-dark.png" alt="Mumara ONE | Mumara"/></a>
                        <meta itemProp="position" content="1" />
                    </li>
                </ol>
                <div className="schemaproduct" itemScope itemType="http://schema.org/Product" style={{display: "none"}}>
                    <meta itemProp="mpn" content="921122" />
                    <span itemProp="brand">Mumara</span>
                    <span itemProp="name">Campaign+</span>
                    <img itemProp="image" src="https://www.mumara.com/assets/img/logo-dark.png" alt="Mumara ONE" />
                    <span itemProp="description">Mumara ONE is a simplified intelligent marketing automation tool.
                    </span>
                    Product #: <span itemProp="mpn">1</span>
                    <span itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                        <span itemProp="ratingValue">5.0</span> stars, based on <span itemProp="reviewCount">254
                        </span> reviews
                    </span>
                    <meta itemProp="sku" content="0407860786" />
                    <span itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <span itemProp="seller" itemScope itemType="http://schema.org/Organization">
                        <span itemProp="name">Hostings House</span>
                        </span>
                        <link itemProp="url" href="https://www.mumara.com/one/" />
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        <meta itemProp="priceCurrency" content="USD" />
                        <meta itemProp="itemCondition" content="https://schema.org/UsedCondition" />
                        <meta itemProp="price" content="47" />
                        <meta itemProp="priceValidUntil" content="2021-11-20" />
                    </span>
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