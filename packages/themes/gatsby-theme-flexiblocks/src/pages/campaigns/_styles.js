/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './assets/contour-pattern.svg'
import circle from './assets/circle.png'

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
  featuresContainer: {
    position: `relative`,
    py: [5, 6],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: 0,
      right: `50%`,
      transform: `translate(50%, 0)`,
      zIndex: -1,
      borderRadius: `xl`,
      background: t => `linear-gradient(
          150deg,
          ${t.colors.omegaLighter} 80%,
          ${t.colors.omegaLight} 100%
        )`
    }
  },
  strategiesContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      width: `full`,
      height: `150%`,
      position: `absolute`,
      top: 0,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${t.colors.alphaLighter} 0%,
          ${t.colors.background} 100%
        )`,
      backgroundSize: `100%`
    }
  },
  whyChooseUsContainer: {
    bg: `omegaLighter`,
    borderRadius: `xl`,
    
    px: [4, 0]
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  }
}
