import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { FilterCard } from './FilterCard'
import { Job } from './Job'
import { useSelector } from 'react-redux'
import store from '../redux/store'



const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]


export const Jobs = () => {
    const {allJobs}= useSelector(store=>store.job)
    return (
        <div>
            <NavbarOne />
            <div className='mt-10 mx-20 '>
                <div className='flex gap-5 '>
                    <div className='w-40%'>
                        <FilterCard />
                    </div>

                    {
                        allJobs.length <= 0 ? <span>Jobs not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) =>(
                                            <div key={job?._id}>
                                                <Job job={job}/>
                                            </div>
                                    ))}

                                </div>


                            </div>

                        )
                    }


                </div>
            </div>

        </div>
    )
}
