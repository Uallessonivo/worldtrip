import { Flex, Heading } from "@chakra-ui/react";
import { Features } from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import SpacingLine from "../components/SpacingLine";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Hero />
      <Features />
      <SpacingLine />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
