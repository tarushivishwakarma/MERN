const routes=require('express').Router()
const {addProject,approveProject,rejectProject}=require('../controllers/projectcontroller')

routes.post('/add',addProject)
routes.patch('/approve/:id',approveProject)
routes.patch('/reject/:id',rejectProject)

module.exports=routes