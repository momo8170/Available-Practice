import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage =() =>{
    type Props = {
        title:string;
        status:'success'| 'error'| 'warning'| 'info';
    }
    const toast = useToast();
    const showMessage = useCallback((props:Props)=>{
        const {title,status} = props;
        toast({
            title,
            status,
            position: 'bottom-right',
            isClosable: true,
            duration: 3000,
        })
    }, []);

    return {showMessage}
}