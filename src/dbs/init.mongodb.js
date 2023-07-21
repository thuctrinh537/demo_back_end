'use strict'

const mongoose = require ('mongoose')
//const { db: {host, name, port} } = require('../configs/config.mongodb')
const connectString = 'mongodb://localhost:27017/demo'
const { countConnect } = require('../helpers/check.connect')

console.log('ConnectString', connectString)

class Database{

    constructor(){
        this.connect()
    }

    connect(type = 'mongodb'){
        if (1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
    
        mongoose.connect (connectString).then ( _ => {
            console.log('Success', countConnect())
        })
        .catch( err => console.log ('Error Connect'))
    
    }

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
