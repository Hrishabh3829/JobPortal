import React from 'react'
import NavbarOne from '../shared/NavbarOne'
import { FilterCard } from './FilterCard'
import { Job } from './Job'



const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]


export const Jobs = () => {
    return (
        <div>
            <NavbarOne />
            <div className='mt-10 mx-20 '>
                <div className='flex gap-5 '>
                    <div className='w-40%'>
                        <FilterCard />
                    </div>

                    {
                        jobsArray.length <= 0 ? <span>Jobs not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        jobsArray.map((item, index) =>(
                                            <div>
                                                <Job />
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
