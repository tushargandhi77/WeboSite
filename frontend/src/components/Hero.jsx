import React, { useState, useEffect } from "react";
import { chakra, Stack, Text, Button, Box, Link } from "@chakra-ui/react";
import { GiCoffeeCup } from "react-icons/gi";
import { Link as Navlink } from "react-router-dom";

const textArray = [
    "# Innovation drives technology forward",
    "# Learning never stops evolving",
    "# Internships shape future careers",
];

const Typewriter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const typingSpeed = 200; // Adjust the typing speed as needed (lower value = faster)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const targetText = textArray[currentIndex];
                if (prevText === targetText) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                    return "";
                }
                const nextChar = targetText.charAt(prevText.length);
                return prevText + nextChar;
            });
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <span>
            {currentText}
            <span>|</span>
        </span>
    );
};

const HeroSection = () => {
    return (
        <Box
            p={{ base: 8, md: 14 }}
            bgColor={"whitesmoke"}
            m={4}
            mt={{ base: 12, md: 18 }}
        >
            <Stack direction="column" spacing={6} alignItems="center">
                <Box
                    mt={10}
                    py={2}
                    px={3}
                    bg="red.300"
                    w="max-content"
                    color="white"
                    rounded="md"
                    fontSize="md"
                >
                    <Stack direction={{ base: "column", sm: "row" }}>
                        <Text fontWeight="bold">AmbiTech Innovations 🚀</Text>
                    </Stack>
                </Box>
                <chakra.h1
                    fontSize={{ base: "4xl", sm: "5xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    maxW="800px"
                >
                    Welcome to the  AmbiTech
                    <br />
                    <chakra.span
                        color="red.600"
                        bg="linear-gradient(transparent 50%, #f7b2b7 50%)"
                    >
                        <Typewriter />
                    </chakra.span>
                </chakra.h1>
                <Text maxW="850px" fontSize="xl" textAlign="center" color="gray.500">
                    We offer professional internships and courses in cutting-edge fields like web technologies, machine learning, data science, Android development, and graphics. Our programs are designed to equip you with the practical skills and industry knowledge needed to excel in today's fast-paced tech landscape, helping you build a strong foundation for your career.
                </Text>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    w={{ base: "100%", sm: "auto" }}
                    spacing={5}
                >
                    <Link as={Navlink} to="/editor">
                        <Button
                            colorScheme="red"
                            variant="outline"
                            rounded="md"
                            size="lg"
                            height="3.5rem"
                            fontSize="1.2rem"
                            onClick={() => window.open("https://forms.gle/XRtx2sp7XnMGrR4x6", "_blank")}
                        >
                            Direct Apply
                        </Button>

                    </Link>
                    <Button
                        leftIcon={<GiCoffeeCup />}
                        colorScheme="gray"
                        variant="outline"
                        rounded="md"
                        size="lg"
                        height="3.5rem"
                        fontSize="1rem"
                        borderColor="black.500"
                    >
                        Buy me a coffee
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default HeroSection;
