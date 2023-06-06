import { Button } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: ()=>void;
}

export const SecondaryButton: FC<Props> = memo((props) => {
    const {children,onClick} = props;
    return (
        <Button bgColor="#BCD8C1" onClick={onClick}>{children}</Button>
        );
});