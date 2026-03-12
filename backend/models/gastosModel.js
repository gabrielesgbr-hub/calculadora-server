const mongoose = require('mongoose')

const gastosSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor ingresa una descripcion del gasto']
    },
    importe: {
        type: Number,
        required: [true, 'Por favor ingresa una descripcion del importeo']
    } 
},{
    timestamps: true
})

module.exports = mongoose.model('Gasto', gastosSchema)