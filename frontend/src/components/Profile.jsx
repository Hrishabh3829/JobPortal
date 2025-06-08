import React, { useState } from 'react'
import NavbarOne from './shared/NavbarOne.jsx'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { ArrowBigDownDash, Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from '@radix-ui/react-label'
import { AppliedJobTable } from './AppliedJobTable.jsx'
import { UpdateProfileDialog } from './UpdateProfileDialog.jsx'



const skills = ["html", "java", "js", "express"]

const isResume = true
export const Profile = () => {
    
    const [open,setOpen]=useState(false)
    

    return (
        <div >
            <NavbarOne />

            <div className='max-w-4xl mx-30 bg-white border border-gray-200 rounded-2xl my-7 p-8'>
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
                    <Button onClick={()=> setOpen(true)}  className="text-right -mt-7 mx-30 rounded-xl hover:bg-sky-200" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div>
                    <span className='flex gap-2 mx-10'><Mail />aditya@gmail.com
                        <span className='flex gap-2'><Contact />98398298937</span>
                    </span>

                </div>
                <div className='mx-10 my-2 font-semibold'>
                    <h1>Skills</h1>
                    {skills.length !== 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {skills.map((item, index) => (
                                <Badge key={index}>{item}</Badge>
                            ))}
                        </div>
                    ) : (
                        <span className='font-semibold'>NA</span>
                    )}
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5 my-2 mx-10 '>
                    <Label className='text-md font-bold'>Resume</Label>
                    <div className='-my-2'>
                        {
                            isResume ? <a target='blank' href='https://hrishabhgupta.me' className='text-sky-500 hover:underline cursor-pointer transform transition-transform duration-200 hover:scale-110 inline-block'>Hey</a> : <span className='font-semibold'>NA</span>
                        }
                    </div>
                </div>

            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='text-purple-400 font-serif text-lg'>Applied Jobs</h1>
                {/* Applied job Table */}
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen}/>

        </div>
    )
}
