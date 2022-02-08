/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './assets/contour-pattern.svg'
import cc from './assets/cc.png'
import cccta from './assets/cc-cta.png'
import heroBg2 from './assets/contour-pattern.svg'
import check from './assets/check.png'
import marketer from './assets/marketer.png'
import roi from './assets/roi.jpg'
import sec3e from './assets/img-svc-section-3e.png'
import sec3d from './assets/img-svc-section-3d.png'
import check2 from './assets/check2.png'
import heigherlevel from './assets/higher-level.png'
import j100 from './assets/100.jpg'
import templates from './assets/templates.png'
import salevideo from './assets/sales-video.png'
import algorithm from './assets/algorithm.jpg'
import adown from './assets/arrow-down.jpg'
import statistics from './assets/statistics.jpg'
import topcurve from './assets/top-curve.png'
import dripconfigure from './assets/drip-configure.jpg'
import takingautomation from './assets/taking-automation.jpg'
import targetemail from './assets/target-email.jpg'
import builder from './assets/builder.png'
import smtp from './assets/smtp.jpg'
import analysis from './assets/analysis.png'
import r1 from './assets/review-1.jpg'
import r2 from './assets/review-2.jpg'
import r3 from './assets/review-3.jpg'
import r4 from './assets/review-4.jpg'
import r5 from './assets/review-7.jpg'
import r6 from './assets/review-8.jpg'
import r7 from './assets/review-9.jpg'
import r8 from './assets/review-10.jpg'
import toplcurve from './assets/top-lcurve.png'

export default {
  html: {
    overflowX: 'hidden'
  },
  body : {
    overflowX: 'hidden'
  },
  heroContainer: {
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: `-10%`,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${`#cfe8e6`} 0%,
          ${`#FFFFFF`} 100%
        )`,
      backgroundSize: `100%`,
      bg: `omegaLighter`,
      borderRadius: `xl`,
      passing: `10px`
    }
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  }
}
