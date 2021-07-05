import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Flex, Text } from "@chakra-ui/react";

export default function ModalCustom({ title, content, isOpen, onClose, ...props }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mr="2rem" color="brand.primary" fontSize="2xl">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="0.75rem">{content}</ModalBody>
        <Button bg="brand.300" color="white" _hover={{ bg: "brand.300" }}>
          Reserve
        </Button>
        <Text fontWeight="light" color="white">
          You won't be charged yet
        </Text>
        <Flex fontWeight="light" color="white" justifyContent="space-between">
          <Text>Total</Text>
          <Text>Rp 2.2500.000</Text>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
