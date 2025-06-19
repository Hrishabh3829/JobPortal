import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from './redux/authSlice'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'


export const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)

    const { user } = useSelector(store => store.auth)

    const [input, setInput] = useState({
        fullname: user?.fullname || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.profile?.bio || '',
        skills: user?.profile?.skills?.map(skill => skill) || [],
        file: user?.profile?.resume
    })

    const dispatch = useDispatch();

    const changeEventhandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData()
        formData.append("fullname", input.fullname)
        // formData.append("email", input.email)

        formData.append("phoneNumber", input.phoneNumber)
        formData.append("bio", input.bio)
        formData.append("skills", input.skills)
        if (input.file) {
            formData.append("file", input.file)
        }

        // console.log(formData.get('fullname'))
        try {
            setLoading(true)
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                },
                withCredentials: true
            })
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                toast.success(res.data.message)
                setOpen(false);
            }
        } catch (error) {
            console.log(error)

            toast.error(error.response?.data?.message || 'An error occurred')
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="fullname">Name</Label>
                            <Input
                                id="fullname"
                                name="fullname"
                                className="col-span-3"
                                type="text"
                                value={input.fullname}
                                onChange={changeEventhandler}
                            />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label>Email</Label>
                            <p className='col-span-3 text-gray-700 text-sm'>{input.email}</p>
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="phoneNumber">Number</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                className="col-span-3"
                                value={input.phoneNumber}
                                onChange={changeEventhandler}
                            />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="bio">Bio</Label>
                            <Input
                                id="bio"
                                name="bio"
                                className="col-span-3"
                                value={input.bio}
                                onChange={changeEventhandler}
                            />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="skills">Skills</Label>
                            <Input
                                id="skills"
                                name="skills"
                                className="col-span-3"
                                value={input.skills}
                                onChange={changeEventhandler}
                            />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label htmlFor="file">Resume</Label>
                            <Input
                                id="file"
                                name="file"
                                type="file"
                                accept="application/pdf"
                                onChange={fileChangeHandler}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        {loading ? (
                            <Button className='w-full my-4' disabled>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4">
                                Update
                            </Button>
                        )}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}