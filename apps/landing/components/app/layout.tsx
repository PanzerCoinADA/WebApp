import { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Container } from "@chakra-ui/react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
