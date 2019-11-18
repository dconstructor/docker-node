import Project from '../model/project'
export async function createProject(req,res){
    const {name,priority,description,deliverydate} =req.body

    try {
        let newproject=await Project.create({
            name,
            priority,
            description,
            deliverydate
        },{
            fields:['name','priority','description','deliverydate']
        })
        console.log(newproject)
        
        if (newproject) {
            res.json({message:'created',data:newproject},)
            
        }
        
    } catch (error) {
        res.status(500).json({
            message:'error'
        })
    }
}
export async function getProjects(req,res){
    try {
        const rpta=await Project.findAll()
        res.json(rpta)
    } catch (error) {
        res.status(500).json({
            message:'error'
        })
        
    }
}

export async function getProject(req,res){
    try {
        const {id}=req.params
        const rpta=await Project.findOne({
            where:{
                id
            }
        })
        res.json(rpta)
    } catch (error) {
        res.status(500).json({
            message:'error'
        })
        
    }
}

export async function deleteProject(req,res){
    try {
        const {id}=req.params
        const rpta=await Project.destroy({
            where:{
                id
            }
        })
        res.json({
            message:'project deleted'
        })
    } catch (error) {
        res.status(500).json({
            message:'error'
        })
        
    }
}
export async function updateProject(req,res){
    try {
        const {id}=req.params
        const {name,priority,description,deliverydate}=req.body
        const projects=await Project.findAll({
            attributes:['id','name','priority','description','deliverydate'],
            where:{
                id
            }
        })

        if (projects.length>0) {
            projects.forEach(async project => {
              await project.update({
                name,
                priority,
                description,
                deliverydate
              })  
            })
        }

        res.json({
            message:'project updated'
        })
    } catch (error) {
        res.status(500).json({
            message:'error'
        })
        
    }
}
