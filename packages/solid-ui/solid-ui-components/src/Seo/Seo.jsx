import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@blocks-helpers/useSiteMetadata'

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  thumbnail,
  image,
  image2,
  siteUrl
}) => {
  const site = useSiteMetadata()

  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}

  description = excerpt || description || site.description

  thumbnail = thumbnail && thumbnail.hero && thumbnail.hero.src
  const thumbnailUrl =
    thumbnail &&
    (thumbnail.startsWith('//')
      ? thumbnail
      : siteUrl && `${siteUrl}${thumbnail}`)
 
  /**
   * Meta Tags
   */

  const metaTags = [
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description },
    { name: 'title', content: title || site.title},
    { name: 'description', content: description },

    { property: 'og:site_name', content: title || site.title },
    { property: 'og:type', content: "article" },
    { property: 'og:url', content: siteUrl || site.siteUrl },
    { property: 'og:title', content: title || site.title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:image', content: image || "https://mumara-final.netlify.app/Mumara-Feature-Image.jpg" },
    { property: 'og:image:width', content: "1000" },
    { property: 'og:image:height', content: "800" },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter.url },
    { name: 'twitter:image', content: image2 || "https://mumara-final.netlify.app/Mumara-Feature-Image.jpg" },
    { name: 'favicon', rel: 'shortcut icon' , content: "https://a.mumara.com/lp1/images/favicon.ico" }
  ]

  if (keywords && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords })
  }

  if (meta) {
    metaTags.push(meta)
  }

  metaTags.push({ name: 'initial-scale', content: '1.0' })

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
    />
  )
}

export default Seo
