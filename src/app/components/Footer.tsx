import { Box, Container, Grid, Heading,SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/panaverse.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box bg='gray.700'>
        <Container maxW={1400}>
            <SimpleGrid spacing='20px' py='50px' templateColumns={{sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)' , lg:"repeat(4, 1fr)"}} >
                <Box>
                    <Heading pb='15px' color='gray.200'>About Us</Heading>
                    <Image src={Logo} alt='Panaverse Logo' height={80} width={130} />
                    <Text pt='15px' pr='40px' color='gray.300'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.    
                    </Text>
                </Box>
                <Box>
                    <Heading color='gray.200' >Useful Links</Heading>
                    <Grid pt='40px' color='gray.300'>
                    <Link href='' >Home</Link>
                    <Link href='' >Syllabus</Link>
                    <Link href='' >Explore</Link>
                    <Link href='' >About</Link>
                    <Link href='' >Contact</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading color='gray.200' >Follow Us</Heading>
                    <Grid pt='40px' color='gray.300'>
                    <Link href='' >Facebook</Link>
                    <Link href='https://www.youtube.com/@panaverse' >Youtube</Link>
                    <Link href='' >Twitter</Link>
                    <Link href='' >Linkedin</Link>
                    <Link href='' >GitHub</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading color='gray.200' >Contact Us</Heading>
                    <Grid pt='40px' color='gray.300'>
                    <Link href='' >+923211234567</Link>
                    <Link href='' >abc@email.com</Link>
                    <Link href='' >Karachi</Link>
                    </Grid>
                </Box>
                
            </SimpleGrid>
        </Container>
    </Box>
  )
}
