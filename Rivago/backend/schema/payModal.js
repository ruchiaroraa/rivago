const mongoose = require ('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Payschema = mongoose.Schema(
    {
        persons:{
            "type":Number
        },
        transportMode:{
            "type":String
        }
    }
)



autoIncrement.initialize(mongoose.connection);
Payschema.plugin(autoIncrement.plugin, 'Pay');
const Pay = new mongoose.model('Pay', Payschema);

module.exports = Pay