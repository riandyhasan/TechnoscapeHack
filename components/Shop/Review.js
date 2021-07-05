import React from "react";
import { Flex, Box, Image, Heading, Text, Link, Button } from "@chakra-ui/react";

export default function Review(...props) {
  return (
    <Flex {...props} my="3rem" d="column">
      <Heading color="brand.300">Review</Heading>
      <Box overflow="hidden" color="white" bg="#272727" w="100%" mt="5">
        <Flex>
          <Box maxW="md" color="white" my="2rem" ml="2rem">
            <Image src="/assets/profilepict.png" />
          </Box>

          <Box ml="2rem" mt="2rem">
            <Flex>
              <Box>
                <Heading fontSize="sm" mr="5rem">
                  Jimmy Paliang
                </Heading>
                Aku stay 4 hari 3 malam. View cukup bagus. Fasilitas outbond ku rasa waktunya terlalu singkat-singkat. Archery sampai jam 10 aja dan itupun antrinya penuh. Sarapan kurang beragam, rasanya cukup oke. Tapi buahnya cuma
                semangka dan pepaya, selama 4 hari itu-itu aja. Room bagian kamar mandi tua ya.
              </Box>
            </Flex>

            <Flex>
              <Box maxW="md" my="2rem">
                <Image src="/assets/review/review 1.png" />
              </Box>
              <Box maxW="md" my="2rem" ml="2rem">
                <Image src="/assets/review/review 2.png" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
