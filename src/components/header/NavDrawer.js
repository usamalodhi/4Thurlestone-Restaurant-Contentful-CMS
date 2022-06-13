import React from 'react';
import NavLinks from './NavBar';
import FollowSocialDrawer from '../abstract/FollowSocialDrawer';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  Flex,
} from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';
import HamburgerIcon from '../../images/menu.svg';

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box background='black'>
      <Button ref={btnRef} onClick={onOpen}>
        <Image>{HamburgerIcon}</Image>
      </Button>
      <Drawer background='black' placement='right' size='full' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent background='black'>
          <DrawerCloseButton color='white' />
          <DrawerHeader color='white'>4 Thurlestone</DrawerHeader>
          <DrawerBody display='flex' justifyContent='flex-end'>
            <Flex direction='column' justifyContent='stretch' color='white'>
              <NavLinks onClose={onClose} />
              <FollowSocialDrawer />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
