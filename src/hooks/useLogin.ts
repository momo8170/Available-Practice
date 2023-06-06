import { useCallback } from "react";
import {useNavigate} from "react-router-dom"

import {useMessage} from "../hooks/useMessage"

export const useLogin =() =>{
    const navigate =useNavigate();
    const {showMessage} =useMessage();
    const login = useCallback((text:string)=>{
        if(text==="mail"){
            navigate("/home");
            showMessage({title:"ログイン成功", status:"success"})
        } else {
            showMessage({title:"パスワードが間違っています", status:"error"})
        }
    }, []);

    return {login}
}