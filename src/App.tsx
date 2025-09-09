import { Box, Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="6xl" py={6}>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
