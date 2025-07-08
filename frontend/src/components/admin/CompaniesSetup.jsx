import React, { useEffect, useState } from 'react'
import NavbarOne from '../shared/NavbarOne'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { useGetCompanyById } from '@/hooks/useGetCompanyById'
import { motion } from 'framer-motion'

export const CompaniesSetup = () => {
    const navigate = useNavigate()
    const params = useParams()
    useGetCompanyById(params.id)

    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })

    const { singleCompany } = useSelector(store => store.company)
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



    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0]
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(input)
        const formData = new FormData()
        formData.append("name", input.name)
        formData.append("description", input.description)
        formData.append("website", input.website)
        formData.append("location", input.location)
        if (input.file) {
            formData.append("file", input.file)
        }
        try {
            setLoading(true)
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/admin/companies")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null

        })
    }, [singleCompany]);
    return (
        <div>
            <NavbarOne />
            <motion.div 
                className='max-w-xl mx-auto my-5 md:my-10 px-4 md:px-0'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
            >
                <motion.div 
                    className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 p-4 sm:p-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                            onClick={() => navigate("/admin/companies")} 
                            className="flex items-center gap-2 text-gray-600 font-semibold" 
                            variant="outline"
                        >
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                    </motion.div>
                    <motion.h1 
                        className='font-bold text-xl'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        Company Setup
                    </motion.h1>
                </motion.div>
                <motion.form 
                    onSubmit={submitHandler}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <Label className="my-1 block">Company Name</Label>
                            <Input
                                type="text" name="name" value={input.name} onChange={changeEventHandler}
                                className="w-full"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <Label className="my-1 block">Description</Label>
                            <Input
                                type="text" name="description" value={input.description} onChange={changeEventHandler}
                                className="w-full"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <Label className="my-1 block">Website</Label>
                            <Input
                                type="url" name="website" value={input.website} onChange={changeEventHandler}
                                className="w-full"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
                            <Label className="my-1 block">Location</Label>
                            <Input
                                type="text" name="location" value={input.location} onChange={changeEventHandler}
                                className="w-full"
                            />
                        </motion.div>
                        <motion.div 
                            className="sm:col-span-2"
                            variants={itemVariants} 
                            whileHover={{ scale: 1.02 }} 
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Label className="my-1 block">Logo</Label>
                            <Input
                                type="file" accept="image/*" onChange={changeFileHandler}
                                className="w-full"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {
                            loading ? 
                            <Button className='w-full my-4'>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait
                            </Button> : 
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button type="submit" className="w-full my-4">
                                    Update
                                </Button>
                            </motion.div>
                        }
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    )
}
