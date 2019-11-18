import {Sequelize} from 'sequelize'
import {seq} from '../database/db'
const task=seq.define('task',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    },
    done:{
        type:Sequelize.BOOLEAN
    },
    projectid:{
        type:Sequelize.INTEGER
    }

},{
    timestamps:false
})
export default task