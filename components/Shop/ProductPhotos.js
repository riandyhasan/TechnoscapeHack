import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

export default function ProductPhotos(...props) {
  return (
    <Flex {...props} alignItems="center" justityContent="center" ml="2rem" my="3rem">
      <Image src="/assets/productdetail/1.png" _hover={{ opacity: "0.3" }} />
      <Box ml="2rem">
        <Image src="/assets/productdetail/2.png" _hover={{ opacity: "0.3" }} />
        <Image src="/assets/productdetail/3.png" mt="5" _hover={{ opacity: "0.3" }} />
      </Box>
    </Flex>
  );
}
