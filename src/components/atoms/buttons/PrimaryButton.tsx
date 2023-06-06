import { Button } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    onClick: ()=>void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
    const {children,onClick} = props;
    return (
        <Button onClick={onClick}  bgColor="#439A86">{children}</Button>
        );
});
