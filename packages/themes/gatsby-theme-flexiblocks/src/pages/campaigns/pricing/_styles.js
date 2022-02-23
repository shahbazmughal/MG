/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './assets/contour-pattern.svg'

export default {
  html: {
    overflowX: 'hidden'
  },
  body : {
    overflowX: 'hidden'
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  },
  heroContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      width: `full`,
      height: `150%`,
      position: `absolute`,
      top: `-40%`,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${`#cfe8e6`} 0%,
          ${`#FFFFFF`} 100%
        )`,
      backgroundSize: `100%`
    }
  },
}
