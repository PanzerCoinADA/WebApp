"use client";

import { useState, useEffect } from "react";
import {
  Img,
  Box,
  Heading,
  Center,
  Link,
  IconButton,
  Stack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";
import { EaseInAnimation } from "./animations/EaseInAnimation";

const WISDOM_RESPONSES = [
  "Smart contracts are just fancy if-else statements.",
  "The true blockchain was the friends we made along the way.",
  "Not your keys, not your crypto, dear wanderer.",
  "A private key should remain more private than your nudes.",
  "The best time to invest was yesterday, the second best time is today. HODL!",
  "When in doubt, delegate to a single pool operator.",
  "The only constant in crypto is growth.",
  "Every NFT is unique, just like everyone else.",
  "Hail Hydra.",
  "In the end, it's all just fancy spreadsheets.",
  "Sidechains are the secret paths to infinite possibilities.",
  "*Bullish panzer noises*",
  "Cardano is one of the most secure and decentralized blockchains.",
  "Just buy some ADA, Bruder.",
  "Charles is the goat.",
  "ADA is going to reach $20 this cycle.",
  "Hydra allows cardano to scale up to millions of TPS.",
  "Ouroboros is the most secure and liquid proof-of-stake protocol.",
  "Get wisdom, get $PANZER.",
  "Once all blockchains join forces, mass adoption is inevitable.",
  "Decentralization is the most important thing.",
  "Hydra is blitz fast.",
  "Not your keys, not your coins. Beware the shiny exchanges.",
  "In bear markets, diamond hands are forged.",
  "The blockchain never forgets. Think before you send.",
  "When the market dips, DCA — don't panic.",
  "A pump is temporary; FOMO is forever.",
  "Cardano has more than 3000 independent validators.",
  "Block confirmations take seconds; regret lasts forever.",
  "Wake not for the midnight chart; your sanity has value.",
  "Always double-check the wallet address. Your future depends on it.",
  "The whale sells last, but the shrimp feels it first.",
  "Crypto is volatile, but so is your mood. Stay calm.",
  "Bear markets are for building.",
  "A paper wallet survives the fire, but not your irresponsability.",
  "In crypto, your greatest enemy is your own impatience.",
  "$PANZER is my favorite memecoin.",
  "Panzer is currently trading. Try again later.",
  "We aware of scammers, brave crypto pioneer.",
];

export default function PanzerWisdom() {
  const [wisdom, setWisdom] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  useEffect(() => {
    document.body.classList.add("ww2-background");
    return () => {
      document.body.classList.remove("ww2-background");
    };
  }, []);

  const askPanzer = () => {
    setIsAsking(true);
    setTimeout(() => {
      const randomWisdom =
        WISDOM_RESPONSES[Math.floor(Math.random() * WISDOM_RESPONSES.length)];
      setWisdom(randomWisdom);
      setIsAsking(false);
    }, 1000);
  };

  const MemeText = ({
    children,
    className = "",
  }: {
    children: any;
    className?: string;
  }) => (
    <p
      className={`font-bold px-4 py-2 inline-block max-w-[80%] ${className}`}
      style={{
        fontFamily: "'Impact', system-ui",
        color: "#FFFFFF",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        lineHeight: "1",
        textShadow: `
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000,
          0 2px 0 #000,
          0 -2px 0 #000,
          2px 0 0 #000,
          -2px 0 0 #000
        `,
        fontSize: "2rem",
      }}
    >
      {children.split("\n").map((line: string, index: number) => (
        <span key={index} className="meme-text">
          {line}
          <br />
        </span>
      ))}
    </p>
  );

  return (
    <EaseInAnimation>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 damaged-overlay">
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative meme-container">
            <Heading
              my="12"
              alignSelf={"center"}
              fontWeight={"extrabold"}
              color="white"
              size={{ base: "xl", md: "3xl" }}
              textAlign={"center"}
            >
              Panzer Of The Lake
            </Heading>
            <Box>
              <Box
                position="absolute"
                top={{ base: "36", md: "48" }}
                left={{ base: "24", md: "32" }}
              >
                <MemeText>{"Oh $PANZER of the lake"}</MemeText>
                <MemeText>{"what is your wisdom?"}</MemeText>
              </Box>
              <Img
                src="/images/panzer.png"
                alt="Panzer of the Lake"
                className="absolute top-0 left-0 w-full h-auto rounded-lg"
                style={{ zIndex: -1 }}
              />
            </Box>

            {wisdom &&
              !isAsking &&
              (wisdom.length > 61 ? (
                <Box
                  position="absolute"
                  bottom={{ base: "24", md: "44" }}
                  left="4"
                  animation={"emerge 0.7s ease-in-out"}
                  maxW={{ base: "80", md: "lg" }}
                >
                  <MemeText>{wisdom}</MemeText>
                </Box>
              ) : (
                <Box
                  position="absolute"
                  bottom={{ base: "28", md: "52" }}
                  left="4"
                  animation={"emerge 0.7s ease-in-out"}
                  maxW={{ base: "80", md: "lg" }}
                >
                  <MemeText>{wisdom}</MemeText>
                </Box>
              ))}
          </div>
          <Center pt="6">
            <Stack align="center" spacing="4">
              <HStack>
                <Button
                  onClick={askPanzer}
                  disabled={isAsking}
                  bgColor="white"
                  transition={"0.3s ease-in-out"}
                  _hover={{ bgColor: "black", textColor: "white" }}
                  size={{ base: "md", md: "lg" }}
                >
                  {isAsking ? "Summoning wisdom..." : "Ask for wisdom"}
                </Button>
                <Link
                  href={
                    "https://www.snek.fun/token/b011adf5f3b4ca762df01e6e3523f247a64bc87b07d075106063b7e5.50616e7a657220436f696e"
                  }
                  target="_blank"
                >
                  <Button
                    onClick={askPanzer}
                    variant="outline"
                    disabled={isAsking}
                    textColor="white"
                    transition={"0.3s ease-in-out"}
                    _hover={{ bgColor: "black", textColor: "white" }}
                    size={{ base: "md", md: "lg" }}
                  >
                    {"Buy $PANZER"}
                  </Button>
                </Link>
              </HStack>
              <Link href={"https://www.x.com/panzercoin"} target="_blank">
                <IconButton
                  as="button"
                  aria-label={""}
                  icon={<FaXTwitter fontSize="1.25rem" />}
                  color={"white"}
                  transition="0.5s"
                  rounded="xl"
                  bg={"rgba(255, 255, 255, 0.08)"}
                  backdropFilter="auto"
                  backdropBlur="5px"
                  _hover={{
                    color: "gray.200",
                    bgColor: "rgba(255,255,255,0.3)",
                  }}
                />
              </Link>
            </Stack>
          </Center>
        </div>
      </div>
    </EaseInAnimation>
  );
}
