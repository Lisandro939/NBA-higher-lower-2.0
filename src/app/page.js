import Link from 'next/link'
import { AiFillCaretRight } from 'react-icons/ai'

export default function Home() {

  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center bg-[url("/NBA.jpg")] bg-cover' >
      <div className='flex flex-col items-center justify-center'>
        <p className='font-bold text-white'>THE</p>
        <h1 className='text-3xl font-bold text-white'>NBA</h1>
        <h2 className='text-green-600 text-4xl font-bold'>HIGHER</h2>
        <h2 className='text-red-600 text-4xl font-bold'>LOWER</h2>
        <p className='font-bold text-white'>GAME</p>
      </div>
      <p className='text-white'>
        Quién cobra más?
      </p>
      <Link href={'/game'} className='rounded-full bg-green-500 pr-2 pl-10 py-2 text-white font-semibold flex flex-row items-center justify-end gap-2'>
        <p>Jugar</p>
        <AiFillCaretRight className='text-2xl' />
      </Link>
      <p className='text-white w-1/2 text-center text-xs border border-white p-2 rounded-lg bg-black/50'>Dado que algunos jugadores cobran lo mismo, si tienen igual salario se contará como correcto si presionaste Mas</p>
    </div>
  )
}
