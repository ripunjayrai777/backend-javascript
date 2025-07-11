// ek method banaya aur use export kar diya..

import { Promise } from "mongoose"

// promis method se- first method asynchandler
const asyncHandler = (requestHandler) => {
     (req, res, next) = {
       Promise.resolve (requestHandler(req, res, next)).catch((err) => next(err))
     }
}

export {asyncHandler}

//try catch method - second method...
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message 
//         })
//     }
// }