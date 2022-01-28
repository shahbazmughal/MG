/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import image1 from "./team-shape.svg"
import image2 from "./shafaat.jpg"
import image3 from "./wasif.jpg"
import image4 from "./umer.jpg"
import image5 from "./about_hero.jpg"
import image6 from "./arfan.jpg"
import image7 from "./shahbazmughal.jpg"
import image8 from "./adnan.jpg"
import image9 from "./azeem.jpg"
import image10 from "./m-wakeel.png"
import image11 from "./rehanbutt.jpg"
import image12 from "./asim-malick.jpg"
import image13 from "./maida-shahid.png"
import image14 from "./001.png"
import image15 from "./002.png"
import image16 from "./003.png"

export default {
  heroContainer: {
    position: `relative`,
    pt: [6],
    '::before': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `100%`,
      top: 0,
      right: 0,
      zIndex: -1,
      bg: `white`
      //bg: `white`,
      //background: t =>  `url(${image16})`,
    }
  },
  heroContainer2: {
    position: `relative`,
    pt: [0]
  }
}
