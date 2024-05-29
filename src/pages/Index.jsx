import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
        {/* Main Headline Section */}
        <Box flex={3} mr={{ md: 8 }}>
          <Heading size="xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="lg">
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
              <Text>Trending Article 1</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text>Trending Article 2</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text>Trending Article 3</Text>
            </Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.600" }}>
              <Text>Trending Article 4</Text>
            </Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;