'use client'

import Link from 'next/link';
import React from 'react'

export default function Page({searchParams}) {

    const params = searchParams;

    const { result, state } = params;

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black text-white gap-4'>
        <p className='text-white'>Tu resultado final fue {result}</p>
        {
            state === 'winner' ? <p>¡Ganaste!</p> : <p>Perdiste :(</p>
        }
        <Link className='px-4 py-2 border border-white rounded-full hover:shadow-md hover:shadow-gray-300' href='/game'>
            Volver a jugar
        </Link>
    </div>
  )
}
