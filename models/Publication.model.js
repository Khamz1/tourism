const mongoose = require("mongoose")
const publicationSchema = mongoose.Schema({
    header: String,
    image:String,
    desc:String,
    categorie:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Categories"
    }
})

const Publication = mongoose.model("Publication", publicationSchema)

module.exports = Publication



