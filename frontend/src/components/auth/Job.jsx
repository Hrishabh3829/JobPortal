
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

export const Job = () => {

    const navigate = useNavigate()
    const jobId="7uyerwu68935"
    return (
        <div className='p-6 rounded-md drop-shadow-xl bg-white border border-sky-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 Days ago</p>
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
                    <h1 className='font-medium text-lg'>Google</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Backend Developer</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quam dolorum illum voluptas maxime numquam a sint architecto non ducimus vitae, perspiciatis corporis temporibus voluptates dolore iste tenetur doloribus consequuntur?</p>
            </div>
            <div className='flex flex-wrap gap-2'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>12 Positions</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>Part time</Badge>
                <Badge className='text-blue-700 font-bold' variant='ghost'>24 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline" className="rounded-full bg-sky-100" onClick={() => navigate(`/description/${jobId}`)}>Details</Button>
                <Button variant="outline" className="rounded-full bg-sky-200">Save for later</Button>
            </div>

        </div>
    )
}
