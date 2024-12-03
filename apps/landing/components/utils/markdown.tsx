import React, { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Heading, Text, Code, List, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Markdown({ markdown }: { markdown: string }) {
  const components = {
    h1: ({ children }: PropsWithChildren) => (
      <Heading as="h1" size="2xl" mb={4}>
        {children}
      </Heading>
    ),
    h2: ({ children }: PropsWithChildren) => (
      <Heading as="h2" size="xl" mb={4}>
        {children}
      </Heading>
    ),
    h3: ({ children }: PropsWithChildren) => (
      <Heading as="h3" size="lg" mb={4}>
        {children}
      </Heading>
    ),
    p: ({ children }: PropsWithChildren) => (
      <Text fontSize="md" mb={2}>
        {children}
      </Text>
    ),
    code: ({ inline, children }: PropsWithChildren<{ inline?: boolean }>) =>
      inline ? (
        <Code px={1} py={0.5} borderRadius="md">
          {children}
        </Code>
      ) : (
        <Box as="pre" p={4} bg="gray.100" rounded="md" overflow="auto">
          <Code>{children}</Code>
        </Box>
      ),
    a: ({ href, children }: PropsWithChildren<{ href?: string }>) => (
      <Link href={href!} color="teal.500">
        {children}
      </Link>
    ),
    ul: ({ children }: PropsWithChildren) => (
      <List.Root as="ul" ml={4} mb={4}>
        {children}
      </List.Root>
    ),
    ol: ({ children }: PropsWithChildren) => (
      <List.Root as="ol" ml={4} mb={4}>
        {children}
      </List.Root>
    ),
    li: ({ children }: PropsWithChildren) => (
      <List.Item mb={2}>{children}</List.Item>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <Image src={src} alt={alt} borderRadius="md" mb={4} />
    ),
  };

  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
