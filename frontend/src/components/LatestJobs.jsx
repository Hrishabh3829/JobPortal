import { BriefcaseIcon, CheckCircleIcon, Sparkles, TrendingUpIcon } from 'lucide-react'
import React from 'react'
import { LatestJobCards } from './LatestJobCards'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job)
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="pb-16">
            <motion.div 
                className='max-w-7xl mx-auto mt-10 mb-16 text-center px-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div 
                    className='relative flex flex-col items-center justify-center'
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <motion.div
                        className='absolute -z-10 w-72 h-28 rounded-full bg-gradient-to-r from-blue-100/60 to-purple-100/60 blur-xl'
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2'>
                        Curated Opportunities
                    </h1>
                    <div className='flex flex-wrap items-center justify-center gap-2 mb-1'>
                        <motion.div 
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className='text-purple-500'
                        >
                            <Sparkles size={18} />
                        </motion.div>
                        <span className='text-gray-600 font-medium'>
                            Personalized job recommendations tailored to your skills
                        </span>
                        <motion.div 
                            animate={{ rotate: [0, -15, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className='text-purple-500'
                        >
                            <Sparkles size={18} />
                        </motion.div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 mt-4">
                        <motion.div 
                            className="flex items-center gap-1 text-sm text-gray-600"
                            whileHover={{ scale: 1.05, color: "#4f46e5" }}
                        >
                            <CheckCircleIcon size={16} />
                            <span>Verified employers</span>
                        </motion.div>
                        <motion.div 
                            className="flex items-center gap-1 text-sm text-gray-600"
                            whileHover={{ scale: 1.05, color: "#4f46e5" }}
                        >
                            <BriefcaseIcon size={16} />
                            <span>Top industries</span>
                        </motion.div>
                        <motion.div 
                            className="flex items-center gap-1 text-sm text-gray-600"
                            whileHover={{ scale: 1.05, color: "#4f46e5" }}
                        >
                            <TrendingUpIcon size={16} />
                            <span>Career growth potential</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            
            <motion.div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {allJobs.length <= 0 ? (
                    <div className="col-span-full text-center py-10">
                        <span className="text-gray-500 text-lg">No jobs available at the moment. Check back soon!</span>
                    </div>
                ) : (
                    allJobs?.slice(0, 6).map((job) => (
                        <motion.div key={job._id} variants={itemVariants}>
                            <LatestJobCards job={job} />
                        </motion.div>
                    ))
                )}
            </motion.div>
        </div>
    )
}
