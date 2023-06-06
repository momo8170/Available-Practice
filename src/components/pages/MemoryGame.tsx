import { Box, Card, Divider, Flex, Text } from "@chakra-ui/react";
import { memo, FC, useState, useEffect } from "react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { useMessage } from '../../hooks/useMessage';

export const MemoryGame: FC = memo(() => {
    const {showMessage} =useMessage();
    const [clickable, setClickable] = useState(false);
    const [leftCards, setLeftCards] = useState(0);
    const [isFlipped, setIsFlipped] = useState<boolean[]>([false]);
    const [cards, setCards] = useState<Cards[]>([]);
    const navigate = useNavigate();


    const level:string="normal";

    useEffect(() => {
        createCards();
    },[]);

    //カードを生成
    const createCards =()=>{
        let cardLength:number=0;
        switch(level){
            case "easy":
                cardLength = 4;
                break;
            case "normal":
                cardLength = 8;
                break;
            case "hard":
                cardLength = 12;
                break;
        }

        /** 1以上24以下の整数値の乱数を返す */
        const intRandom = ()=>{
            return Math.floor( Math.random() * 24) + 1;
        }

        /** 重複チェックしながら乱数作成 */
        let randomNumber:number[]=[];
        for(let i = 1; i <= cardLength;){
            var tmp = intRandom();
            if(!randomNumber.includes(tmp)){
                randomNumber.push(tmp);
                i++;
            }
        }
        console.log(randomNumber)

        // 同じ数字を2個ずつ複製
        const cloneArray = randomNumber.concat(randomNumber);

        // 配列の要素の順番を入れ替える
        for (let i = cloneArray.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * (i + 1))
            let tmpStorage = cloneArray[i]
            cloneArray[i] = cloneArray[rand]
            cloneArray[rand] = tmpStorage
        }

        // showFlagをセットする
        const initCards:Cards[] = [];
        cloneArray.map((card,i)=>(
            initCards[i] = {num:cloneArray[i], showFlag:true}
        ))
        setCards(initCards);
        setAllIsFlippedFalse(initCards);
        setLeftCards(initCards.length)
    }

    //isFlippedをすべてFalseにセット
    const setAllIsFlippedFalse = (initCards?:Cards[])=>{
        const initIsFlipped:boolean[] = [];

        if(initCards){
            initCards.map((v,i)=>(
                initIsFlipped[i] = false
            ))
        } else {
            cards.map((v,i)=>(
                initIsFlipped[i] = false
            ))
        }
        setIsFlipped(initIsFlipped)
    }

    //showFlagをTrueにセット
    const setShowFlagTrue = (index:number)=>{
        cards[index].showFlag = false;
    }

    // カードが押下された時
    const onClickCard = (index:number)=> {
        if(!clickable){
            isFlipped[index] = !isFlipped[index];
            const newIsFlipped:boolean[] = [...isFlipped];
    
            setIsFlipped([]);
            setIsFlipped(newIsFlipped);
    
            const isFlippedTrue:number[]=[];
            newIsFlipped.filter((value, index) => {
                if(value === true){
                    isFlippedTrue.push(index);
                }
            })
    
            if(isFlippedTrue.length === 2){
                setClickable(true)
                if(cards[isFlippedTrue[0]].num === cards[isFlippedTrue[1]].num){
                    showMessage({title:"Correct!", status:"success"})
                    setTimeout(()=> {
                    setShowFlagTrue(isFlippedTrue[0]);
                    setShowFlagTrue(isFlippedTrue[1]);
                    setAllIsFlippedFalse();
                    setClickable(false)
                    setLeftCards(cards.filter(card => card.showFlag === true).length);
                    }, 1500);
                } else {
                    setTimeout(()=> {
                    setAllIsFlippedFalse();
                    setClickable(false)
                    }, 1500);
                }
            }
        }
    }

    //リトライボタン押下時
    const onClickRetry = ()=>{
        createCards();
    }

    //Homeボタン押下時
    const onClickGoPage = ()=>{
        navigate("/home");
    }


    return (
        <Flex flexDir="column">
            <Flex justifyContent="space-between" alignItems="center" p="16px">
                <Flex>
                    <Text>残り：　{leftCards} 枚　/　{cards.length}枚</Text>
                </Flex>
                <Flex>
                    <PrimaryButton onClick={onClickRetry}>Retry</PrimaryButton>
                    <Divider orientation='vertical' mx="16px" />
                    <SecondaryButton onClick={onClickGoPage}>Home</SecondaryButton>
                </Flex>
            </Flex>
            <Flex flexWrap="wrap">
                {cards.map((card,index)=>(
                    card.showFlag &&
                    <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="vertical" key={index}>
                        <Card onClick={()=>onClickCard(index)} h="200px" width="120px" m="4" fontSize="8xl" alignItems="center" justifyContent="center" _hover={{cursor:"pointer", backgroundColor:"lightGray"}}>?</Card>
                        <Card h="200px" width="120px" m="4" fontSize="8xl" alignItems="center" justifyContent="center">{card.num}</Card>
                    </ReactCardFlip>
                ))}
            </Flex>
        </Flex>

        );
});
