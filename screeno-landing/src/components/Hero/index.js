import React, { useState, useEffect } from "react";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Circle,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";

function Hero() {
  const navigate = useNavigate();

  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <Stack
          direction={{ base: "column", xl: "row" }}
          justifyContent={{ base: "start", md: "center", xl: "space-between" }}
          alignItems={{ base: "center", xl: "end" }}
          spacing={{ base: "3rem", xl: "7rem" }}
        >
          {/* Text */}
          <VStack
            alignItems={{ base: "start", md: "center", xl: "start" }}
            textAlign={{ base: "start", md: "center", xl: "start" }}
            spacing="3rem"
          >
            <VStack spacing="1rem">
              <Heading as="h1" size="h1" color="white">
                Bring Images to Live
              </Heading>
              <Text color="white" lineHeight="1.5">
                Convert Your Images to Reality with our Services We Make
                Annotations Easy and Collaborative. Connect With Local And
                Remote Data Sources. Experience the Speed & Ease of AI-Powered
              </Text>
            </VStack>
            <Wrap spacing="1.875rem">
              <WrapItem>
                <Button onClick={() => navigate("/signup")} colorScheme="blue">
                  Register
                </Button>
              </WrapItem>

              <WrapItem>
                <Button
                  onClick={() => navigate("/login")}
                  variant="outline"
                  colorScheme="white"
                >
                  Log In
                </Button>
              </WrapItem>
            </Wrap>
          </VStack>
          {/* Image */}

          <Box w="100%" maxW="543px" p={{ base: "1rem", md: "0" }}>
            <video
              class="banner-video"
              id="desc_video"
              autoplay=""
              loop=""
              muted=""
              __idm_id__="311297"
            >
              <source
                type="video/mp4"
                src="https://player.vimeo.com/external/569834992.hd.mp4?s=025857accc5e9af1cd9f13c8f4c7974fe799a99c&amp;profile_id=175"
              />
            </video>
            <Box position="relative">
              <HoverBadge position="absolute" right="-1rem" top="-1rem">
                <Circle size="6px" bg="red" />
                <Text>Live</Text>
              </HoverBadge>
              <Parallax position="absolute" left="-1rem" bottom="-2.5rem">
                <Image
                  style={{ borderRadius: "10px" }}
                  src="https://www.d-id.com/wp-content/uploads/2021/07/Talking_Heads_750.jpg"
                  maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                  shadow="2xl"
                  alt="Hero image"
                />
              </Parallax>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
