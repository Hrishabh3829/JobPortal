import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from './redux/jobSlice'
import { useNavigate } from 'react-router-dom'

export const Herosection = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }


  return (
    <div className='text-center -mt-7'>
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
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
          />
        </div>
        <Button onClick={searchJobHandler} className='mx-auto rounded-t-lg'>
          <Search />Search

        </Button>
      </div>
    </div>
  )
}
