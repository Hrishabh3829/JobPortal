import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

export const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job)
    return (
        <div className='mx-auto'>
            <Table>
                <TableCaption>
                    List of your Applied Jobs
                </TableCaption>

                <TableHeader>
                    <TableRow >
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createAt}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className='text-right'><Badge>{appliedJob.status}</Badge></TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}
