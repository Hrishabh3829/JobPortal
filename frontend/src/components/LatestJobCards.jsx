import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { BriefcaseIcon, BuildingIcon, LockIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'


export const LatestJobCards = ({job}) => {
    const navigate = useNavigate()
    const { user } = useSelector(store => store.auth)
    
    // Handle job card click based on authentication status
    const handleCardClick = () => {
        if (user) {
            // If user is logged in, navigate to job description
            navigate(`/description/${job._id}`)
        } else {
            // If not logged in, show message and redirect to login
            toast.info("Please login to view job details and apply", {
                description: "You'll be redirected to login page"
            })
            setTimeout(() => {
                navigate('/login', { state: { from: `/description/${job._id}` }})
            }, 1500)
        }
    }
    
    // Truncate description if it's too long
    const truncateDescription = (text, maxLength = 100) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return (
        <motion.div 
            onClick={handleCardClick} 
            className='border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md space-y-4 bg-white h-full cursor-pointer transition-all duration-200 relative'
            whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {/* Login required overlay for non-authenticated users */}
            {!user && (
                <motion.div 
                    className="absolute inset-0 bg-gray-900/5 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <motion.div 
                        className="bg-white p-3 rounded-lg shadow-md flex items-center gap-2 text-blue-600"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                    >
                        <LockIcon size={16} />
                        <span className="font-medium">Login to view details</span>
                    </motion.div>
                </motion.div>
            )}
            {/* Company Info */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                    <BuildingIcon size={18} />
                </div>
                <div>
                    <h2 className='text-lg font-semibold text-gray-900'>{job?.company?.name}</h2>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPinIcon size={14} className="mr-1" />
                        <span>{job?.location}</span>
                    </div>
                </div>
            </div>

            {/* Job Info */}
            <div className="border-t border-gray-100 pt-4">
                <h1 className='text-xl font-bold text-gray-900 mb-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600 line-clamp-2'>{truncateDescription(job?.description)}</p>
            </div>

            {/* Badges */}
            <div className='flex flex-wrap gap-2 pt-2'>
                <Badge className='bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium' variant='outline'>
                    <BriefcaseIcon size={14} className="mr-1" />
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium' variant='outline'>
                    {job?.jobType}
                </Badge>
                <Badge className='bg-green-50 hover:bg-green-100 text-green-700 font-medium' variant='outline'>
                    ₹{job?.salary} LPA
                </Badge>
            </div>
        </motion.div>
    )
}
