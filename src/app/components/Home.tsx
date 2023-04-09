'use client'
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello:any) {
  return (
    <Box bgImage={hello.src} py='200px' bgSize='cover' bgAttachment='fixed'>
        <Container maxW={1300} >
            <Heading>{hello.title}</Heading>
        </Container>
    </Box>
  )
}
