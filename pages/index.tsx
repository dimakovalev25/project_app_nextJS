import Head from 'next/head';
// import Htag from "@/components/Htag/Htag";
// import Button from "@/components/Button/Button";

import {Htag, Button, Paragraf, Tag, Rating} from '../components'
import {useEffect, useState} from "react";
import {is} from "@babel/types";

export default function Home(): JSX.Element {

    const [counter, setCounter] = useState<number>(0)
    const [rating, setRating] = useState<number>(4)
    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {

        if(!isShow) {
            return
        }

        const timer = setInterval(() => {
            setCounter(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }

    }, [isShow])

    return (
        <>
            <h1>next app</h1>
            <button onClick={() => setIsShow(true)}>start</button>
            <button onClick={() => setIsShow(false)}>stop</button>
            <h6>{counter}</h6>
            <Rating rating={rating} isEditeble={true} setRating={setRating}/>
            {/*<Button arrow={'right'} appearence={'primary'}>add</Button>*/}
            {/*<Paragraf size={'18px'}>paragraff18</Paragraf>*/}
            {/*<Tag color={'red'} size={'m'}>tag</Tag>*/}
        </>
    )
};
