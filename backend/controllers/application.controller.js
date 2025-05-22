import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js"

export const applyJob = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.id
        if (!jobId) {
            return res.status(404).json({
                message: "Job id is required",
                success: false
            })
        }

        //check if the user is already applied
        const existingApplicant = await Application.findOne({ job: jobId, applicant: userId })
        if (!existingApplicant) {
            return res.status(400).json({
                message: "You have already applied for this job",
                success: false
            })
        }

        const job = await Job.findById({ jobId })
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        //create new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(newApplication._id)
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully",
            success: true
        })



    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}


export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } }
            }
        })
        if (!application) {
            return res.status(404).json({
                message: "No Applications found!",
                success: false
            })
        }
        return res.status(200).json({
            message: "Applied jobs found",
            application,
            success: true
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}


//Admin dekhega ki kitne users ne apply kiya hai
export const getAplicants = async (req, res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById({ jobId }).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        })

        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            })
        }

        return res.status(200).json({
            job,
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}



export const updateStatus = async(req,res)=>{
    try {
        const {status} = req.body
        const applicationId = req.params.id
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })
        }
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Internal server error.",
            success:false
        })
    }
}