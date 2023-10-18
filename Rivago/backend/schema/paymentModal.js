const mongoose = require ('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const paymentSchema = mongoose.Schema(
    {
        person :{
            "type": Number,
            "unique":false
        },
        transport:{
            'type': String,
            "unique":false
        }
        
    }
)



autoIncrement.initialize(mongoose.connection);
paymentSchema.plugin(autoIncrement.plugin, 'Payment');
const Payment = new mongoose.model('Payment', paymentSchema);

module.exports = Payment