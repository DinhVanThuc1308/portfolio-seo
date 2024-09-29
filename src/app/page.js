"use client";
import { Flex, Container, Button, Stack } from "@chakra-ui/react";
import Dashboard from "@/app/components/Dashboard/Dashboard";
import About from "./components/About/AboutMe";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/contact";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Flex
        direction="column"
        // align="center"
        // justify="center"
        minH="100vh"
        minW={{ base: "100%", md: "50%" }}
        pl={10}
        // bg="gray.50"
      >
        <Dashboard />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </Flex>
    </Container>
  );
}
