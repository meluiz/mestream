import { Box } from 'pandacss/jsx'
import { Topbar } from '#components/layout'

const Layout: Layout.FC = ({ children }) => {
  return (
    <Box width="full" minHeight="screen" display="block" position="relative">
      <Topbar />
      <div style={{ width: '100%', height: '200vh', position: 'relative' }}>
        {children}
      </div>
    </Box>
  )
}

export default Layout
