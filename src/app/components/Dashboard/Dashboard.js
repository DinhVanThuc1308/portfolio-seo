"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Dashboard() {
  // Hàm xử lý cuộn xuống phần About
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      direction={{ base: "column", md: "row" }}
      minH="80vh"
      bg="white"
      pl={10}
      id="Dashboard"
    >
      {/* Nội dung bên trái */}
      <Box flex="1" textAlign={{ base: "center", md: "left" }} p={6}>
        <Text fontSize="lg" mb={2} color={"gray.500"}>
          Hi, I am
        </Text>
        <Heading as="h1" size="xl" mb={2} color="orange.400">
          Van Thuc - Developer
        </Heading>
        <Heading as="h4" size="xl" mb={4} color="teal.500">
          Professional Web Development Services
        </Heading>

        {/* Biểu tượng mạng xã hội */}
        <Stack
          direction="row"
          spacing={4}
          mt={6}
          justify={{ base: "center", md: "start" }}
        >
          <Link href="https://facebook.com" isExternal aria-label="Facebook">
            <Icon as={FaFacebook} boxSize={6} color="black" />
          </Link>
          <Link href="https://twitter.com" isExternal aria-label="Twitter">
            <Icon as={FaTwitter} boxSize={6} color="black" />
          </Link>
          <Link href="https://instagram.com" isExternal aria-label="Instagram">
            <Icon as={FaInstagram} boxSize={6} color="black" />
          </Link>
          <Link href="https://linkedin.com" isExternal aria-label="LinkedIn">
            <Icon as={FaLinkedin} boxSize={6} color="black" />
          </Link>
        </Stack>
        <Button
          colorScheme="orange"
          size="lg"
          color="white"
          mt={6}
          onClick={handleScrollToAbout}
          _hover={{
            bg: "orange.600",
            transform: "scale(1.05)",
            boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.8)", // Ánh sáng khi hover
          }}
          transition="all 0.3s ease-in-out"
        >
          Learn More
        </Button>
      </Box>

      {/* Hình ảnh bên phải */}
      <Box flex="1" position="relative" textAlign="center">
        <Image
          src="/assets/images/Ambarssador.jpg"
          alt="Van Thuc - Web Developer Profile Image"
          borderRadius="12px"
          boxSize="350px"
          boxShadow="dark-lg"
          rounded="md"
          bg="white"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}
