import React from 'react'
import { Badge } from './ui/badge'

export const LatestJobCards = () => {
    return (
        <div className='max-w-md mx-auto border rounded-xl p-5 shadow-md space-y-4'>
            {/* Company Info */}
            <div>
                <h2 className='text-lg font-semibold'>Company Name</h2>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            {/* Job Info */}
            <div>
                <h1 className='text-xl font-bold'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap gap-2'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>12 Positions</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>Part time</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>24 LPA</Badge>
            </div>
        </div>
    )
}
