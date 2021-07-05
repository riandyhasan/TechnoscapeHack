import React from "react";
import { Flex, Box, FormControl, FormLabel, Input, Image, InputRightElement, Button } from "@chakra-ui/react";

export default function Searchbar({ ...props }) {
  return (
    <Flex {...props}>
      <FormControl id="search">
        <Input type="search" placeholder="Cari tempat..." />
        <InputRightElement width="4.5rem">
          <Button bg="transparent" _hover={{ bg: "transparent" }}>
            <Image src="/assets/searchbutton.png" />
          </Button>
        </InputRightElement>
      </FormControl>
    </Flex>
  );
}
