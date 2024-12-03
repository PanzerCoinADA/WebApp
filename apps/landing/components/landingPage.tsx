"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Img, Box, Heading, Center } from "@chakra-ui/react";

const WISDOM_RESPONSES = [
  "Smart contracts are just fancy if-else statements.",
  "The true blockchain was the friends we made along the way.",
  "Not your keys, not your crypto, dear wanderer.",
  "A private key should remain more private than your nudes.",
  "The best time to buy was yesterday, the second best time is... HODL.",
  "When in doubt, delegate to a single pool operator.",
  "The only constant in crypto is growth.",
  "Every NFT is unique, just like everyone else.",
  "Heil Hydra.",
  "In the end, it's all just fancy spreadsheets.",
  "Sidechains are the secret paths to infinite possibilities.",
  "*Bullish panzer noises*",
  "Cardano is one of the most secure and decentralized blockchains.",
  "Just buy ADA and chill.",
  "Charles is the goat.",
  "ADA is going to reach $20\nthis cycle.",
  "Hydra allows cardano to scale up to 1 million TPS.",
  "Get wisdom, get $PANZER.",
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
        lineHeight: "1.2",
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
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 damaged-overlay">
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative meme-container">
          <Heading
            my="12"
            alignSelf={"center"}
            fontWeight={"extrabold"}
            color="white"
            textAlign={"center"}
          >
            Panzer Of The Lake
          </Heading>
          <Box>
            <Box position="absolute" top="48" left="32">
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

          {wisdom && !isAsking && (
            <Box
              position="absolute"
              bottom="48"
              left="8"
              animation={"emerge 0.7s ease-in-out"}
              maxW="lg"
            >
              <MemeText>{wisdom}</MemeText>
            </Box>
          )}
        </div>
        <Center pt="10">
          <Button
            onClick={askPanzer}
            disabled={isAsking}
            className="bg-[#8B4513] text-[#f0e68c] hover:bg-[#A0522D] disabled:bg-[#5E2605] text-lg px-6 py-3 border-2 border-[#f0e68c] damaged-button"
          >
            {isAsking ? "Summoning wisdom..." : "Ask for wisdom"}
          </Button>
        </Center>
      </div>
    </div>
  );
}
