import React, { useState } from 'react'
import NavbarOne from './shared/NavbarOne.jsx'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { ArrowBigDownDash, Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from '@radix-ui/react-label'
import { AppliedJobTable } from './AppliedJobTable.jsx'
import { UpdateProfileDialog } from './UpdateProfileDialog.jsx'
import { useSelector } from 'react-redux'



// const skills = ["html", "java", "js", "express"]

const isResume = true
export const Profile = () => {

    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)


    return (
        <div >
            <NavbarOne />

            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-7 p-8'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
                    <Avatar className='h-24 w-24 rounded-full border shadow-md'>
                        <AvatarImage
                            src={user?.profile?.profilePhoto}
                            alt="Profile"
                            className='h-full w-full rounded-full object-cover'
                        />
                    </Avatar>

                    <div className='flex-1 w-full'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <h1 className='font-semibold text-2xl'>{user?.fullname}</h1>
                                <p className='text-gray-600 text-sm mt-1'>{user?.profile?.bio}</p>
                            </div>
                            <Button
                                onClick={() => setOpen(true)}
                                className='rounded-xl text-sm px-3 py-1 hover:bg-sky-100'
                                variant='outline'
                            >
                                <Pen size={16} />
                            </Button>
                        </div>
                        <div className='mt-2 text-sm text-gray-700 space-y-1'>
                            <div className='flex items-center gap-2'>
                                <Mail size={16} /> {user?.email}
                            </div>
                            <div className='flex items-center gap-2'>
                                <Contact size={16} /> {user?.phoneNumber}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-10 my-2 font-semibold'>
                    <h1>Skills</h1>
                    {user?.profile?.skills.length !== 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {user?.profile?.skills.map((item, index) => (
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
                            isResume ? <a target='blank' href={user?.profile?.resume} className='text-sky-500 hover:underline cursor-pointer transform transition-transform duration-200 hover:scale-110 inline-block'>{user?.profile?.resumeOriginalName}</a> : <span className='font-semibold'>NA</span>
                        }
                    </div>
                </div>

            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='text-purple-400 font-serif text-lg'>Applied Jobs</h1>
                {/* Applied job Table */}
                <AppliedJobTable />
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />

        </div>
    )
}
