import { Box, Button, Divider, Flex, Select, Stack, Text } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";


export const Home: FC = memo(() => {
    const navigate = useNavigate();
    const [level, setLevel] = useState("Easy");
    const onClickGoPage = () =>{
        navigate("/home/memoryGame");
    }
    const onChangeLevel =  (e: ChangeEvent<HTMLSelectElement>) =>{
        setLevel(e.target.value);
    }



    return (
    <Flex>
        <Box w="320px" h="240px" m="2" p="8" bg="white" borderRadius="10px" shadow="md">
            <Stack textAlign="center" justifyContent="center" alignItems="center" height="100%">
                <Text fontSize='xl'  display="flex" justifyContent="center" height="72px">MemoryGame</Text>
                <Divider />
                <Stack flexDirection="row">
                    <Select value={level} onChange={onChangeLevel} w="32">
                        <option value='Easy'>Easy</option>
                        <option value='Normal'>Normal</option>
                        <option value='Hard'>Hard</option>
                    </Select>
                    <PrimaryButton onClick={onClickGoPage}>START</PrimaryButton>
                </Stack>
            </Stack>
        </Box>
        <Box w="320px" h="240px" m="2" p="8" bg="white" borderRadius="10px" shadow="md">
            <Stack textAlign="center" justifyContent="center" alignItems="center" height="100%">
                <Text fontSize='xl'  display="flex" justifyContent="center" height="72px">coming soon</Text>
                <Divider />
                <Stack flexDirection="row">
                
                </Stack>
            </Stack>
        </Box>
        <Box w="320px" h="240px" m="2" p="8" bg="white" borderRadius="10px" shadow="md">
            <Stack textAlign="center" justifyContent="center" alignItems="center" height="100%">
                <Text fontSize='xl'  display="flex" justifyContent="center" height="72px">coming soon</Text>
                <Divider />
                <Stack flexDirection="row">
                
                </Stack>
            </Stack>
        </Box>
    </Flex>
    );
});
