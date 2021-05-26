import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

interface CityProps {
  cityBg: string;
  bandBg: string;
  cityName: string;
  countryName: string;
}

export default function City({
  cityBg,
  cityName,
  countryName,
  bandBg,
}: CityProps) {
  return (
    <Box borderRadius="4px" overFlow="hidden">
      <Image src={`/${cityBg}.png`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="800" color="gray.700">
            {cityName}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {countryName}
          </Text>
        </Flex>
        <Image src={`/${bandBg}.png`} w="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  );
}
