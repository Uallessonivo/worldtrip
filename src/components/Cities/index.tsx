import { Heading, Grid } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
        color="gray.600"
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          cityBg={"londres"}
          cityName={"Londres"}
          countryName={"Reino unido"}
          bandBg={"londreband"}
        />
        <City
          cityBg={"paris"}
          cityName={"Paris"}
          countryName={"França"}
          bandBg={"parisbg"}
        />
        <City
          cityBg={"roma"}
          cityName={"Roma"}
          countryName={"Itália"}
          bandBg={"romabg"}
        />
        <City
          cityBg={"praga"}
          cityName={"Praga"}
          countryName={"República tcheca"}
          bandBg={"pragabg"}
        />
        <City
          cityBg={"ams"}
          cityName={"Amsterdã"}
          countryName={"Holanda"}
          bandBg={"amsbg"}
        />
      </Grid>
    </>
  );
}
