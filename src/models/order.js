const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const orderSchema = new mpngoose.Schema({
    owner : {
        type: ObjectID,
        required: true,
        ref: 'User'
    },
    items: [{
        productId: {
            type: ObjectID,
            ref: 'Item',
            required: true
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

modeule.exports = Order