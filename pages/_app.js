import "../styles/globals.css";
import {
  ChakraProvider,
  Box,
  Text,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box w="100%" bg={"red"} py="0.5%" color="white">
        <HStack>
          <Text fontSize={"2xl"} ml="1%">
            ROBOSERVICE
          </Text>
          <Spacer />
          <Box >
            <HStack >
              <Button variant="unstyled">Home</Button>
              <Button variant="unstyled">My Processes</Button>
              <Button variant="unstyled">All Processes</Button>
              <Button variant="unstyled">Status</Button>
              <Button variant="unstyled" pr='2%'>Team</Button>
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
