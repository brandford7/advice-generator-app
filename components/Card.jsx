import { Box, Button, chakra, Img, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ advice, generateAdvice, id }) => {
  return (
    <>
      <Box
        bg=" hsl(217, 19%, 24%)"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        mx={["20px", "20px", "0px"]}
        w="550px"
        h={["350", "400", "340"]}
        borderRadius="10px"
        shadow="lg"
        textAlign="center"
        zIndex="1"
      >
        <Text color="hsl(150, 100%, 66%)" mb="10px" mt="40px">
          Advice #{id}
        </Text>
        <chakra.blockquote
          fontSize="28px"
          noOfLines="4"
          color="hsl(193, 38%, 86%)"
          mt="10px"
          px="20px"
        >
          “{advice}”
        </chakra.blockquote>
        <Box pos="absolute" bottom={["320", "320", "370"]}>
          <Img
            src="/pattern-divider-desktop.svg"
            alt=""
            h="15px"
            w="450px"
            zIndex="2"
            display={["none", "none", "flex"]}
          />
          <Img
            src="/pattern-divider-mobile.svg"
            alt=""
            zIndex="2"
            display={["flex", "flex", "none"]}
            h="15px"
            w={["250px", "380px", "450px"]}
          />
        </Box>
      </Box>
      <Box
        borderColor="hsl(150, 100%, 66%)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        pos="absolute"
        shadow="lg"
        bottom={["240px", "215px", "240px"]}
        zIndex="2"
        h="60px"
        w="60px"
        cursor="pointer"
        bg="hsl(150, 100%, 66%)"
        _hover={{
          bg: "hsl(150, 100%, 66%)",
          boxShadow: "0 5px 30px hsl(150, 100%, 66%)",
        }}
        onClick={generateAdvice}
      >
        <Img src="/icon-dice.svg" alt="" h="20px" w="20px" />
      </Box>
    </>
  );
};

export default Card;
