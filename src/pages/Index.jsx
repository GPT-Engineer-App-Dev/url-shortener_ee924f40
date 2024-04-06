import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useClipboard, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { FaCopy, FaLink } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { hasCopied, onCopy } = useClipboard(shortUrl);

  const handleShorten = () => {
    // This is a mock shortening function. In a real app, this would be an API call.
    const mockShortenedUrl = `https://short.url/${Math.random().toString(36).substr(2, 5)}`;
    setShortUrl(mockShortenedUrl);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <FormControl id="url" isRequired>
          <FormLabel>Long URL</FormLabel>
          <Input placeholder="Enter your long URL here" value={url} onChange={(e) => setUrl(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaLink />} colorScheme="blue" onClick={handleShorten} isDisabled={!url}>
          Shorten URL
        </Button>
        {shortUrl && (
          <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text mb={2}>Shortened URL:</Text>
            <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                URL Shortened!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                <Text as="span" fontWeight="bold">
                  {shortUrl}
                </Text>
              </AlertDescription>
            </Alert>
            <Button onClick={onCopy} ml={2} leftIcon={<FaCopy />} size="sm">
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
