import React from "react";

import { EnvelopeSimple } from "phosphor-react";
import { Box, Circle, Container, Heading, VStack } from "@chakra-ui/react";

import DonateOverlay from "./DonateOverlay";
import Feature from "./Feature";
import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";

function FeatureImages() {
  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3rem", md: "6.5rem" }}
      >
        <Heading
          as="h1"
          size="h1"
          color="white"
          pb={{ base: "3rem", md: "6.5rem" }}
          textAlign={{ base: "start", md: "center" }}
        >
          We help you grow
        </Heading>
        <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
          <Feature
            heading="Holiday Cards Templates"
            text="We have Holiday Card Template which have a sample video that you can play to choose from."
            imageSrc="assets/images/features/feature-image-1.png"
            imageAlt="Feature Image 1"
            to="/"
          >
            <Parallax position="absolute" top="-1rem" left="-1rem">
              <DonateOverlay />
            </Parallax>
          </Feature>
          <Feature
            heading="Optimized for Control"
            text="Enables Unparalled Control of Your Annotation Workflow. Speed up your data annotation by 10x"
            imageSrc="assets/images/features/feature-image-2.png"
            imageAlt="Feature Image 2"
            reverse={true}
            to="/"
          >
            <HoverBadge
              borderRadius="0.75rem"
              p="1rem"
              fontSize="32px"
              position="absolute"
              top="-1rem"
              right="-1rem"
            >
              <EnvelopeSimple />
              <Circle
                size="0.75rem"
                bg="blue.400"
                position="absolute"
                top="1rem"
                right="0.85rem"
                border="2px"
                borderColor="white"
              />
            </HoverBadge>
          </Feature>
        </VStack>
      </Container>
    </Box>
  );
}

export default FeatureImages;
