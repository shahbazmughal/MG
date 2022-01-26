import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import Counter from '@solid-ui-components/Counter'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const StatsBlock01 = ({
  content: { text, container, collection, buttons }
}) => (
  <Container sx={{ textAlign: `center` }}>
      {buttons && (
        <>
          <Divider />
          <ContentButtons content={buttons} />
        </>
      )}
  </Container>
)

export default WithDefaultContent(StatsBlock01)
