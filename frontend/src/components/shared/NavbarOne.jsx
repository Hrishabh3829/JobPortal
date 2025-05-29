import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { LogIn, LogOut, User2 } from "lucide-react"



const NavbarOne = () => {
    const user = false
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-5xl h-16'>
                <div>
                    <Link to="/">
                        <span className="text-3xl font-semibold text-blue-400 tracking-wide">Job</span>
                        <span className="text-4xl font-semibold text-purple-400 tracking-wide">Vista</span>

                    </Link>
                </div>
                <div className="flex items-center gap-12">
                    <ul className='flex font-medium items-center gap-5'>
                        <Link to="/">
                            <li>Home</li>
                        </Link >
                        <Link to="/jobs">
                            <li>Jobs</li>
                        </Link>
                        <Link to="/browse">
                            <li>Browse</li>
                        </Link>
                    </ul>
                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login">
                                    <Button className="bg-white text-black hover:bg-gray-100">
                                        Login<LogIn />
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-sky-500 hover:bg-sky-600 text-white ">
                                        SignUp
                                    </Button>
                                </Link>
                            </div>

                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className="cursor-pointer">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="w-8 h-8 rounded-full" />
                                        </Avatar>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto">
                                    <div className="flex gap-3">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                                className="w-8 h-8 rounded-full"
                                            />
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="font-medium">Hrishabh Gupta</h4>
                                            <p className="text-sm text-muted-foreground">cloud developer</p>
                                            <div className="flex flex-col gap-3 my-2">
                                                <div className="flex flex-row gap-6">
                                                    <User2 className="flex" />
                                                    <Button variant="link" className="p-0 h-auto text-sm">View Profile</Button>
                                                </div>
                                                <div className="flex flex-row gap-6">
                                                    <LogOut className="flex" />
                                                    <Button variant="link" className="p-0 h-auto text-sm">Logout</Button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </PopoverContent>

                            </Popover>
                        )
                    }


                </div>
            </div>

        </div>



    )

}
export default NavbarOne