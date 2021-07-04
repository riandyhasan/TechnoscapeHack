import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

export default function ItemCard(...props) {
  return (
    <Flex {...props} alignItems="center" justityContent="center" ml="2rem" my="3rem">
      <Image src="/assets/productdetail/1.png" />
      <Box ml="2rem">
        <Image src="/assets/productdetail/2.png" />
        <Image src="/assets/productdetail/3.png" mt="5" />
      </Box>
    </Flex>
  );
}
