import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/bg.jpg')"
      bgRepeat="no-repeat"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          transform="translateY(48px)"
          ml="8"
          src="/Airplane.svg"
          alt="Airplane"
        />
      </Flex>
    </Flex>
  );
}
