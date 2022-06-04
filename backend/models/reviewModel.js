const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    websitename: String,
    url: String,
    heroimage: String,
    description: String,
})

const model = mongoose.model('review', schema);

module.exports = model;