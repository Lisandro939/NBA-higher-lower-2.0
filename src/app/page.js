import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Link href={'/game'} className='rounded-full bg-black px-4 py-2 text-white hover:shadow-md hover:shadow-gray-600'>
        Empezar
      </Link>
    </div>
  )
}
