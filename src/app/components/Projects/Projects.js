"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Button,
  Image,
} from "@chakra-ui/react";

// Dữ liệu các dự án mẫu
const projectData = [
  {
    title: "Device Management",
    description: "A device management system for Phenikaa University.",
    image: "/assets/images/device.png",
    alt: "Device Management System at Phenikaa University",
    link: "https://phenikaa-uni.top/login",
    button: true,
  },
  {
    title: "Charger Management",
    description: "A charger management system for electric vehicles.",
    image: "/assets/images/charge.png",
    alt: "Charger Management System for Electric Vehicles",
    link: "https://your-project-link.com",
    button: false,
  },
  {
    title: "Smart Payment System",
    description: "A smart payment system for online transactions.",
    image: "/assets/images/smartPay.png",
    alt: "Smart Payment System for Online Transactions",
    link: "https://your-project-link.com",
    button: false,
  },
  {
    title: "IRIS School",
    description: "Maintain and upgrade IRIS school management website.",
    image: "/assets/images/irirs.png",
    alt: "IRIS School Management System Website",
    link: "https://your-project-link.com",
    button: false,
  },
  {
    title: "Phenikaa University",
    description: "Maintain and upgrade Phenikaa University management website.",
    image: "/assets/images/phenikaa.png",
    alt: "Phenikaa University Management Website",
    link: "https://your-project-link.com",
    button: false,
  },
];

export default function Projects() {
  return (
    <Box p={10} bg="white" boxShadow="lg" id="projects">
      {/* Heading SEO-friendly */}
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="black">
        My Projects
      </Heading>

      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={10}
        border={{
          base: "1px solid #000",
          md: "1px solid #000",
          lg: "2px solid #000",
        }}
        p={4}
        borderRadius="lg"
      >
        {projectData.map((project, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            justify="center"
            bg="gray.50"
            p={3}
            borderRadius="lg"
            boxShadow="2xl"
            _hover={{
              bg: "gray.300",
              transform: "scale(1.05)",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <Image
              src={project.image}
              alt={project.alt}
              boxSize="200px"
              w={350}
              h={250}
              mb={4}
              borderRadius="lg"
            />
            <Heading as="h2" size="md" mb={2} textAlign="center" color="black">
              {project.title}
            </Heading>
            <Text mb={4} color="gray.600" textAlign="center">
              {project.description}
            </Text>
            <Button
              as="a"
              href={project.link}
              target="_blank"
              colorScheme="teal"
              _hover={{
                textDecoration: project.button ? "underline" : "none",
                cursor: project.button ? "pointer" : "not-allowed",
              }}
              isDisabled={!project.button}
            >
              {"View Project"}
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
