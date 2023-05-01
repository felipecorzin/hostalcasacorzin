const { Schema, model } = require('mongoose');

const PlanSchema = Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    img: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        //required: [ true, 'Debe de existir una referencia a un cliente' ]
    }
});

PlanSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

PlanSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Plan',PlanSchema );