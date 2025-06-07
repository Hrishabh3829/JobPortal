import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

export const AppliedJobTable = () => {
    return (
        <div>
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
                        [1,2].map((item,index)=>(
                            <TableRow key={index}>
                                <TableCell>7-6-2025</TableCell>
                                <TableCell>SDE Intern</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}
