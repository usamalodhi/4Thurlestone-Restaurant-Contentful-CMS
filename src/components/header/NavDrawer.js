import React from 'react';
import NavLinks from './NavBar';
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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>4 Thurlestone</DrawerHeader>
          <DrawerBody>
            <Box w='fit-content' border='2px solid black' onClick={onClose}>
              <NavLinks />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
