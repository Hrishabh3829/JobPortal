import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export const AdminJobTable = () => {
    const { searchCompanyByText } = useSelector(store => store.company)
    const { allAdminJobs, searchJobsByText } = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState([])
    const navigate = useNavigate()

    // console.log('allAdminJobs:', allAdminJobs)

    useEffect(() => {
        if (!allAdminJobs) {
            setFilterJobs([])
            return
        }

        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchCompanyByText) {
                return true
            }

            const companyName = job?.company?.name?.toLowerCase() || ''
            const jobTitle = job?.title?.toLowerCase() || job?.position?.toLowerCase() || ''
            const searchText = searchCompanyByText.toLowerCase()

            return companyName.includes(searchText) || jobTitle.includes(searchText)
        })

        setFilterJobs(filteredJobs)
    }, [allAdminJobs, searchCompanyByText])

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <AnimatePresence>
                        {
                            filterJobs?.length > 0 ? (
                                filterJobs.map((job) => (
                                    <motion.tr
                                        key={job._id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: job._id ? parseInt(job._id.substring(job._id.length - 4), 16) % 5 * 0.05 : 0
                                        }}
                                    >
                                        <TableCell>{job?.company?.name || 'N/A'}</TableCell>
                                        <TableCell>{job?.title || 'N/A'}</TableCell>
                                        <TableCell>{job?.createdAt?.split("T")[0] || 'N/A'}</TableCell>
                                        <TableCell className="text-right cursor-pointer">
                                            <Popover>
                                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                <PopoverContent className="w-32">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 }}
                                                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                                                        className='flex items-center gap-2 w-fit cursor-pointer'
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Edit2 className='w-4' />
                                                        <span>Edit</span>
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.2 }}
                                                        onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                                        className='flex items-center w-fit gap-2 cursor-pointer mt-2'
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Eye className='w-4' />
                                                        <span>Applicants</span>
                                                    </motion.div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>
                                    </motion.tr>
                                ))
                            ) : (
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TableCell colSpan={4} className="text-center">
                                        No jobs found
                                    </TableCell>
                                </motion.tr>
                            )
                        }
                    </AnimatePresence>
                </TableBody>
            </Table>
        </div>
    )
}