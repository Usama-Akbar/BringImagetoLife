import React, { useEffect, useRef, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import {
  Heading,
  Box,
  Button,
  Container,
  HStack,
  Link,
  Show,
} from "@chakra-ui/react";

import LogoWhite from "assets/images/brand-logo/logo-white.svg";
import MobileNav from "./MobileNav";

function NavBar() {
  const [LogIn, setLogIn] = useState(false);
  useEffect(() => {
    let user = localStorage.getItem("login");

    if (user === "false" || user === false || user === null) {
      console.log("User not Login", user);
      setLogIn(false);
    } else {
      console.log("User Login", user);
      setLogIn(true);
    }
  });
  const navigate = useNavigate();

  const [navLinks] = useState([
    {
      name: "Home",
      path: "/examples",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/about",
    },
  ]);
  function Signout() {
    localStorage.setItem("login", false);
    window.location.href = "/";
  }
  function Scroll() {
    document.body.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }
  const myRef = useRef(null);

  return (
    <Box bg="gray.900">
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          {/* Left links */}
          <HStack spacing="6rem">
            <Link as={NavLink} to="/">
              <Heading as="h3" size="h3" color="white">
                AI Anotate
              </Heading>
            </Link>
            {LogIn === true ? null : (
              <Show above="lg">
                <HStack spacing="5.25rem">
                  <Button
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                    key={`nav${"/"}`}
                    as={"Home"}
                    to={"/"}
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                  >
                    {"Home"}
                  </Button>
                  <Button
                    onClick={() => window.scrollTo(0, 850)}
                    style={{ cursor: "pointer" }}
                    key={`nav${"/about"}`}
                    as={"Home"}
                    to={"/about"}
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                  >
                    {"About"}
                  </Button>
                  <Button
                    onClick={() => window.scrollTo(0, 1550)}
                    style={{ cursor: "pointer" }}
                    key={`nav${"/pricing"}`}
                    as={"Home"}
                    to={"/pricing"}
                    variant="link"
                    colorScheme="whiteAlpha"
                    color="white"
                  >
                    {"Pricing"}
                  </Button>
                </HStack>
              </Show>
            )}
          </HStack>
          {/* Right Links */}
          <Show above="lg">
            {LogIn === true ? (
              <HStack spacing="1.125rem">
                <Button onClick={Signout} colorScheme="yellow">
                  Log Out
                </Button>
              </HStack>
            ) : (
              <HStack spacing="1.125rem">
                <Button
                  as={NavLink}
                  to="/login"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  color="white"
                >
                  Log In
                </Button>
                <Button as={NavLink} to="/signup" colorScheme="blue">
                  Register
                </Button>
              </HStack>
            )}
          </Show>
          {/* Mobile menu */}
          <MobileNav links={navLinks} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
