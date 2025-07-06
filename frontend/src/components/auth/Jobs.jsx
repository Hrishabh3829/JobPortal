import React, { useEffect, useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { FilterCard } from './FilterCard'
import { Job } from './Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'


// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]


export const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState(allJobs)

    useEffect(()=>{
        if(searchedQuery){
            const filteredJobs = allJobs.filter((job)=>{
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || 
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedQuery.toLowerCase())
                
            })
            setFilterJobs(filteredJobs)
        }else{
            setFilterJobs(allJobs)
        }
    },[allJobs,searchedQuery])

    return (
        <div>
            <NavbarOne />
            <div className='mt-10 mx-20 '>
                <div className='flex gap-5 '>
                    <div className='w-40%'>
                        <FilterCard />
                    </div>

                    {
                        filterJobs.length <= 0 ? <span>Jobs not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div 
                                            initial={{opacity:0 , x:100}}
                                            animate={{opacity:1,x:0}}
                                            exit={{opacity:0,x:-100}}
                                            transition={{duration:0.3}}
                                            key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
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
