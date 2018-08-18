const mongoose = require('mongoose')
let url = 'mongodb://borracho:borracho12345@ds121382.mlab.com:21382/tipos-de-cervezas'

mongoose.connect(url)

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const ALESchema = new Schema({
    ale: ObjectId,
    StyleFam: String
});

const LAGERSchema = new Schema({
    lager: ObjectId,
    StyleFam: String
});

const SRMSchema = new Schema ({
    SRMColor: String,
    SRMNum: String
})

const cervezaSchema = new Schema({
    cer: ObjectId,
    StyleName: String,
    Nombre: String,
    abv: String, 
    styleALE: {
        type:Schema.ObjectId,
        ref: 'ALE'
    },
    styleLAGER: {
        type:Schema.ObjectId,
        ref: 'LAGER'
    },
    SRM: {
        type:Schema.ObjectId,
        ref: 'SRM'
    }

});

var LAGER = mongoose.model('LAGER', LAGERSchema)
var ALE = mongoose.model('ALE', ALESchema)
var SRM = mongoose.model('SRM', SRMSchema)
var cerveza = mongoose.model('cerveza', cervezaSchema)

module.exports = {LAGER, ALE, SRM, cerveza}