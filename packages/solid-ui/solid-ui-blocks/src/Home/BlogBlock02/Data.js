import React, {useState, useEffect}from 'react';
import {Link} from 'gatsby';
import './loading.css';

const styles = {
    imgStyle: {
        width: `100%`,
        height: 240,
        objectFit: "cover",
        borderRadius: "6px"
    },
    flex0 : {
        flex:0,
        WebkitFlex: 0
    },
    loadings: {
        width:"100%",
        textAlign: "center"
    }
}

function Data() {

    var convertDate = (d) => {
        // var parts2 = d.split("T");
        // var time = parts2[1];
        // var parts = parts2[0].split("-");
        // var months = {"01": "Jan","02": "Feb","03": "Mar","04": "Apr","05": "May","06": "June","07": "July","08": "Aug","09": "Sep","10": "Oct","11": "Nov","12": "Dec"};

        // return parts[1]+" "+months[parts[1]]+", "+ parts[0];
        var today  = new Date(d);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString("en-US", options);
    }

    var decodeEntities = (function() {
        // this prevents any overhead from creating the object each time
        var element = document.createElement('div');
      
        function decodeHTMLEntities (str) {
          if(str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
          }
      
          return str;
        }
      
        return decodeHTMLEntities;
    })();
       

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        var posts = [];

        const getPosts = async () => {

            const presponse = await fetch('https://school.mumara.com/wp-json/wp/v2/posts/', {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            
            if(presponse.status !== 200) {
                throw new Error('cannot fetch the posts data.');
            }
            
            const pdata = await presponse.json();
            
            return pdata;

        }
        getPosts()
            .then(pdata => {
                setData(pdata);
                setLoading(false);
                posts.push(pdata);
            })
            .catch(err => console.log('Rejected: ', err.message))
    } , []);
    
    return (
        <div className="css-fdsoy5">
            <div style={styles.loadings} style={{display: 'none'}}><div id="loading" className="loading"><div className="loader"></div></div></div>

            {/* {data !== undefined && data !== [] ? JSON.stringify(data[0]) : "12121212"} */}
            {loading == true ? <div style={styles.loadings}><div id="loading" className="loading"><div className="loader"></div></div></div> : ""}
            
            {data !== undefined && data !== [] ? 
            data?.slice(0,3).map((posts, index) => {
                return(
                    <div className="css-1w4obji" key={`post-`+index} id={posts.id}>
                        <Link to={posts.link} className="button-group-button css-1ip3i53" target="_blank">
                            <article className="css-1lr6sgx">
                                <div className="css-1li49bo" style={styles.flex0}>
                                    <div className="css-1i5g8ff">
                                        <div className="css-1jhnp88-ContentImages">
                                            <picture>
                                            <img src={posts.yoast_head_json.og_image[0].url} alt="" style={styles.imgStyle} />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1eetir6">
                                    <div className="css-12hibeq">
                                        <div className="css-19p2wcd" style={{textAlign: 'left'}}>
                                            {
                                                posts.yoast_head_json.schema['@graph'][5].articleSection.map((item, index) => {
                                                    return(
                                                        <div key={`ct-`+index} className="css-cig7md" style={{marginRight: "5px"}}>{item}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <h5 className="css-19bvfwj" style={{textAlign: 'left'}}>{decodeEntities(posts.title.rendered.slice(0, 55))}</h5>
                                    <div className="css-1r912eh" style={{textAlign: 'left'}}>{String(posts.excerpt.rendered).replace(/<[^>]+>/gm, '').replace(/\&([^;]+);/g, "").slice(0, 150)+'...'}</div>
                                    <div className="css-jwtewi">
                                        <div className="css-zkfaav">
                                            <div className="css-1jhnp88-ContentImages">
                                                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper gatsby-image-wrapper-constrained css-20oayb-ImageComponent">
                                                    <picture>
                                                        <img width="80" height="80" alt={posts.yoast_head_json.schema['@graph'][6].name} src={posts.yoast_head_json.schema['@graph'][6].image.url} />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="css-1y5f7qa">
                                                <div className="css-ng6b79" style={{textAlign: 'left'}}>
                                                    <Link className="css-dpe4lb">
                                                        <strong>{posts.yoast_head_json.schema['@graph'][6].image.caption}</strong>
                                                    </Link>
                                                </div>
                                                <div className="css-zkfaav">
                                                    <div className="css-f55aen">{convertDate(posts.date)} </div>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </article>
                        </Link>
                    </div>
                )
            })
            : ""}
        </div>
    );
}

export default Data;