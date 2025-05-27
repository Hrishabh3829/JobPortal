import React from 'react'
import { Button } from './ui/button'
import { AtSign, LogIn, Search } from 'lucide-react'

export const Herosection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className=" mx-auto px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-medium text-sm shadow-sm">
          Unlock your career
        </span>
        <h1 className=' text-5xl font-bold'>
          Search, Apply & <br /> Get your <span className='text-[#6A38C2]'>Dream Jobs</span>
        </h1>
        <h2>e impedit ut delectus nostrum, corporis saepe. Ratione modi sapiente cupiditate sit obcaecati ab perferendis, ipsam adipisci.</h2>
        <div className=' flex w-[40%] shadow-lg border border-sky-300 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input
            type='text'
            placeholder='Start your journey'
            className='outline-none border-none w-full'
          />
        </div>
        <Button className='mx-auto rounded-t-lg'>
          <Search />Search
          
        </Button>
      </div>
    </div>
  )
}
