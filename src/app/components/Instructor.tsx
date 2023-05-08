import { Avatar, Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {data} from '../components/database'
import {RevealList} from 'next-reveal'

export default function Instructor() {
  return (
    <Box>
        <Container maxW={1400}>
        <RevealList interval={60} delay={500} origin="top" duration={1000} distance='500px' reset={true}>
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
            </RevealList>
        </Container>
    </Box>
  )
}
