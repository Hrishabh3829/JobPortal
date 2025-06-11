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
    const {user}=useSelector(store=>store.auth)


    return (
        <div >
            <NavbarOne />

            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-7 p-8'>
                <div className='flex items-center gap-4'>
                    <Avatar className='h-24 w-24'>
                        <AvatarImage
                            src='https://cdn.mos.cms.futurecdn.net/dFH4TznAVPLvN8oYXKvhm7-1200-80.jpg.webp' alt="Profile"
                        />
                    </Avatar>
                    <div className='flex flex-col -mt-9'>
                        <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                        <p>{user?.profile?.bio}</p>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right -mt-7 mx-30 rounded-xl hover:bg-sky-200" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div>
                    <span className='flex gap-2 mx-10'><Mail />{user?.email}
                        <span className='flex gap-2'><Contact />{user?.phoneNumber}</span>
                    </span>

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
