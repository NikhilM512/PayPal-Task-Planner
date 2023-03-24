import { Box, Button, Heading, HStack, Input } from '@chakra-ui/react'
import React from 'react'

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
    </HStack>
  )
}

export default Navbar