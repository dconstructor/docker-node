import Sequelize from 'sequelize'

const seq= new Sequelize(
    'oscar',//base de datos
    'oscar',//usuario
    '123',//contrasena
    {
        host:'db',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
    }
)

export {seq}