import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

export const Author = () => {
  const [author, setAuthor] = useState({
    name: "",
    phNo: 0,
    Bdate: 0,
    Ddate: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setAuthor({ ...author, [name]: value });
  };
  const handleSubmit = () => {
    console.log(author);
    axios.post("http://localhost:3000/author",author);
  };
  return (
    <>
      <Button onClick={onOpen}>Add Author</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Author</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="number" name="phNo" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Birth Date</FormLabel>
              <Input type="date" name="Bdate" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Death Date</FormLabel>
              <Input type="date" name="Ddate" onChange={handleChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
