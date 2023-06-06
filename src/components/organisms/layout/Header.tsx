import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, List, ListIcon, ListItem, useDisclosure } from "@chakra-ui/react";
import { memo, FC } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"

export const Header: FC = memo(() => {
    const {isOpen,onClose,onOpen} = useDisclosure();
    const navigate = useNavigate();
    const onClickGoHome =() => {
        navigate("/home");
        onClose();
    };
    const onClickGoMemoryGame =() => {
        navigate("/home/memoryGame");
        onClose();
    };
    return (
    <>
        <Flex
            as="nav"
            justifyContent="space-between"
            p="2"
            align="center"
            bgColor="#439A86"
            color="white"
            opacity="0.9"
            position="fixed"
            top="0"
            width="100%"
            >
            <Heading as="h1" fontSize="lg" pl="4">
            Practice App
            </Heading>
            <IconButton aria-label='HamburgerIcon' icon={<HamburgerIcon color="white" />} onClick={onOpen} bgColor="transparent" />
        </Flex>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent style={{backgroundColor:"#BCD8C1"}}>
            <DrawerCloseButton />
            <DrawerBody mt="40px" p="0">
                <List onClick={onClickGoHome} display="flex" alignItems="center" height="40px" px="16px" _hover={{cursor: "pointer", bgColor:"lightGray"}}>
                    <ListItem >Home</ListItem>
                </List>
                <List onClick={onClickGoMemoryGame} display="flex" alignItems="center" height="40px" px="16px" _hover={{cursor: "pointer", bgColor:"lightGray"}}>
                    <ListItem >Memory Game</ListItem>
                </List>
            </DrawerBody>

            <DrawerFooter>
                <List display="flex" alignItems="center">
                    <ListIcon />
                    <ListItem>ヘルプ</ListItem>
                </List>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    );
});
