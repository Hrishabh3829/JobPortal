import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from './redux/jobSlice'
import { useDispatch, useSelector } from 'react-redux'
// import store from './redux/store'

export const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job)
    const { user } = useSelector(store => store.auth)
    const isApplied = singleJob?.applications?.some(application => application.applicant == user?._id) || false

    const params = useParams()
    const jobId = params.id;
    // useGetSingleJob(jobId)//custom hook for single job
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))

                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id])
    return (

        <div className='max-w-5xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='my-2'>
                        <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>{singleJob?.position}Positions</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>{singleJob?.jobType}</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied}
                    className={`
                                rounded-lg px-4 py-2 text-white font-medium transition-colors duration-200
                                        ${isApplied
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-blue-400 hover:bg-blue-500 active:bg-blue-600 shadow-sm'
                        }
                    `}
                >
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-semibold p-4 '>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-2 '>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-2 '>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-2 '>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-2 '>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}yrs</span></h1>
                <h1 className='font-bold my-2 '>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                <h1 className='font-bold my-2 '>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                <h1 className='font-bold my-2 '>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
            </div>
        </div>
    )
}
