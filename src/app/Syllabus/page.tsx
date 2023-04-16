'use client'
import React from 'react'
import Home from '../components/Home'
import { Box, Center, Container, Divider, Flex, Heading, Text, SkeletonCircle } from '@chakra-ui/react'
import { Cards, core } from '../components/database'

export default function page() {
  return (
    <>
    <Home title='Syllabus' src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/08065913/BSc-IT-Scope.jpg'/>
    <Box pt='30px'>
      <Container maxW={1400}>
        <Center flexDir='column' >
          <Heading size='2xl' >Course Syllabus</Heading>
          <Text mt='20px' textAlign='center' px='130px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
        </Center>
        <Center my='10px' flexDir='column' >
          <Heading >Core Courses (Common in All Specializations)</Heading>
          <Text textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses:</Text>
        </Center>
        {/* First # Quarters Boxes */}
         <Center>
        <Flex mt='40px' textAlign='center' gap='20px'>
          {core.map((ins)=>( 
          <Box pt='25px' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' key={ins.id}>
            <Heading>{ins.heading}</Heading>
            <Divider borderWidth='medium' borderColor='gray.500'/>
            <Text pt='5px'>{ins.text}</Text>
          </Box>
        ))} 
        </Flex> 
          </Center>
          <Box my='40px'>
        <Center flexDir='column' >
          <Heading >Specialized Tracks</Heading>
          <Text textAlign='center' pt='10px' px='130px'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
        </Center>
          </Box>
      </Container>
      
      {/* using map function to show all Specialization track boxes  */}
      <Container maxW={1400} pb='20px' bgSize='cover' bgAttachment='fixed' bgImage='https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=2000'>
        {Cards.map((ins) => (
      <Box key={ins.id}>
      <Center my='10px' flexDir='column' >
          <Heading >{ins.heading1}</Heading>
          <Text textAlign='center' px='130px'>{ins.text1}</Text>
        </Center>
        <Center>
        <Flex mt='30px' textAlign='center' gap='20px'>
          <Box pt='25px' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' bgColor='white'>
            <Heading>{ins.heading2}</Heading>
            <Divider borderWidth='medium' borderColor='gray.500'/>
            <Text fontWeight='medium' pt='5px'>{ins.text2}</Text>
          </Box>
          <Box pt='25px' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' bgColor='white'>
            <Heading>{ins.heading3}</Heading>
            <Divider borderWidth='medium' borderColor='gray.500'/>
            <Text fontWeight='medium' pt='5px'>{ins.text3}</Text>
          </Box>
        </Flex>  
          </Center>
          </Box>
          ))}

      </Container>
    </Box>
    </>
  )
}
