import React from 'react'
import SVG from 'react-inlinesvg'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'

const styles = {
  logo: {
    width: [210, 180],
    height: [70, 60]
  },
  heading: {
    fontSize:16
  },
  textsize: {
    fontSize:12
  }
}

const CompaniesBlock01 = ({ content }) => {
  const { text, collection, buttons, images } = content

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={text} />
      {text && collection && <Divider />}
      <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
        {collection?.map(({ text, icon, images }, index) => (
          <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`, null, `1/5`], p: 3 }}>
            <Box
              title={text?.[0]?.text}
            >
              <ContentImages
                content={{ images }}
                loading='eager'
                imagePosition='center'
              />
              {icon?.src ? (
                <SVG src={icon.src} css={css(styles.logo)} />
              ) : (
                <ContentText content={text} />
              )}
            </Box>
            <ContentText content={text} />
          </Box>
        ))}
      </Flex>
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Container>
  )
}

export default WithDefaultContent(CompaniesBlock01)
