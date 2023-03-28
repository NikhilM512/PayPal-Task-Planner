import { Box, Button, Heading, HStack, Input, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
} from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleLogout=()=>{
    localStorage.removeItem("Token");
  }

  return (
    <>
    <HStack height={77} bg="bisque" justifyContent={'space-between'} pr="15px">
        <Box w='50%' textAlign={'start'} pl="5%" >
            <Heading color={'purple'} fontStyle='italic'> Task Planner</Heading>
        </Box>
        <HStack w='50%' display={['none','none','flex','flex']} justifyContent={'flex-end'} pr="5px" color={'purple'}>
          <Link to="/login"><Button bg="yellowgreen">LOGIN</Button></Link>
          <Link to="/register"><Button bg="yellowgreen">REGISTER</Button></Link>
          <Button bg="yellowgreen" onClick={handleLogout}>LOGOUT</Button>
        </HStack>
        <Icon color={'purple'} as={GiHamburgerMenu} onClick={onOpen} w={33} h={33} display={['block','block','none','none']}></Icon>
    </HStack>
    
    <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='bisque'>
          <DrawerCloseButton />
          <DrawerHeader color={'purple'} textAlign='center' fontSize={33}>PayPal Task Planner</DrawerHeader>

          <DrawerBody>
          <VStack w='100%' justifyContent={'flex-end'} pr="5%" color={'purple'}>
            <Link to="/login"><Button bg="yellowgreen">LOGIN</Button></Link>
            <Link to="/register"><Button bg="yellowgreen">REGISTER</Button></Link>
            <Button bg="yellowgreen" onClick={handleLogout}>LOGOUT</Button>
          </VStack>
          </DrawerBody>

          <DrawerFooter w='100%' display={'flex'} justifyContent='center'>
            <Button variant='outline' bg='salmon' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default Navbar