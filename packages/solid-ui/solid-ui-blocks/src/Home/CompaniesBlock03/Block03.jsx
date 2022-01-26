import React from 'react'
import SVG from 'react-inlinesvg'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  logo: {
    width: [100, 210],
    height: [60, 76]
  },
  heading: {
    fontSize:16
  },
  textsize: {
    fontSize:12
  }
}

const CompaniesBlock03 = ({ content }) => {
  const { text, collection, buttons } = content

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={text} />
      {text && collection && <Divider />}
      <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
        {collection?.map(({ text, icon }, index) => (
          <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`, null, `1/5`], p: 3 }}>
            <Reveal
              effect='fadeInGrow'
              delay={0.2 * (index + 2)}
              title={text?.[0]?.text}
            >
              {icon?.src ? (
                <SVG src={icon.src} css={css(styles.logo)} />
              ) : (
                <ContentText content={text} />
              )}
            </Reveal>
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

export default WithDefaultContent(CompaniesBlock03)
