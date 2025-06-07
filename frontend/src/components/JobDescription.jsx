import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export const JobDescription = () => {
    const isApplied = true
    return (

        <div className='max-w-5xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Title</h1>
                    <div className='flex flex-wrap gap-2'>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>12 Positions</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>Part time</Badge>
                        <Badge className='text-blue-700 font-bold' variant='ghost'>24 LPA</Badge>
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
            <h1 className='border-b-2 border-b-gray-300 font-medium'>Job Description</h1>
        </div>
    )
}
