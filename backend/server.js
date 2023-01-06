const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/db/dbConnect')
const authMiddleware = require('./middleware/authMiddleware')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')
const userRoutes = require('./routes/user/userRoutes')
const bookRoutes = require('./routes/book/bookRoutes')


const app = express()
dotenv.config()
//db
dbConnect()

app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/books',bookRoutes)

app.use(notFound)
app.use(errorHandler)
app.use(authMiddleware)

const PORT = process.env.PORT 
app.listen(PORT, console.log(`server is running at ${PORT}`))