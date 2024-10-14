import { Container, styled } from 'pandacss/jsx'

const Page: Page.FC = async () => {
  return (
    <styled.main paddingY="2rem">
      <Container>
        <styled.div
          width="full"
          minHeight="min-content"
          display="block"
          position="relative"
        >
          Notification
        </styled.div>
      </Container>
    </styled.main>
  )
}

export default Page
