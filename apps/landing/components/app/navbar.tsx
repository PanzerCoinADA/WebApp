"use client";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button>{item.label}</Button>
        </Link>
      ))}
    </Flex>
  );
}
