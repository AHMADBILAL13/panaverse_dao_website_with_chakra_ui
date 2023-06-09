import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from '../../../public/logo.png'
import gif from '../../../public/animation.gif';
import { RevealWrapper } from "next-reveal";



export default function Banner() {
  return (
    <>
    <Box bgAttachment='fixed' bgImage='bg.png'>
      <RevealWrapper origin="top" delay={200} duration={1000} distance='500px' reset={true}>
      <Container maxW={1400}>
        <Flex pt={{lg:'150px',base:'30px'}} pb='100px' px={{lg:'40px',base:'5px'}} display={{lg:'flex',base:'grid'}}>
          <Box flexBasis='50%'>
            <Heading size='2xl'>
              Getting Ready for the Next Generation and Future of the Internet -
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </Heading>
            <Text mt='10px' fontSize='18px' fontWeight='semibold' color='ActiveCaption'>
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program
            </Text>
            <Button mt='10px' size='lg' colorScheme='blackAlpha' >More Info</Button>
          </Box>
          <Box flexBasis='50%' mt={{lg:'-70',base:'0' }}>
            <Image src={logo} alt="Image"  />
          </Box>
        </Flex>
      </Container>
      </RevealWrapper>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex gap={{lg:'100px',base:'10px'}} display={{lg:'flex',base:'grid'}}>
                <Box flexBasis='50%'>
            <RevealWrapper origin="left" delay={200} duration={1000} distance='500px' reset={true}>
                    <Image src={gif} alt="image"/>
            </RevealWrapper>
                </Box>
                <Box flexBasis='50%' pt={{lg:'80px', base:'10px'}} pb={{lg:'0',base:'20px'}}>
            <RevealWrapper origin="right" delay={200} duration={1000} distance='500px' reset={true}>  
                    <Heading size='2xl'>Program of Studies</Heading>
                    <Text pt='50px' pr='80px' fontSize='18px' fontWeight='semibold' color='ActiveCaption'>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development.</Text>
                    <Button mt='10px' size='lg' colorScheme='blackAlpha'>Read More</Button>
            </RevealWrapper>    
                </Box>
            </Flex>
        </Container>
    </Box>
    </>
  );
}
