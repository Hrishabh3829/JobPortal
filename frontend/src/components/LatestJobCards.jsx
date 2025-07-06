import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


export const LatestJobCards = ({job}) => {

    const navigate=useNavigate()

    return (
        <div onClick={() => navigate(`/description/${job._id}`)} className='max-w-md mx-auto border rounded-xl p-5 shadow-md space-y-4'>
            {/* Company Info */}
            <div>
                <h2 className='text-lg font-semibold'>{job?.company?.name}</h2>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            {/* Job Info */}
            <div>
                <h1 className='text-xl font-bold'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap gap-2'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.position} Positions</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.jobType}</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}
