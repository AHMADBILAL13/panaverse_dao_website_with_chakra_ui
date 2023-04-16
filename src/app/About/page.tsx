"use client";
import React from "react";
import Home from "../components/Home";import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
 Button,
 Divider
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import Instructor from "../components/Instructor";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

export default function page() {
  return (
    <>
      <Home
        title="About"
        src="https://img.mhlnews.com/files/base/ebm/mhlnews/image/2022/06/robots_in_the_office.62b67234d4d13.png?auto=format,compress&fit=crop&h=278&w=500&q=45"
      />
      <Box>
        <Container maxW={1400}>
          <Flex
            my="50px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "gird" }}
          >
            <Box flexBasis="50%" m="auto">
              <Image src="/president.png" alt="President Image" mx="auto" />
            </Box>
            <Box flexBasis="50%">
              <Heading>Dr Arif Alvi</Heading>
              <Divider borderWidth='thick' borderColor='gray.500' />
              <Text mt={5}>
                Dr. Arif Alvi was sworn in as the 13th President of Islamic
                Republic of Pakistan on 9th September 2018.
              </Text>
              <Text mt={5}>
                Dr. Arif Alvi was born in 1949 and completed his early education
                in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
                Montmorency College of Dentistry, Lahore where he was declared
                the “Best Graduate”. He completed his Masters of Science in the
                field of Prosthodontics from University of Michigan (1975) and
                in Orthodontics from University of Pacific, San Francisco
                (1982). He was awarded fellowship ‘Diplomatic American Board of
                Orthodontists (1995)’.
              </Text>
              <Text mt={5}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            my="50px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "gird" }}
          >
            <Box flexBasis="50%">
              <Heading>Panaverse DAO</Heading>
              <Divider borderWidth='thick' borderColor='gray.500' />
              <Text mt={5}>
                Panaverse DAO is a community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
                Panaverse DAO is struggling to produce professional metaverse
                developers from Pakistan for the upcoming Era of Internet
              </Text>
              <Text mt={5}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text>
            </Box>
            <Box flexBasis="50%" m="auto">
              <Image src="/bigLogo.png" alt="Panaverse Logo" mx="auto" />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            my="50px"
            px={{ lg: "50px", base: "20px" }}
            display={{ lg: "flex", base: "gird" }}
          >
            <Box flexBasis="50%" m="auto">
              <Image src="/zia.webp" alt="Zia Khan" m="auto" />
            </Box>
            <Box flexBasis="50%" mt="0px">
              <Heading>Zia Khan</Heading>
              <Divider borderWidth='thick' borderColor='gray.500' />
              <Text mt={5}>
                CEO of Panacloud, the world’s first Integrated API Ownership
                Economy, Crowdfunding, and Development Platform. Volunteer COO
                of PIAIC, an initiative by the President of Pakistan for AI and
                computing mass education. Mentor and software developer with 20+
                years of expertise in cloud and serverless computing, software
                design, project management, and API and App development. Expert
                in concept, business modeling & strategy development for
                startups, specializing in DeFi and token economics. Mentored and
                trained hundreds of thousands of developers. Triple masters
                degrees in business administration, engineering, and finance
                from Arizona State University. Master in Economics from KU.
                Certified Public Accountant and Certified Management Accountant
                in USA.
              </Text>
              <Text mt={5}>
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructor />
    </>
  );
}
