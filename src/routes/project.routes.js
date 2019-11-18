import {Router} from 'express'
import {createProject,getProjects,getProject,deleteProject,updateProject} from '../controller/project.controller'
const router=Router()

// /api/project
router.post('/',createProject)
router.get('/',getProjects)
router.get('/:id',getProject)
router.delete('/:id',deleteProject)
router.put('/:id',updateProject)

export default router