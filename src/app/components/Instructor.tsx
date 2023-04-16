import { Avatar, Box, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {data}from '../components/database'

export default function Instructor() {
  return (
    <Box>
        <Container maxW={1400}>
            <Center>
                <Heading pb='20px'>Our Instructor</Heading>
            </Center>
            <Flex>
                {data.map((ins) => ( 
                    <Box key={ins.id}>
                    <Center pb='10px'>
                        <Avatar name={ins.name} src={ins.src} size='2xl' />
                    </Center>
                    <Heading textAlign='center' size='lg'>{ins.heading}</Heading>
                    <Text px='30px' py='10px' textAlign='center'>{ins.text}</Text>
                </Box>
                    ))}
            </Flex>
        </Container>
    </Box>
  )
}
