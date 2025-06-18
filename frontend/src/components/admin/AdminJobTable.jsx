import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
                    {
                        filterJobs?.length > 0 ? (
                            filterJobs.map((job) => (
                                <TableRow key={job._id}>
                                    <TableCell>{job?.company?.name || 'N/A'}</TableCell>
                                    <TableCell>{job?.title || 'N/A'}</TableCell>
                                    <TableCell>{job?.createdAt?.split("T")[0] || 'N/A'}</TableCell>
                                    <TableCell className="text-right cursor-pointer">
                                        <Popover>
                                            <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                            <PopoverContent className="w-32">
                                                <div 
                                                    onClick={() => navigate(`/admin/jobs/${job._id}`)}
                                                    className='flex items-center gap-2 w-fit cursor-pointer'
                                                >
                                                    <Edit2 className='w-4' />
                                                    <span>Edit</span>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    No jobs found
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}