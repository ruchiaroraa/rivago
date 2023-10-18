const mongoose = require ('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const registerSchema = mongoose.Schema(
    {
        name :{
            "type": String,
            "minLength": 2,
            'unique': true
        },
        email:{
            'type': String,
            'minLength':4
        },
        password:{
            'type': String,
           
        },
        phone:{
            'type': Number,
           
        },
        address:{
            type:String
        }
        
        
    }
)



autoIncrement.initialize(mongoose.connection);
registerSchema.plugin(autoIncrement.plugin, 'Register');
const Register = new mongoose.model('Register', registerSchema);

module.exports = Register