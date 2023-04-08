import { Box, Container, SimpleGrid, Flex, Button,Menu,MenuButton,MenuList,MenuItem,IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import logo from "../../../public/panaverse.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Box boxShadow="lg" bg="gray.300">
      <Container maxW={1400}>
        <SimpleGrid templateColumns={{lg:"repeat(3,1fr)",md:'repeat(3,1fr)',base:'repeat(2,1fr)'}}>
          <Box>
            <Image src={logo} alt="Panaverse Logo" height={80} width={130} />
          </Box>
          <Flex
            display={{ lg: "flex", md:'flex' ,base: "none" }}
            gap={10}
            placeItems="center"
            color="black"
            fontSize={18}
            fontWeight="semibold"
          >
            <Link href="">Home</Link>
            <Link href="">Syllabus</Link>
            <Link href="">Explore</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </Flex>
          <Box display={{ lg: "initial",md:'initial' , base: "none" }}>
            <Button float="right" mt="14px" colorScheme="blackAlpha" size="lg">
              Apply
            </Button>
          </Box>
          <Box pt='14px' display={{ lg: "none",md:'none' , base: "initial" }} >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                float='right'
                bg='blackAlpha.500'
                size='lg'
                
              />
              <MenuList >
                <MenuItem>
                  Home
                </MenuItem>
                <MenuItem>
                  Syllabus
                </MenuItem>
                <MenuItem>
                  Explore
                </MenuItem>
                <MenuItem>
                  About
                </MenuItem>
                <MenuItem>
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
