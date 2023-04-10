import React, { useState, useEffect } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();

  const [singinemail, setsinginemail] = useState("");
  const [signinpassword, setsigninpassword] = useState("");

  async function Login() {
    if (singinemail.length === 0) {
      toast({
        title: "E-mail Validation Error",
        description: "You can't remain your email empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (signinpassword.length === 0) {
      toast({
        title: "Password Validation Error",
        description: "You can't remain your password empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const data = {
        email: singinemail,
        password: signinpassword,
      };
      const result = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      let res = await result.json();
      if (res.length === 0) {
        toast({
          title: "User Validation Error",
          description: "User not found.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        localStorage.setItem("login", true);
        navigate("/upload");
      }
    }
  }

  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <VStack spacing="2rem" px="25rem" py="4rem">
          <Heading color="white" size="md">
            Continue Your Journey
          </Heading>
          <Input
            value={singinemail}
            onChange={(e) => setsinginemail(e.target.value)}
            placeholder="Your email"
            bg="white"
          />
          <Input
            value={signinpassword}
            onChange={(e) => setsigninpassword(e.target.value)}
            type="password"
            placeholder="Your password"
            bg="white"
          />
          <Box>
            <Button onClick={Login} colorScheme="blue">
              Login
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Login;
