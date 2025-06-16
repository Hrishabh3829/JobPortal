import { Company } from "../models/company.model.js"
import getDataUri from "../utils/dataUri.js"
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            })
        }


        let company = await Company.findOne({ name: companyName })
        if (company) {
            return res.status(400).json({
                message: "Same company name found!",
                success: false
            })
        }

        company = await Company.create({
            name: companyName,
            userId: req.id
        })

        return res.status(200).json({
            message: "Company registered successfully.",
            company,
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




export const getComapny = async (req, res) => {
    try {
        const userId = req.id  //logged in user id
        const companies = await Company.find({ userId })
        if (!companies) {
            return res.status(404).json({
                message: "companies not found",
                success: false
            })
        }
        return res.status(200).json({
            companies,
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


export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id
        const company = await Company.findById(companyId)
        if (!company) {
            return res.status(404).json({
                message: "company not found",
                success: false
            })
        }

        return res.status(200).json({
            company,
            success: true,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}




export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body
        //console.log(name)
        const file = req.file;
        //cloudinary
        const fileUri = getDataUri(file)
        const cloudResponse=await cloudinary.uploader.upload(fileUri.content)
        const logo = cloudResponse.secure_url

        const updateData = { name, description, website, location ,logo }

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true })
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }

        return res.status(200).json({
            company,
            message: "Company registered successfully ",
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