import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Briefcase, BookOpen } from 'lucide-react'
import DecryptedText from './DecryptedText'

export const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/Hrishabh3829',
            icon: <Github size={24} />,
            color: 'bg-sky-500 hover:bg-sky-600'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/hrishabh-gupta-6a0445225/',
            icon: <Linkedin size={24} />,
            color: 'bg-blue-400 hover:bg-blue-500'
        },
        {
            name: 'Email',
            url: 'https://mail.google.com/mail/u/0/?to=hrishabhkumar567@gmail.com&fs=1&tf=cm',
            icon: <Mail size={24} />,
            color: 'bg-cyan-500 hover:bg-cyan-600'
        }
    ]

    const skills = [
        'React.js', 'Node.js', 'Express.js',
        'MongoDB', 'JavaScript',
        'Redux', 'Tailwind CSS', 'Framer Motion',
        'RESTful APIs', 'Git', 'Multer', 'Cloudinary', 'shadcn-ui'
    ]

    return (
        <motion.div
            className="py-16 px-4 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header Section */}
            <motion.div
                className="text-center mb-16"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 text-transparent bg-clip-text">
                    About JobVista
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                    A modern job portal created by me, connecting talented professionals with their dream careers
                </p>
            </motion.div>

            {/* Developer Profile */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid mb-16"
            >
                {/* Bio Section */}
                <motion.div
                    variants={item}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold mb-4">
                        <DecryptedText
                            text="Hrishabh Gupta"
                            animateOn="view"
                            sequential={true}
                            speed={80}
                            revealDirection="center"
                            className="bg-gradient-to-r from-cyan-500 to-blue-400 text-transparent bg-clip-text"
                            encryptedClassName="text-gray-300"
                        />
                    </h2>
                    <h3 className="text-xl text-sky-500 font-medium mb-4">
                        Full Stack Developer & Creator of JobVista
                    </h3>
                    <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                        I'm a passionate full-stack developer with expertise in building modern web applications. JobVista represents my commitment to creating seamless, user-friendly platforms that solve real-world problems.
                    </p>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        With a focus on React.js, Node.js, and modern web technologies, I strive to create applications that are not only functional but also aesthetically pleasing and accessible to all users.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex gap-3 flex-wrap justify-center">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-4 py-2 rounded-full ${social.color} text-white transition-transform`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                                <span>{social.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Skills & Experience Section */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-white to-sky-50 p-8 rounded-xl shadow-lg border border-sky-100"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Code size={28} className="text-cyan-500" />
                        <h2 className="text-2xl font-semibold text-sky-700">Technical Skills</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="bg-sky-50 px-3 py-1.5 rounded-full text-sky-700 text-sm font-medium border border-sky-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + (index * 0.05) }}
                                whileHover={{ scale: 1.05, backgroundColor: "#bae6fd" }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Project Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg border border-blue-100"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase size={28} className="text-blue-400" />
                        <h2 className="text-2xl font-semibold text-sky-700">Project Highlights</h2>
                    </div>
                    <ul className="space-y-4">
                        {['JobVista Portal', 'Student Analytics ', 'Chat App'].map((project, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 rounded-full bg-sky-100 p-1">
                                    <BookOpen size={16} className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-medium">{project}</h3>
                                    <p className="text-sm text-gray-600">
                                        {index === 0 ?
                                            'A full-stack job portal connecting recruiters and job seekers with modern UI/UX' :
                                            index === 1 ?
                                                'Data visualization platform for student performance analytics' :
                                                'Real-time chat application with user authentication and messaging features'
                                        }
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Quote Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-16 text-center"
            >
                <blockquote className="text-2xl italic font-light text-gray-600 max-w-3xl mx-auto">
                    "Building intuitive and accessible web experiences is not just my profession—it's my passion."
                </blockquote>
                <p className="mt-4 font-medium">— Hrishabh Gupta</p>
            </motion.div>
        </motion.div>
    )
}
