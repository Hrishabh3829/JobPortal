import { PandaIcon, Pickaxe } from 'lucide-react'
import React from 'react'
import { LatestJobCards } from './LatestJobCards'
import { useSelector } from 'react-redux'



// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]

export const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job)
   

    return (
        <div>
            <div className='-mt-8 max-w-7xl mx-auto my-20 text-center'>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-2xl font-bold text-blue-400'>
                        Top Picks for You
                    </h1>
                    <span className='text-sky-200 animate-bounce'>
                        <PandaIcon />
                    </span>

                </div>

            </div>
            <div className='-mt-10 grid grid-cols-3 gap-4 my-auto mx-40'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0, 6).map((job) => <LatestJobCards
                        
                        key={job._id} job={job} />)
                }
            </div>
        </div>


    )
}
