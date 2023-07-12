import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
<div className='grid grid-cols-2 grid-rows-2 gap-5 bg-red-500 p-10 text-center'>
  <div className='bg-gray-100'>Home</div>
  <div className='bg-gray-200'>login</div>
  <div className='bg-gray-300'>register</div>
  <div className='bg-gray-400'>about</div>
</div>

  </div>
  )
}
