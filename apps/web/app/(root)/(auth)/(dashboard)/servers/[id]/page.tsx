import { notFound } from 'next/navigation'
import { Container, styled } from 'pandacss/jsx'
import { isBotMember } from './actions'

const Page: Page.FC = async ({ params }) => {
  const guildId = params.id

  // invalid guild id
  if (!guildId || typeof guildId !== 'string' || !/\d+$/.test(guildId)) {
    return notFound()
  }

  const isNotFound = await isBotMember(guildId)

  // not found user in guild
  if (!isNotFound) {
    return (
      <Container>
        <styled.main
          width="full"
          minHeight="min-content"
          display="block"
          position="relative"
          paddingY={24}
        >
          NOT FOUND
        </styled.main>
      </Container>
    )
  }

  return (
    <styled.main paddingY="2rem">
      <Container>
        <styled.div
          width="full"
          minHeight="min-content"
          display="block"
          position="relative"
        >
          Overview
        </styled.div>
      </Container>
    </styled.main>
  )
}

export default Page
