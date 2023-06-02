import { Flex } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

import {Header} from "../organisms/layout/Header"

export const HeaderLayout: FC<{children:ReactNode}> = memo(({children}) => {
    return (
    <>
        <Header />
        {children}
    </>
    );
});
