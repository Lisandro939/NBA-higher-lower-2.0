'use client'

import { API } from '@/API/API'
import React, {useEffect, useState} from 'react'
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'
import {FaEquals} from 'react-icons/fa'
import {BsCheckLg, BsXLg} from 'react-icons/bs'
import { formatNumberToMillions } from '../../functions/formatNumbersToMillions'
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter()

    const playersArray = API;
    // 39

    const [arrayNumbers, setArrayNumbers] = useState(shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]))
    const [index, setIndex] = useState(0)
    const [scoreNumber, setScoreNumber] = useState(0)

    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const button = 'z-10 text-yellow-200 rounded-full px-4 py-2 border border-white flex flex-row gap-2 items-center justify-center'
    const [styleButtons, setStyleButtons] = useState('')
    const [check, setCheck] = useState('hidden')
    const [wrong, setWrong] = useState('hidden')
    const [VSP, setVSP] = useState('')

    const [stylePlayerOne, setStylePlayerOne] = useState('')
    const [stylePlayerTwo, setStylePlayerTwo] = useState('')
    const [stylePlayerThree, setStylePlayerThree] = useState('')
    const [styleVS, setStyleVS] = useState('bg-white')
    const [lastP, setLastP] = useState('')

    const divStyleOne = {
        backgroundImage: `url(${playersArray[arrayNumbers[index]].image})`,
    };

    const divStyleTwo = {
        backgroundImage: `url(${playersArray[arrayNumbers[index + 1]].image})`,
    };

    const divStyleThree = {
        backgroundImage: `url(${playersArray[arrayNumbers[index + 2]].image})`,
    };

    function handleClickMore () {
        if (playersArray[arrayNumbers[index + 1]].salary > playersArray[arrayNumbers[index]].salary) {
        handleClickAnimationOkay()
            setScoreNumber(scoreNumber + 1)
        } else {
            handleClickAnimationWrong()
        }
    }

    function handleClickEqual () {
        if (playersArray[arrayNumbers[index + 1]].salary == playersArray[arrayNumbers[index]].salary) {
            handleClickAnimationOkay()
            setScoreNumber(scoreNumber + 1)
        } else {
            handleClickAnimationWrong()
        }
    }

    function handleClickLess () {
        if (playersArray[arrayNumbers[index + 1]].salary < playersArray[arrayNumbers[index]].salary) {
            handleClickAnimationOkay()
            setScoreNumber(scoreNumber + 1)
        } else {
            handleClickAnimationWrong()
        }
    }

    function handleClickAnimationOkay () {
        setStyleButtons('hidden')
        setLastP('hidden')
        handleClick()
        setTimeout(() => {
            setStylePlayerOne('transition-all duration-700 transform -translate-y-full')
            setStylePlayerTwo('transition-all duration-700 transform -translate-y-full')
            setStylePlayerThree('transition-all duration-700 transform -translate-y-full')
        }, 3000)
        setTimeout(() => {
            setStyleVS('transform bg-green-500')
            setVSP('hidden')
            setCheck('')
        }, 2000)
        setTimeout(() => {
            setStyleVS('transform animate-shrink')
        }, 2700)
        setTimeout(() => {
            setStyleVS('transfrom animate-grow bg-white')
            setVSP('')
            setCheck('hidden')
        }, 3700)
        setTimeout(() => {
            setIndex(index + 1)
            setStylePlayerOne('')
            setStylePlayerTwo('')
            setStylePlayerThree('')
            setStyleButtons('')
            setLastP('')
            if (index == 36) {
                router.push(`/result?result=${scoreNumber}&state=winner`)
            }
        }, 3700)
    }

    function handleClickAnimationWrong () {
        setStyleButtons('hidden')
        setLastP('hidden')
        handleClick()
        setTimeout(() => {
            setStyleVS('transform bg-red-500')
            setVSP('hidden')
            setWrong('')
        }, 2000)
        setTimeout(() => {
            router.push(`/result?result=${scoreNumber}&state=loser`)
          }, 2000)
    }

    const [counter, setCounter] = useState(0);
    const [styleCounter, setStyleCounter] = useState('hidden')

    function handleClick() {
        setStyleCounter('')
        const targetNumber = playersArray[arrayNumbers[index + 1]].salary; // Número objetivo
        const duration = 4000; // Duración de la animación en milisegundos
        const increment = targetNumber / (duration / 2); // Incremento por cuadro de animación (16ms)

        let currentNumber = counter;
        let start = null;

        function animateCounter(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const incrementValue = Math.ceil(increment * progress);
        currentNumber = incrementValue >= targetNumber ? targetNumber : incrementValue;
        setCounter(currentNumber);
        if (progress < duration) {
            requestAnimationFrame(animateCounter);
        }
        }

        requestAnimationFrame(animateCounter);
        setTimeout(() => {
            setStyleCounter('hidden')
        }, 3700)
    }

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
        <div className='absolute inset-0 z-10 w-full h-full flex items-center justify-center'>
            <div className={`${styleVS} text-xl w-12 h-12 p-2 rounded-full transition-all duration-700 font-bold flex items-center justify-center`}>   
                <p className={VSP}>VS</p>
                <BsCheckLg className={check} />
                <BsXLg className={wrong} />
            </div>
        </div>
        <container className='h-screen w-screen relative'>
            <div className={'h-1/2 w-screen relative top-0 bg-cover bg-top ' + stylePlayerOne} style={divStyleOne}>
                <div className='absolute w-full h-full bg-black/60 flex flex-col gap-2 text-white items-center justify-center'>
                    <h1 className='text-2xl text-shadow font-semibold'>
                        {playersArray[arrayNumbers[index]].name} {playersArray[arrayNumbers[index]].lastname}
                    </h1>
                    <p>
                        cobra
                    </p>
                    <p className='text-4xl text-yellow-200'>
                        ${formatNumberToMillions(playersArray[arrayNumbers[index]].salary)}
                    </p>
                </div>
            </div>
            <div className={'h-1/2 w-screen relative bottom-0 bg-cover bg-top ' + stylePlayerTwo} style={divStyleTwo}>
            <div className='absolute w-full h-full bg-black/60 flex flex-col text-white items-center justify-center'>
                    <h1 className='text-2xl text-shadow font-semibold'>
                        {playersArray[arrayNumbers[index + 1]].name} {playersArray[arrayNumbers[index + 1]].lastname}
                    </h1>
                    <p className='py-2'>
                        cobra
                    </p>
                    <p className={'text-4xl text-yellow-200 ' + styleCounter}>
                        ${formatNumberToMillions(counter)}
                    </p>
                    <div className={'flex flex-col gap-2 my-2 ' + styleButtons}>
                        <button onClick={handleClickMore} className={button}>
                            <p className='w-14'>Mas</p>
                            <AiFillCaretUp />
                        </button>
                        <button onClick={handleClickEqual} className={button}>
                            <p className='w-14'>Igual</p>
                            <FaEquals />
                        </button>
                        <button onClick={handleClickLess} className={button}>
                            <p className='w-14'>Menos</p>
                            <AiFillCaretDown />
                        </button>
                    </div>
                    <p className={'text-sm ' + lastP}>
                        que {playersArray[arrayNumbers[index]].name} {playersArray[arrayNumbers[index]].lastname}
                    </p>
                </div>
            </div>
            <div className={'h-1/2 w-screen relative bottom-0 bg-cover bg-top ' + stylePlayerThree} style={divStyleThree}>
            <div className='absolute w-full h-full bg-black/60 flex flex-col gap-2 text-white items-center justify-center'>
                    <h1 className='text-2xl text-shadow font-semibold'>
                        {playersArray[arrayNumbers[index + 2]].name} {playersArray[arrayNumbers[index + 2]].lastname}
                    </h1>
                    <p>
                        cobra
                    </p>
                </div>
            </div>
        </container>
    </div>
  )
}