import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#fff1e5">
      {/* Navigation Bar */}
      <Box bg="#fff1e5" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Home</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>World</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Business</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Markets</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Opinion</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
        {/* Main Headline Section */}
        <Box flex={3} mr={{ md: 8 }}>
          <Heading size="xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="lg" color="#333">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec lorem cursus, a
            fermentum nisi facilisis. Integer nec odio nec nulla cursus tincidunt. Donec vitae orci nec urna
            tincidunt tincidunt.
          </Text>
        </Box>

        {/* Sidebar with Trending Articles */}
        <Box flex={1} mt={{ base: 8, md: 0 }}>
          <Heading size="md" mb={4}>Trending Articles</Heading>
          <VStack align="start" spacing={4}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text color="#333">Trending Article 1</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text color="#333">Trending Article 2</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text color="#333">Trending Article 3</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text color="#333">Trending Article 4</Text>
            </Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="#fff1e5" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Contact</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Privacy Policy</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "#333" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;