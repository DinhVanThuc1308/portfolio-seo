"use client";
import {
  Stack,
  Button,
  Flex,
  IconButton,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiZalo } from "react-icons/si"; // Zalo icon

export default function Contact() {
  return (
    <Box p={10} bg="white" boxShadow="lg" id="contact">
      {/* Heading với thẻ h1 để tối ưu SEO */}
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="black">
        Contact Me!
      </Heading>

      {/* Đoạn mô tả sử dụng thẻ <p> để SEO */}
      <Text as="p" color="gray.500" textAlign="center" mb={8}>
        I'm always looking for new opportunities to collaborate with like-minded
        individuals. Feel free to reach out and let's discuss how we can work
        together.
      </Text>

      {/* Nút gửi email */}
      <Flex justify="center">
        <Button
          as="a"
          href="mailto:vanthuc1308work@gmail.com"
          colorScheme="teal"
          variant="solid"
          size="lg"
        >
          Send Email
        </Button>
      </Flex>

      {/* Các biểu tượng mạng xã hội */}
      <Flex justify="center" mt={8}>
        <Stack direction="row" spacing={4} align="center">
          {/* Icon Facebook */}
          <IconButton
            as="a"
            href="https://www.facebook.com/dinhvanthuc1308/"
            aria-label="Facebook - Connect with me on Facebook"
            icon={<FaFacebook />}
            colorScheme="facebook"
            size="lg"
          />

          {/* Icon GitHub */}
          <IconButton
            as="a"
            href="https://github.com/DinhVanThuc1308"
            aria-label="GitHub - View my GitHub profile"
            icon={<FaGithub />}
            colorScheme="blackAlpha"
            size="lg"
          />

          {/* Icon Zalo */}
          <IconButton
            as="a"
            href="https://zalo.me/yourprofile"
            aria-label="Zalo - Connect with me on Zalo"
            icon={<SiZalo />}
            colorScheme="messenger"
            size="lg"
          />

          {/* Icon LinkedIn */}
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/v%C4%83n-th%E1%BB%A9c-%C4%91inh-9760732ab/"
            aria-label="LinkedIn - Connect with me on LinkedIn"
            icon={<FaLinkedin />}
            colorScheme="linkedin"
            size="lg"
          />
        </Stack>
      </Flex>
    </Box>
  );
}
