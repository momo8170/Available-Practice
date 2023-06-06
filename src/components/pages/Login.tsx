import { Box, Button, Divider, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";


export const Login: FC = memo(() => {
    const [text, setText] =  useState('');
    const {login} = useLogin();

    const onClickLogin = ()=>{
        login(text);
    }
    const onClickClear = ()=>{
        setText("");
    }
    const onChangeText = (e:ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value);
    }
    return (
        <Flex height="100vh" align="center" justifyContent="center">
            <Box w="sm" p="6">
                <Text fontSize='3xl'  display="flex" justifyContent="center">Practice App</Text>
                <Divider my="4" />
                <Stack>
                    <Input placeholder='Enter Password  *「mail」と入力' value={text} onChange={onChangeText} />
                    <PrimaryButton onClick={onClickLogin}>Login</PrimaryButton>
                    <SecondaryButton onClick={onClickClear}>Clear</SecondaryButton>
                </Stack>
            </Box>
        </Flex>

        );
});
