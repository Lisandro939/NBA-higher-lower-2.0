'use client'

import Link from 'next/link';
import React from 'react'

export default function Page({searchParams}) {

    const params = searchParams;

    const { result, state } = params;

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black text-white gap-4 bg-[url("/NBA-gif.gif")] bg-cover bg-center'>
        <p className='text-white font-semibold'>Tu resultado final fue:</p>
        <p className='text-4xl text-yellow-200 font-semibold'>{result}</p>
        {
            state === 'winner' && <p>¡Ganaste! La verdad es que sos un capo</p> 
        }
        {
            state === 'loser' && result === 0 && <p>0? En serio? Dale man </p>
        }
        {
            state === 'loser' && (result > 0 && result <= 5) && <p>Flojito che... </p>
        }
        {
            state === 'loser' && (result > 5 && result <= 10) && <p>Bueno, no está tan mal</p>
        }
        {
            state === 'loser' && (result > 10 && result <= 15) && <p>Bastante bien che</p>
        }
        {
            state === 'loser' && (result > 15 && result <= 20) && <p>Te estás acercando a ser un capo</p>
        }
        {
            state === 'loser' && (result > 20 && result <= 25) && <p>Están los capos y un pasito por atrás estás vos</p>
        }
        {
            state === 'loser' && (result > 25 && result <= 30) && <p>Sos un auténtico capo</p>
        }
        {
            state === 'loser' && (result > 30) && <p>Bestia, idolo, mastodonte, fiera, un semidios basicamente</p>
        }
        <Link className='px-8 py-2 border border-white rounded-full font-semibold md:hover:bg-white md:hover:text-black' href='/'>
            Volver al menu
        </Link>
        <Link className='px-8 py-2 border border-white rounded-full font-semibold md:hover:bg-white md:hover:text-black' href='/game'>
            Volver a jugar
        </Link>
    </div>
  )
}
