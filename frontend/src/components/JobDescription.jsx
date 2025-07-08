import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from './redux/jobSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, BriefcaseIcon, BuildingIcon, CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react'

// import store from './redux/store'


export const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job)
    const { user } = useSelector(store => store.auth)
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant == user?._id) || false
    const navigate = useNavigate()

    const [isApplied, setIsApplied] = useState(isInitiallyApplied)
    
    // Redirect to login if not authenticated
    useEffect(() => {
        if (!user) {
            toast.error("Please login to view job details and apply", {
                description: "You need to be logged in to access this page"
            })
            navigate('/login', { state: { from: window.location.pathname }})
        }
    }, [user, navigate])

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            } 
        }
    }
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    }

    const params = useParams()
    const jobId = params.id;
    // useGetSingleJob(jobId)//custom hook for single job
    const dispatch = useDispatch()

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            console.log(res.data)
            if (res.data.success) {
                setIsApplied(true)//update the local state
                const updatedSingleJob={...singleJob,applications:[...singleJob.applications, {applicant:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob))//helps to real time update 
                toast.success(res.data.message)
                // dispatch(setSingleJob)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job))
                    setIsApplied(res.data.job.applications.some(application=>application.applicant=== user?._id))

                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id])
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <motion.div 
            className='max-w-5xl mx-auto my-10 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
            >
                <Button 
                    onClick={handleGoBack} 
                    variant="outline" 
                    className="flex items-center gap-2 border-blue-200 hover:bg-blue-50 text-blue-700"
                >
                    <motion.span 
                        whileHover={{ x: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <ArrowLeftIcon size={16} />
                    </motion.span>
                    <span>Back</span>
                </Button>
            </motion.div>
            <motion.div 
                className='flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
                <div className='space-y-3'>
                    <motion.div 
                        className='my-2'
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <BuildingIcon size={16} />
                            </div>
                            <span className="text-gray-500 font-medium">{singleJob?.company?.name || 'Company'}</span>
                        </div>
                        <h1 className='font-bold text-2xl text-gray-900'>{singleJob?.title}</h1>
                    </motion.div>
                    <motion.div 
                        className='flex flex-wrap gap-2'
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Badge className='bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium' variant='outline'>
                            <BriefcaseIcon size={14} className="mr-1" />
                            {singleJob?.position} Positions
                        </Badge>
                        <Badge className='bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium' variant='outline'>
                            {singleJob?.jobType}
                        </Badge>
                        <Badge className='bg-green-50 hover:bg-green-100 text-green-700 font-medium' variant='outline'>
                            ₹{singleJob?.salary} LPA
                        </Badge>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.4 }}
                    whileHover={!isApplied ? { scale: 1.05 } : {}}
                    whileTap={!isApplied ? { scale: 0.95 } : {}}
                >
                    <Button 
                        onClick={isApplied ? null : applyJobHandler} 
                        disabled={isApplied}
                        className={`
                            rounded-lg px-6 py-2.5 text-white font-medium transition-colors duration-200
                            ${isApplied
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 shadow-md'
                            }
                        `}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </motion.div>
            </motion.div>
            
            <motion.h1 
                className='border-b-2 border-b-gray-300 font-semibold p-4 mt-8 mb-4 text-xl bg-gray-50 rounded-t-lg'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                {singleJob?.description}
            </motion.h1>
            
            <motion.div 
                className='my-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1">
                        <BriefcaseIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Role</h2>
                        <p className='text-gray-700'>{singleJob?.title}</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-1">
                        <MapPinIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Location</h2>
                        <p className='text-gray-700'>{singleJob?.location}</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1">
                        <BriefcaseIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Description</h2>
                        <p className='text-gray-700 whitespace-pre-line'>{singleJob?.description}</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-1">
                        <BriefcaseIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Experience</h2>
                        <p className='text-gray-700'>{singleJob?.experience} years</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                        <BriefcaseIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Salary</h2>
                        <p className='text-gray-700'>₹{singleJob?.salary} LPA</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mt-1">
                        <UsersIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Total Applicants</h2>
                        <p className='text-gray-700'>{singleJob?.applications?.length || 0}</p>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='flex items-start'>
                    <div className="w-8 h-8 mr-4 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 mt-1">
                        <CalendarIcon size={16} />
                    </div>
                    <div>
                        <h2 className='font-bold text-gray-800'>Posted Date</h2>
                        <p className='text-gray-700'>{singleJob?.createdAt?.split("T")[0] || 'N/A'}</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
