import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Input,
  useToast,
  Textarea,
} from "@chakra-ui/react";

function SignUp() {
  const toast = useToast();
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");

  async function Signup() {
    if (username.length === 0) {
      toast({
        title: "Name Validation Error",
        description: "You can't remain your name empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (email.length === 0) {
      toast({
        title: "Email Validation Error",
        description: "You can't remain your email empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (password.length < 7) {
      toast({
        title: "Password Validation Error",
        description: "You password should be at least 7 characters long",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (password !== confirmpass) {
      toast({
        title: "Password Validation Error",
        description: "You confirm password not the same as password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const data = {
        name: username,
        email: email,
        password: password,
        confirmpassword: confirmpass,
      };
      let res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (result.length === 0) {
        navigate("/login");
      } else {
        toast({
          title: "User Validation Error",
          description: "User is Already Registered.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
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
            Start Your Journey
          </Heading>
          <Input
            onChange={(e) => setusername(e.target.value)}
            value={username}
            placeholder="Enter Name"
            bg="white"
          />
          <Input
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter E-mail"
            bg="white"
          />
          <Input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            bg="white"
          />
          <Input
            onChange={(e) => setconfirmpass(e.target.value)}
            value={confirmpass}
            type="password"
            placeholder="Repeat Password"
            bg="white"
          />
          <Box>
            <Button onClick={Signup} colorScheme="blue">
              Register
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default SignUp;
