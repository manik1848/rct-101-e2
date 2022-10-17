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

export const Book = () => {
  const [book, setBook] = useState({
    title: "",
    authorId: "",
    author: "",
    publisher: "",
    publishDate: 0,
    category: "",
    price: 0,
    soldCount: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  const handleSubmit = () => {
    console.log(book);
    axios.post("http://localhost:3000/books", book);
  };
  return (
    <>
      <Button onClick={onOpen}>Add Book</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Author</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input type="text" name="title" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Author ID</FormLabel>
              <Input type="text" name="authorId" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Author </FormLabel>
              <Input type="text" name="author" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Publisher</FormLabel>
              <Input type="text" name="publisher" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input type="text" name="category" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" name="price" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Sold Count</FormLabel>
              <Input type="number" name="soldCount" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Publish Date</FormLabel>
              <Input type="date" name="publishDate" onChange={handleChange} />
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
