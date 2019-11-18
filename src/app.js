import morgan from 'morgan'
import express,{json} from 'express'
import taskRouter from './routes/task.routes'
import projectRouter from './routes/project.routes'
const app = express()


//middlewares
app.use(morgan('dev'))
app.use(json())

//routes
app.use('/api/task',taskRouter)
app.use('/api/project',projectRouter)

export default app



