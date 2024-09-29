"use client";
import { Flex, Box, Heading, Text, Progress, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      justify="center"
      align="center"
      direction={{ base: "column", md: "row" }}
      minH="0vh"
      bg="white"
      p={8}
      id="about-section"
    >
      {/* Hình ảnh bên trái */}
      <Box flex="1" textAlign="center" position="relative">
        <Image
          src="/assets/images/TAIN3147.jpg"
          alt="Van Thuc - Web Developer and Mobile Developer"
          borderRadius="12px"
          boxSize="400px"
          h={450}
          objectFit="cover"
          boxShadow="dark-lg"
          rounded="md"
          bg="white"
        />
      </Box>

      {/* Nội dung bên phải */}
      <Box flex="1" textAlign="left" p={6}>
        <Heading as="h2" size="xl" mb={4} color={"black"}>
          About Me
        </Heading>
        <Text mb={6} color="gray.600">
          I am Van Thuc, a web developer with expertise in building dynamic and
          user-friendly websites and mobile applications. I have strong
          experience in web development, mobile development, and graphic design,
          delivering efficient and scalable solutions tailored to client needs.
        </Text>

        <Text mb={6} color="gray.600">
          I graduated from Phenikaa University, where I also interned at
          companies like AntSoft, working in the AI lab of the university.
          Currently, I am working at PHX Smart School, where I continue to
          enhance my skills and contribute to innovative solutions in education
          technology.
        </Text>

        {/* Các kỹ năng */}
        <Box>
          <Heading as="h3" size="md" mb={2} color={"black"}>
            Website Development
          </Heading>
          <Progress value={95} size="lg" colorScheme="orange" mb={4} />

          <Heading as="h3" size="md" color={"black"} mb={2}>
            Mobile Development
          </Heading>
          <Progress value={90} size="lg" colorScheme="orange" mb={4} />

          <Heading as="h3" size="md" color={"black"} mb={2}>
            App Design
          </Heading>
          <Progress value={75} size="lg" colorScheme="orange" mb={4} />

          <Heading as="h3" size="md" color={"black"} mb={2}>
            Graphic Design
          </Heading>
          <Progress value={85} size="lg" colorScheme="orange" mb={4} />
        </Box>
      </Box>
    </Flex>
  );
}
