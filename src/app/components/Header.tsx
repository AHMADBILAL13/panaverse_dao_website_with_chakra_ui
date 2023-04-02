"use client"
import { Box ,Container,SimpleGrid,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import logo from '../../../public/panaverse.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <Box boxShadow='lg' bg='gray.300'> 
        <Container maxW={1400}>
            <SimpleGrid templateColumns='repeat(3,1fr)'>
               <Box>
                <Image src={logo} alt='Panaverse Logo' height={80} width={130}/>
                </Box>
                <Flex gap={10} placeItems='center' color='black' fontSize={18} fontWeight='semibold'>
                    <Link href='' >Home</Link>
                    <Link href='' >Syllabus</Link>
                    <Link href='' >Explore</Link>
                    <Link href='' >About</Link>
                    <Link href='' >Contact</Link>
                </Flex>
                <Box>
                    <Button float='right' mt='14px' colorScheme='blackAlpha' size='lg' >Apply</Button>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
