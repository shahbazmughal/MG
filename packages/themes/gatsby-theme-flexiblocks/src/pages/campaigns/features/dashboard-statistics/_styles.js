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
          ${t.colors.alphaLighter} 0%,
          ${t.colors.background} 100%
        )`,
      backgroundSize: `100%`,
      bg: `omegaLighter`,
      borderRadius: `xl`,
      passing: `10px`
    }
  },
  featuresContainer: {
    position: `relative`,
    overflow: [`hidden`, `unset`],
    '::before': {
      content: `" "`,
      width: `100%`,
      height: [`80%`, null, `140%`],
      position: `absolute`,
      top: [`5%`, null, `-5%`],
      left: `60%`,
      zIndex: -1,
      borderRadius: `xl`,
      transform: `skew(23deg, 0deg) rotate(-10deg)`,
      background: t => `radial-gradient(
          circle,
          ${t.colors.beta2} 0%,
          ${t.colors.alpha2} 100%
        )`,
      backgroundSize: `100%`,
      backgroundPosition: `650px bottom`
    },
    '::after': {
      display: [`none`, `block`],
      content: `" "`,
      position: `absolute`,
      top: `-30%`,
      left: `100%`,
      transform: `translate(-50%, 0)`,
      zIndex: -1,
      size: '600px',
      background: `url(${circle}) no-repeat center center`,
      backgroundSize: `cover`,
      filter: `brightness(60%) sepia(100) saturate(100) hue-rotate(25deg)`,
      opacity: 0.1
    }
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  }
}
