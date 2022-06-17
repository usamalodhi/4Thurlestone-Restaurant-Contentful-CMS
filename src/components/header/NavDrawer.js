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
import HamburgerIcon from '../../images/menu.svg';

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box background='black'>
      <Button p='0' m='0' ref={btnRef} onClick={onOpen}>
        <Image src={HamburgerIcon} width='20px' height='20px' />
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
