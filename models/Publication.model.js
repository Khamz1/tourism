const mongoose = require("mongoose")
const publicationSchema = mongoose.Schema({
    header: String,
    geoTag:String,
    image:[],
    desc:String,
    categorie:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Categories"
    },
    price: Number 

})

const Publication = mongoose.model("Publication", publicationSchema)

module.exports = Publication



