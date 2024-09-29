"use client";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  // Tạo các tham chiếu đến các phần của trang
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      bg="teal.500"
      p={4}
      boxShadow="md"
      position="fixed"
      w={"100%"}
      zIndex={100}
    >
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">
          <Image
            src="/assets/images/abc.png"
            alt="Logo"
            width="70%"
            height="70%"
            onClick={() => scrollToSection("Dashboard")}
            _hover={{ cursor: "pointer" }}
          />
        </Heading>

        <Spacer />
        <Flex as="nav" gap={4}>
          <Link
            onClick={() => scrollToSection("about-section")}
            color="white"
            fontWeight="bold"
            _hover={{ color: "gray.300" }}
            cursor="pointer"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection("tech")}
            color="white"
            fontWeight="bold"
            _hover={{ color: "gray.300" }}
            cursor="pointer"
          >
            Technologies
          </Link>
          <Link
            onClick={() => scrollToSection("projects")}
            color="white"
            fontWeight="bold"
            _hover={{ color: "gray.300" }}
            cursor="pointer"
          >
            Projects
          </Link>
          <Link
            onClick={() => scrollToSection("contact")}
            color="white"
            fontWeight="bold"
            _hover={{ color: "gray.300" }}
            cursor="pointer"
          >
            Contact
          </Link>
        </Flex>

        {/* Nút hành động */}
        <Button
          ml={4}
          colorScheme="teal"
          variant="outline"
          color="white"
          as="a"
          href="mailto:vanthuc1308work@gmail.com"
        >
          Send Email
        </Button>
      </Flex>
    </Box>
  );
}
