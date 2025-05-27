import multer from 'multer'

const storage = multer.memoryStorage()
export const singleMulter = multer({storage}).single("file")