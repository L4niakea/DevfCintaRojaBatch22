const mongoose = require('mongoose')
let url = 'mongodb://borrachito:pedote123@ds153380.mlab.com:53380/cerveceria';

mongoose.connect(url)

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const estiloSchema = new Schema({
    Estilo:ObjectId,
    Fam:String
});

const cervezaSchema = new Schema ({
    Cerveza:ObjectId,
    Nombre:String,
    ABV:Number,
    SRM:{
        type:Schema.ObjectId,
        ref: 'SRM'
    }
});

var Cerveza = mongoose.model('Cerveza', cervezaSchema);
var Estilo = mongoose.model('Estilo', estiloSchema);

module.exports = {Cerveza, Estilo}

