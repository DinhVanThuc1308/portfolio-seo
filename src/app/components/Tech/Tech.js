"use client";
import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

// Danh sách các công nghệ với đường dẫn tới logo của từng công nghệ
const techStack = [
  {
    name: "Flutter",
    logo: "/assets/logos/flutter.svg",
    alt: "Flutter Logo - Cross-platform App Development",
  },
  {
    name: "Dart",
    logo: "/assets/logos/dart.png",
    alt: "Dart Logo - Programming Language for Flutter",
  },
  {
    name: "ReactJS",
    logo: "/assets/logos/react.png",
    alt: "ReactJS Logo - JavaScript Library for UI Development",
  },
  {
    name: "NextJS",
    logo: "/assets/logos/nextjs.png",
    alt: "NextJS Logo - React Framework for Web Development",
  },
  {
    name: "PHP",
    logo: "/assets/logos/php.png",
    alt: "PHP Logo - Server-side Scripting Language",
  },
  {
    name: "HTML",
    logo: "/assets/logos/html.png",
    alt: "HTML Logo - Markup Language for Web Development",
  },
  {
    name: "CSS",
    logo: "/assets/logos/css.png",
    alt: "CSS Logo - Styling Language for Web Design",
  },
  {
    name: "JavaScript",
    logo: "/assets/logos/javascript.png",
    alt: "JavaScript Logo - Programming Language for Web Development",
  },
  {
    name: "Laravel",
    logo: "/assets/logos/laravel.png",
    alt: "Laravel Logo - PHP Framework for Web Applications",
  },
  {
    name: "MongoDB",
    logo: "/assets/logos/mongodb.png",
    alt: "MongoDB Logo - NoSQL Database for Modern Applications",
  },
  {
    name: "MySQL",
    logo: "/assets/logos/mysql.svg",
    alt: "MySQL Logo - Open-source Relational Database",
  },
];

export default function Tech() {
  return (
    <Box p={10} bg="white" boxShadow="lg">
      {/* Heading với thẻ h1 thay vì h2 để SEO tốt hơn */}
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="black">
        Technologies I Work With
      </Heading>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <SimpleGrid
          columns={[2, 3, 5]}
          spacing={10}
          p={5}
          border={{
            base: "1px solid #000",
            md: "1px solid #000",
            lg: "2px solid #000",
          }}
          borderRadius="lg"
        >
          {techStack.map((tech) => (
            <Flex
              key={tech.name}
              align="center"
              justify="center"
              direction="column"
              p={5}
              borderRadius="lg"
              _hover={{
                bg: "gray.100",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Image
                src={tech.logo}
                alt={tech.alt} // alt text rõ ràng để SEO và Accessibility tốt hơn
                boxSize="80px"
                mb={4}
                objectFit={"center"}
              />
              <Heading as="h3" size="md" color="gray.700" textAlign="center">
                {tech.name}
              </Heading>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
