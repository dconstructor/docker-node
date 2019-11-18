import {Sequelize} from 'sequelize'
import {seq} from '../database/db'
import task from './task'
const project=seq.define('project',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    name:{
        type:Sequelize.TEXT
    },
    priority:{
        type:Sequelize.INTEGER
    },
    description:{
        type:Sequelize.TEXT
    },
    deliverydate:{
        type:Sequelize.DATE
    }
},{
    timestamps:false
})

project.hasMany(task,{
    foreignKey:'projectid',
    sourceKey:'id'
})
task.belongsTo(project,{
    foreignKey:'projectid',
    sourceKey:'id'
})

export default project