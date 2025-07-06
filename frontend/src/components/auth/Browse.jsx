import React, { useEffect } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Job } from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '../redux/jobSlice';
import { useGetAllJobs } from '@/hooks/useGetAllJobs';


// const randomJobs = [1, 2, 64, 3];

export const Browse = () => {
    useGetAllJobs()
    const { allJobs } = useSelector(store => store.job)
    const dispatch=useDispatch()
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""))
        }
    },[])
    return (
        <div>
            <NavbarOne />
            <div className='max-w-7xl  my-10 mx-10'>
                <h1 className='my-3 font-bold text-xl'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>

                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
