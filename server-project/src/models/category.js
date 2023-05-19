const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    potho: String,
    created_at: { type: Date, default: Date.now}
})