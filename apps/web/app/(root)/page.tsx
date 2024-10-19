import { Anchor, styled } from 'pandacss/jsx'

const Page: Page.FC = () => {
  return (
    <styled.div>
      <Anchor
        color="blue.400"
        href="/servers"
        _hover={{ textDecoration: 'underline' }}
      >
        Go to servers
      </Anchor>
    </styled.div>
  )
}

export default Page
