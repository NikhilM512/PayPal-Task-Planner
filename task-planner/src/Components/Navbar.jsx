import { Box, Button, Heading, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack height={77} bg="bisque" justifyContent={'space-around'}>
        <Box w='25%'>
            <Heading color={'purple'}>Task Planner</Heading>
        </Box>
        <HStack w='50%'>
            <Input placeholder="Search for sprint"></Input>
            <Button>Search</Button>
        </HStack>
        <HStack w='25%' justifyContent={'center'}>
          <Link to="/login"><Button>LOGIN</Button></Link>
          <Link to="/register"><Button>REGISTER</Button></Link>
        </HStack>
    </HStack>
  )
}

export default Navbar