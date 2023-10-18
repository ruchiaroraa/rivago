const mongoose = require ('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const movieSchema = mongoose.Schema(
    {
        name :{
            "type": String,
            "minLength": 2,
            'unique': true
        },
        description:{
            'type': String,
            'minLength':4
        },
        type:{
            'type': String,
           
        },
        amount:{
            'type': Number,
           
        },
        picture:{
            type:String
        }
        
        
    }
)



autoIncrement.initialize(mongoose.connection);
movieSchema.plugin(autoIncrement.plugin, 'Movie');
const Movie = new mongoose.model('Movie', movieSchema);

module.exports = Movie