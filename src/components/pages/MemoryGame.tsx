import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";


export const MemoryGame: FC = memo(() => {
    return (
    <Flex
        as="nav"
        justifyContent="space-between"
        p="2"
        align="center"
        bgColor="gray.300"
        opacity="0.9"
        position="fixed"
        top="0"
        width="100%"
        >MemoryGame画面</Flex>
        );
});
