import Logo from './logo'
import {
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => (
  <Stack
    py={2}
    direction="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Logo />

    <Stack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems="center"
      fontWeight={600}
      color="white"
      spacing={12}
      mt={{ base: 4, md: 0 }}
    >
      <Link href="/#why-bluesky">Why BlueSky</Link>
      <Link href="/#our-work">Our Work</Link>
      <Link href="/#our-process">Our Process</Link>
      <Link href="/#what-clients-say">What Clients Say</Link>
    </Stack>
    <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
      <Menu isLazy id="navbar-menu">
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Options"
        />
        <MenuList>
          <a href="/#why-bluesky">
            <MenuItem>Why BlueSky</MenuItem>
          </a>
          <a href="/#our-work">
            <MenuItem>Our Work</MenuItem>
          </a>
          <a href="/#our-process">
            <MenuItem>Our Process</MenuItem>
          </a>
          <a href="/#what-clients-say">
            <MenuItem>What Clients Say</MenuItem>
          </a>
        </MenuList>
      </Menu>
    </Box>
  </Stack>
)

export default Navbar
