import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"
}))   // in case jab hum chahte h ki express url aate hue data ko samjh paye..
app.use(express.static("public"))  //in case jab hum koe files apne server pr store karna chahte h..

// for access from server -user ka cookies and can perform CRUD operation on cookies ...
app.use(cookieParser())


export {app}