"use client";
import { Box, Flex, Text, IconButton, Stack, Link } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZalo } from "react-icons/si"; // Zalo icon

export default function Footer() {
  return (
    <Box bg="orange.300" color="white" py={10}>
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        px={10}
      >
        {/* Text footer copyright */}
        <Text mb={{ base: 4, md: 0 }}>
          © 2024 Van Thuc. All rights reserved.
        </Text>

        {/* Liên kết mạng xã hội */}
        <Stack direction="row" spacing={4} align="center">
          <Link href="https://www.facebook.com/dinhvanthuc1308/" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="facebook"
              size="lg"
            />
          </Link>

          <Link href="https://github.com/DinhVanThuc1308" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              colorScheme="blackAlpha"
              size="lg"
            />
          </Link>

          <Link href="https://zalo.me/yourprofile" isExternal>
            <IconButton
              aria-label="Zalo"
              icon={<SiZalo />}
              colorScheme="messenger"
              size="lg"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/v%C4%83n-th%E1%BB%A9c-%C4%91inh-9760732ab/"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="linkedin"
              size="lg"
            />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
