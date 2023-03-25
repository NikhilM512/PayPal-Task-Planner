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
  Text,
  HStack,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addSprintFailure, addSprintRequest, addSprintsFailure, addSprintsRequest, addSprintsSuccess, addSprintSuccess } from '../Redux/SprintReducer/action';
import { useEffect } from 'react';

const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [title,setTitle] = useState("");
  const [data,setData] = useState([]);

  const sprints=useSelector((store)=>store.SprintReducer.sprints);
  
  const dispatch=useDispatch();
  
  const handleSprint=()=>{

    onClose();

    dispatch(addSprintRequest('...Loading'));

    let Token = JSON.parse(localStorage.getItem("Token")) || "";

    fetch("https://charming-pumps.cyclic.app/sprint",{

      method:"POST",

      headers:{

        "authorization": `Bearer ${Token}`

      },

      body: JSON.stringify( { title, status:false } )

     }).then((res)=>res.json())

     .then ((res)=>{

      alert(res.msg);
      dispatch(addSprintSuccess( { title, status:false } ));
          
    }).catch((err)=>{

      dispatch(addSprintFailure(err));

    });
    
  }
  console.log(sprints)

  const fetchData=(url)=>{

    dispatch(addSprintsRequest('...Loading'));

    let Token = JSON.parse(localStorage.getItem("Token")) || "";

    fetch( url, {

      method:"GET",

      headers:{

        "authorization": `Bearer ${Token}`

      },

     })
     
     .then((res)=>res.json())

     .then ((res)=>{
      console.log(res)
   
      dispatch(addSprintsSuccess( res.data ));
          
    }).catch((err)=>{

      dispatch(addSprintsFailure( err ));

    });

  }

  useEffect(()=>{

    fetchData("https://charming-pumps.cyclic.app/sprint");

  },[])

  return (
    <>
    <Stack>
      <Box display={'flex'} justifyContent='flex-end' p='2%'>
      <Button onClick={onOpen}>Create Sprint</Button>
      </Box>
      {sprints&&sprints?.map((e)=>
        <HStack color={e.status?'orange':'green'}>
          <Text>{e.title}</Text>
        </HStack>
      )}
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