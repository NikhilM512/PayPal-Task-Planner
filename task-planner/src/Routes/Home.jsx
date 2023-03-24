import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  useDisclosure,
  Button,
  Box,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addSprintFailure, addSprintRequest, addSprintSuccess } from '../Redux/SprintReducer/action';

const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [title,setTitle] = useState("");

  const sprints=useSelector((store)=>store.SprintReducer.sprints);
  const dispatch=useDispatch();
  
  const handleSprint=()=>{
    onClose();
    dispatch(addSprintRequest('...Loading'));
    dispatch(addSprintSuccess(title));
    dispatch(addSprintFailure("ERRROR:401"));
  }

  console.log(sprints)

  return (
    <>
    <Stack>
      <Box display={'flex'} justifyContent='flex-end' p='2%'>
      <Button onClick={onOpen}>Create Sprint</Button>
      </Box>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Create a Sprint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Textarea placeholder='Enter a sprint title...' onChange={(e)=>setTitle(e.target.value)}></Textarea>
          </ModalBody>
          <ModalFooter>

            <Button colorScheme='blue' mr={3} onClick={handleSprint} >Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home