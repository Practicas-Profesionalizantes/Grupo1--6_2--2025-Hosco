const { DataTypes } = require('sequelize');
const sequelize = require('../config/MySql.js');

const UserPerfil = sequelize.define('UserPerfil', {
    idUserPerf:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'usuarios',
            key: 'idUser'
        }
    },
    nombres:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull: false
    },    
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    enviarInfo: {
        type: DataTypes.ENUM(['si', 'no']),
        allowNull: false
    },
    certDeComunidad:{
        type: DataTypes.ENUM(['verificado', 'sin verificar']),
        allowNull: false
    },
    ban:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
},{
    tableName: 'userPerfil',
    timestamps: true,
},)

module.exports = UserPerfil;