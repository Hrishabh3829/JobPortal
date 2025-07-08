import React, { useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'


const companyArray = [];

export const PostJob = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    })
    const [loading, setLoading] = useState(false)
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const { companies } = useSelector(store => store.company)

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }
    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value)
        setInput({ ...input, companyId: selectedCompany._id })

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(input)
        try {
            setLoading(true)
            const res = await axios.put(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/admin/jobs")
            }
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div>
            <NavbarOne />
            <motion.div 
                className='flex items-center justify-center w-screen my-5'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
            >
                <motion.form 
                    onSubmit={submitHandler} 
                    className='p-6 bg-white rounded-2xl border border-gray-100 shadow-sm'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className='grid grid-cols-1 md:grid-cols-2 gap-4'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                placeholder="Senior Software Engineer"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                placeholder="Brief job description"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                placeholder="React, Node.js, 3+ years"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Salary</Label>
                            <Input
                                type="number"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                placeholder="8 LPA"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                placeholder="New York, Remote"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                placeholder="Full-time, Part-time"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Experience</Label>
                            <Input
                                type="number"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                placeholder="2-5 years"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>

                        <motion.div 
                            className='group'
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="text-gray-700 font-medium mb-2 block">Positions</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                placeholder="3"
                                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 group-hover:border-gray-300"
                            />
                        </motion.div>
                        {
                            companies.length > 0 && (
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Select onValueChange={selectChangeHandler}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    companies && companies.length > 0 ? (
                                                        companies.map((company, index) => {
                                                            return (
                                                                <SelectItem key={index} value={company?.name?.toLowerCase()}>
                                                                    {company.name}
                                                                </SelectItem>
                                                            )
                                                        })
                                                    ) : (
                                                        <SelectItem value="no-companies" disabled>
                                                            No companies available
                                                        </SelectItem>
                                                    )
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </motion.div>
                            )
                        }
                    </motion.div>


                    <motion.div 
                        className='w-full mt-6'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="px-4 sm:px-0">
                            {
                                loading ? 
                                <Button className='w-full my-4'>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait
                                </Button> : 
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Button type="submit" className="w-full my-2">
                                        Post New Job
                                    </Button>
                                </motion.div>
                            }
                        </div>
                        {
                            companies.length === 0 && 
                            <motion.p 
                                className='text-xs text-red-600 font-bold text-center my-3'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                *Please register company first, before posting jobs
                            </motion.p>
                        }
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    )
}