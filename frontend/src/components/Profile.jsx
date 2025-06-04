import React from 'react'
import NavbarOne from './shared/NavbarOne'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'

export const Profile = () => {
    return (
        <div>
            <NavbarOne />

            <div className='max-w-6xl mx-30 bg-white border border-gray-200 rounded-2xl my-7 p-8'>
                <div className='flex items-center gap-4'>
                    <Avatar className='h-24 w-24'>
                        <AvatarImage
                            src='https://cdn.mos.cms.futurecdn.net/dFH4TznAVPLvN8oYXKvhm7-1200-80.jpg.webp' alt="Profile"
                        />
                    </Avatar>
                    <div className='flex flex-col -mt-9'>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                    <Button className="text-right -mt-7 mx-30 rounded-xl hover:bg-sky-200" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div>
                    <span className='flex gap-2 mx-10'><Mail />aditya@gmail.com
                        <span className='flex gap-2'><Contact />98398298937</span>
                    </span>

                </div>
                <div className='mx-10'>
                    <h1>Skills</h1>
                    {
                        [1,2,3,4].map((item,index)=><Badge key={index}>{item}</Badge>)
                    }
                </div>
            </div>

        </div>
    )
}
