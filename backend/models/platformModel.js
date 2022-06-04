const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    plans: String,
    offers: String,
    category: String,
    heroimage: String,
    link: String,
})

const model = mongoose.model('platform', schema);

module.exports = model;