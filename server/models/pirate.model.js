const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Pirate name required"]
    },
    img: { 
        type: String,
        required: [true, "Image URL required"]
    },
    chests: { 
        type: Number,
        min: [1, "Must have at least 1 chest to be a pirate!"]
    },
    phrase: { 
        type: String,
        required: [true, "Phrase required"]
    },
    position: { 
        type: String,
        required: [true, "Position required"],
        unique: true
    },
    pegLeg: { type: String },
    eyePatch: { type: String },
    hookHand: { type: String }

}, { timestamps: true });

PirateSchema.plugin(uniqueValidator);

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);