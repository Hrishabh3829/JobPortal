
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

export const Job = ({ job }) => {

    const navigate = useNavigate()
    // const jobId="7uyerwu68935"

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime)
        const currentTime = new Date()
        const timeDifference = currentTime - createdAt
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60))

    }
    return (
        <div className='p-6 rounded-md drop-shadow-xl bg-white border border-sky-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) == 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full " size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button className="-top-0" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage
                            src="https://cdn.mos.cms.futurecdn.net/dFH4TznAVPLvN8oYXKvhm7-1200-80.jpg.webp"
                        />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap gap-2'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.position}Positions</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.jobType}</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline" className="rounded-full bg-sky-100" onClick={() => navigate(`/description/${job?._id}`)}>Details</Button>
                <Button variant="outline" className="rounded-full bg-sky-200">Save for later</Button>
            </div>

        </div>
    )
}
